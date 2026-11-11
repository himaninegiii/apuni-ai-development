import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { ChatMessage, PageId } from '../types';
import {
  Mic,
  MicOff,
  Send,
  Volume2,
  VolumeX,
  Sparkles,
  RotateCcw,
  AlertCircle,
  FileCheck,
  Compass,
  ExternalLink,
  Loader2,
  RefreshCw,
  Info,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const AssistantPage: React.FC = () => {
  const { t, language, navigateTo, triggerExternalRedirect } = useApp();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(true);
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Initial welcome message in both languages
  useEffect(() => {
    const initialGreeting: ChatMessage = {
      id: 'welcome-msg',
      sender: 'assistant',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language,
      isDemonstration: false,
      text:
        language === 'en'
          ? "Namaste! I am Apuni AI, your Uttarakhand citizen services assistant powered by Gemini. You can ask me in English, Hindi (हिंदी), or Hinglish (e.g., 'Mujhe income certificate banana hai'). Which service can I guide you with today?"
          : "नमस्ते! मैं अपुणी AI हूँ, जेमिनी द्वारा संचालित आपका उत्तराखंड नागरिक सेवा सहायक। आप मुझसे हिंदी, English या हिंग्लिश (जैसे 'Mujhe income certificate banana hai') में पूछ सकते हैं। आज मैं आपकी क्या सहायता कर सकता हूँ?",
      quickActions: [
        { label: language === 'en' ? 'Income Certificate Guide' : 'आय प्रमाण पत्र गाइड', targetPage: 'guide', serviceId: 'income-certificate' },
        { label: language === 'en' ? 'Domicile Checklist' : 'मूल निवास चेकलिस्ट', targetPage: 'checklist', serviceId: 'domicile-certificate' },
        { label: language === 'en' ? 'Caste Certificate Info' : 'जाति प्रमाण पत्र', targetPage: 'guide', serviceId: 'caste-certificate' }
      ]
    };
    setMessages([initialGreeting]);
  }, [language]);

  // Scroll to bottom on new message or loading state change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Setup Web Speech Recognition if available
  useEffect(() => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = language === 'hi' ? 'hi-IN' : 'en-IN';

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          if (transcript) {
            setInputText(transcript);
            handleUserSend(transcript);
          }
          setIsListening(false);
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      } catch {
        setSpeechSupported(false);
      }
    } else {
      setSpeechSupported(false);
    }

    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  const toggleListening = () => {
    if (!speechSupported) {
      const sample = language === 'hi' ? 'मुझे जाति प्रमाण पत्र बनवाना है।' : 'Mujhe income certificate banana hai.';
      setInputText(sample);
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch {
        setIsListening(false);
      }
    }
  };

  // Text to speech for accessible audio read aloud
  const handleReadAloud = (msg: ChatMessage) => {
    if (!('speechSynthesis' in window)) return;

    if (activeSpeechId === msg.id) {
      window.speechSynthesis.cancel();
      setActiveSpeechId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner speech
    const cleanText = msg.text.replace(/[*#_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);

    // Auto-detect if text has Devanagari characters
    const hasDevanagari = /[\u0900-\u097F]/.test(msg.text);
    utterance.lang = hasDevanagari ? 'hi-IN' : 'en-IN';
    utterance.rate = 0.95;

    utterance.onend = () => {
      setActiveSpeechId(null);
    };
    utterance.onerror = () => {
      setActiveSpeechId(null);
    };

    setActiveSpeechId(msg.id);
    window.speechSynthesis.speak(utterance);
  };

  // Detect relevant quick actions based on the query or AI response text
  const extractQuickActions = (text: string) => {
    const lower = text.toLowerCase();
    const actions: Array<{ label: string; targetPage: PageId; serviceId?: string }> = [];

    if (lower.includes('income') || lower.includes('आय') || lower.includes('aay')) {
      actions.push({
        label: language === 'hi' ? 'आय दस्तावेज़ चेकलिस्ट' : 'Income Checklist',
        targetPage: 'checklist',
        serviceId: 'income-certificate'
      });
      actions.push({
        label: language === 'hi' ? 'आवेदन चरण देखें' : 'Application Guide',
        targetPage: 'guide',
        serviceId: 'income-certificate'
      });
    } else if (lower.includes('caste') || lower.includes('जाति') || lower.includes('jati') || lower.includes('obc') || lower.includes('sc') || lower.includes('st')) {
      actions.push({
        label: language === 'hi' ? 'जाति प्रमाण पत्र चेकलिस्ट' : 'Caste Checklist',
        targetPage: 'checklist',
        serviceId: 'caste-certificate'
      });
      actions.push({
        label: language === 'hi' ? 'आवेदन गाइड' : 'Application Guide',
        targetPage: 'guide',
        serviceId: 'caste-certificate'
      });
    } else if (lower.includes('domicile') || lower.includes('निवास') || lower.includes('niwas') || lower.includes('mool niwas')) {
      actions.push({
        label: language === 'hi' ? 'मूल निवास चेकलिस्ट' : 'Domicile Checklist',
        targetPage: 'checklist',
        serviceId: 'domicile-certificate'
      });
      actions.push({
        label: language === 'hi' ? 'निवास आवेदन गाइड' : 'Domicile Guide',
        targetPage: 'guide',
        serviceId: 'domicile-certificate'
      });
    } else if (lower.includes('widow') || lower.includes('विधवा') || lower.includes('vidhwa')) {
      actions.push({
        label: language === 'hi' ? 'विधवा पेंशन चेकलिस्ट' : 'Widow Pension Checklist',
        targetPage: 'checklist',
        serviceId: 'widow-pension'
      });
      actions.push({
        label: language === 'hi' ? 'पेंशन आवेदन गाइड' : 'Pension Guide',
        targetPage: 'guide',
        serviceId: 'widow-pension'
      });
    } else if (lower.includes('pension') || lower.includes('पेंशन') || lower.includes('vridha') || lower.includes('वृद्धावस्था')) {
      actions.push({
        label: language === 'hi' ? 'वृद्धावस्था पेंशन चेकलिस्ट' : 'Old Age Pension Checklist',
        targetPage: 'checklist',
        serviceId: 'old-age-pension'
      });
      actions.push({
        label: language === 'hi' ? 'पेंशन आवेदन गाइड' : 'Pension Guide',
        targetPage: 'guide',
        serviceId: 'old-age-pension'
      });
    } else if (lower.includes('khatauni') || lower.includes('bhulekh') || lower.includes('खतौनी') || lower.includes('भूलेख') || lower.includes('land')) {
      actions.push({
        label: language === 'hi' ? 'भूलेख खतौनी गाइड' : 'Khatauni ROR Guide',
        targetPage: 'guide',
        serviceId: 'land-records-khatauni'
      });
      actions.push({
        label: language === 'hi' ? 'प्रमाणित नकल प्रक्रिया' : 'Certified Copy Checklist',
        targetPage: 'checklist',
        serviceId: 'land-record-copy-guidance'
      });
    } else if (lower.includes('marriage') || lower.includes('vivah') || lower.includes('विवाह') || lower.includes('shaadi')) {
      actions.push({
        label: language === 'hi' ? 'विवाह पंजीकरण गाइड' : 'Marriage Registration Guide',
        targetPage: 'guide',
        serviceId: 'marriage-registration'
      });
      actions.push({
        label: language === 'hi' ? 'विवाह चेकलिस्ट' : 'Marriage Checklist',
        targetPage: 'checklist',
        serviceId: 'marriage-registration'
      });
    } else if (lower.includes('ews') || lower.includes('ईडब्ल्यूएस')) {
      actions.push({
        label: language === 'hi' ? 'ईडब्ल्यूएस चेकलिस्ट' : 'EWS Checklist',
        targetPage: 'checklist',
        serviceId: 'ews-certificate'
      });
      actions.push({
        label: language === 'hi' ? 'ईडब्ल्यूएस गाइड' : 'EWS Guide',
        targetPage: 'guide',
        serviceId: 'ews-certificate'
      });
    } else if (lower.includes('scholarship') || lower.includes('छात्रवृत्ति') || lower.includes('chhatravritti')) {
      actions.push({
        label: language === 'hi' ? 'छात्रवृत्ति गाइड' : 'Scholarship Guide',
        targetPage: 'guide',
        serviceId: 'scholarship-guidance'
      });
      actions.push({
        label: language === 'hi' ? 'छात्रवृत्ति आय प्रमाण पत्र' : 'Income for Scholarship',
        targetPage: 'checklist',
        serviceId: 'income-scholarship-guidance'
      });
    } else if (lower.includes('birth') || lower.includes('जन्म') || lower.includes('janam')) {
      actions.push({
        label: language === 'hi' ? 'जन्म प्रमाण पत्र गाइड' : 'Birth Certificate Guide',
        targetPage: 'guide',
        serviceId: 'birth-certificate'
      });
    } else if (lower.includes('death') || lower.includes('मृत्यु') || lower.includes('mrityu')) {
      actions.push({
        label: language === 'hi' ? 'मृत्यु प्रमाण पत्र गाइड' : 'Death Certificate Guide',
        targetPage: 'guide',
        serviceId: 'death-certificate'
      });
    } else if (lower.includes('parivar') || lower.includes('kutumb') || lower.includes('परिवार') || lower.includes('कुटुंब') || lower.includes('family register') || lower.includes('nakal')) {
      actions.push({
        label: language === 'hi' ? 'परिवार रजिस्टर चेकलिस्ट' : 'Parivar Register Checklist',
        targetPage: 'checklist',
        serviceId: 'parivar-register-copy'
      });
      actions.push({
        label: language === 'hi' ? 'आवेदन चरण देखें' : 'Application Guide',
        targetPage: 'guide',
        serviceId: 'parivar-register-copy'
      });
    }

    // Add track status if relevant
    if (lower.includes('track') || lower.includes('status') || lower.includes('ट्रैक') || lower.includes('स्थिति')) {
      actions.push({
        label: language === 'hi' ? 'आवेदन ट्रैक करें' : 'Track Application',
        targetPage: 'tracker'
      });
    }

    return actions.slice(0, 3);
  };

  const handleUserSend = async (textToSend?: string) => {
    const text = (textToSend || inputText).trim();
    if (!text || isLoading) return;

    setApiError(null);

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language,
      text
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Build conversation history for context preservation
      const historyPayload = newMessages
        .filter(m => m.id !== 'welcome-msg') // exclude generic welcome if preferred, or keep
        .map(m => ({
          role: m.sender === 'user' ? 'user' : 'model',
          text: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload.slice(-8), // Send up to last 8 turns for rich conversational context
        }),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with status ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.text;

      const assistantMessage: ChatMessage = {
        id: 'gemini-' + Date.now(),
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        language,
        text: replyText,
        isDemonstration: false,
        recommendedServiceId: data.retrieval?.matchedService?.serviceId,
        sources: data.retrieval?.sources || [],
        retrievedService: data.retrieval?.matchedService || null,
        fieldReport: data.retrieval?.fieldReport || null,
        quickActions: extractQuickActions(text + ' ' + replyText),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setApiError(err?.message || 'Failed to get a response from Gemini assistant.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setActiveSpeechId(null);
    setApiError(null);
    const initialGreeting: ChatMessage = {
      id: 'welcome-msg-' + Date.now(),
      sender: 'assistant',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      language,
      isDemonstration: false,
      text:
        language === 'en'
          ? "Namaste! Conversation reset. How can I help you with Uttarakhand government services today?"
          : "नमस्ते! बातचीत रीसेट हो गई है। उत्तराखंड नागरिक सेवाओं के संबंध में आज मैं आपकी क्या सहायता कर सकता हूँ?",
      quickActions: [
        { label: language === 'en' ? 'Income Certificate Guide' : 'आय प्रमाण पत्र गाइड', targetPage: 'guide', serviceId: 'income-certificate' },
        { label: language === 'en' ? 'Domicile Checklist' : 'मूल निवास चेकलिस्ट', targetPage: 'checklist', serviceId: 'domicile-certificate' },
        { label: language === 'en' ? 'Caste Certificate Info' : 'जाति प्रमाण पत्र', targetPage: 'guide', serviceId: 'caste-certificate' }
      ]
    };
    setMessages([initialGreeting]);
  };

  // Specific queries tested and requested by the user across categories
  const suggestedQuestions = [
    { label: 'Mujhe income certificate banana hai.', query: 'Mujhe income certificate banana hai.' },
    { label: 'Mere paas Parivar Register ki nakal nahi hai.', query: 'Mere paas Parivar Register ki nakal nahi hai.' },
    { label: 'जाति प्रमाण पत्र के लिए कौन-कौन से दस्तावेज चाहिए?', query: 'जाति प्रमाण पत्र के लिए कौन-कौन से दस्तावेज चाहिए?' },
    { label: 'Parivar Register copy ki fee aur processing time kitna hai?', query: 'Parivar Register copy ki fee aur processing time kitna hai?' },
    { label: 'How can I apply for a domicile certificate?', query: 'How can I apply for a domicile certificate?' },
    { label: 'Bhulekh portal par Khatauni kaise dekhein?', query: 'Bhulekh portal par Khatauni kaise dekhein?' },
    { label: 'वृद्धावस्था पेंशन (Old Age Pension) की पात्रता और राशि क्या है?', query: 'वृद्धावस्था पेंशन (Old Age Pension) की पात्रता और राशि क्या है?' },
    { label: 'EWS certificate ke liye kya eligibility aur rules hain?', query: 'EWS certificate ke liye kya eligibility aur rules hain?' },
    { label: 'Marriage registration ke liye kya Sub-Registrar ke samne jana zaroori hai?', query: 'Marriage registration ke liye kya Sub-Registrar ke samne jana zaroori hai?' },
    { label: 'Scholarship ke liye income certificate kaise banega?', query: 'Mujhe scholarship ke liye income certificate chahiye. Kya karna hoga?' }
  ];

  // Helper to format AI response text (handles bold, bullets, paragraphs cleanly)
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
        {lines.map((line, idx) => {
          const trimmed = line.trim();
          if (!trimmed) {
            return <div key={idx} className="h-1" />;
          }

          // Bullet line
          if (trimmed.startsWith('* ') || trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
            const content = trimmed.substring(2);
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-[#F29B38] font-bold text-xs mt-0.5">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(content) }} />
              </div>
            );
          }

          // Numbered line (e.g. 1. , 2. )
          const numMatch = trimmed.match(/^(\d+)\.\s+(.*)/);
          if (numMatch) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-[#142B4A] font-bold text-xs mt-0.5 tabular-nums">
                  {numMatch[1]}.
                </span>
                <span dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(numMatch[2]) }} />
              </div>
            );
          }

          // Header line
          if (trimmed.startsWith('### ') || trimmed.startsWith('## ')) {
            const headerText = trimmed.replace(/^#+\s*/, '');
            return (
              <div
                key={idx}
                className="font-bold text-[#142B4A] pt-1.5 pb-0.5 border-b border-slate-100"
                dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(headerText) }}
              />
            );
          }

          return (
            <p
              key={idx}
              dangerouslySetInnerHTML={{ __html: formatInlineMarkdown(trimmed) }}
            />
          );
        })}
      </div>
    );
  };

  const formatInlineMarkdown = (text: string): string => {
    // Escape HTML tags to prevent XSS
    const escaped = text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // Replace bold **text** with <strong>
    return escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4 sm:space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
            <div className="w-10 h-10 rounded-lg bg-[#183153] text-[#D98B36] flex items-center justify-center font-bold shadow-2xs shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg sm:text-2xl font-bold text-[#183153] truncate">
                  {t.chat.headerTitle}
                </h1>
                <span className="text-[10px] font-semibold text-[#47745A] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E7EB] shrink-0">
                  Gemini AI Active
                </span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#5A6A80] mt-0.5 leading-snug">
                {language === 'en'
                  ? 'Real-time conversational assistant for Uttarakhand government services in Hindi, English & Hinglish'
                  : 'उत्तराखंड नागरिक सेवाओं हेतु हिंदी, अंग्रेजी व हिंग्लिश में वास्तविक जेमिनी AI सहायक'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={handleResetChat}
              className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[38px] rounded-lg text-xs font-semibold text-[#183153] bg-[#F5F7FA] hover:bg-slate-200 border border-[#E5E7EB] transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>{t.chat.clearChat}</span>
            </button>
          </div>
        </div>

        {/* Knowledge Base & Transparency Indicator */}
        <div className="mt-3 sm:mt-4 p-3 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB] flex items-start gap-2.5 text-xs text-[#5A6A80] leading-relaxed">
          <Info className="w-4 h-4 text-[#183153] shrink-0 mt-0.5" />
          <div className="break-words">
            <strong className="text-[#183153] font-semibold">
              {language === 'en' ? 'Verified Government Knowledge Base: ' : 'सत्यापित शासकीय संदर्शिका: '}
            </strong>
            <span>
              {language === 'en'
                ? 'Grounded with official guidelines from Uttarakhand Right to Service (RTS) Commission and Apuni Sarkar (eservices.uk.gov.in).'
                : 'उत्तराखंड सेवा का अधिकार (RTS) अधिनियम एवं अपुणी सरकार (eservices.uk.gov.in) के आधिकारिक मानकों पर आधारित।'}
            </span>
          </div>
        </div>
      </div>

      {/* Suggested Questions Strip */}
      <div>
        <div className="text-xs font-semibold text-[#5A6A80] mb-2">
          {language === 'en' ? 'Quick Citizen Queries (Hindi, English & Hinglish):' : 'नागरिक त्वरित प्रश्न (हिंदी, अंग्रेजी एवं हिंग्लिश):'}
        </div>
        <div className="flex items-center sm:flex-wrap gap-2 overflow-x-auto pb-2 -mx-1 px-1 sm:mx-0 sm:px-0">
          {suggestedQuestions.map((sq, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleUserSend(sq.query)}
              className="text-xs py-2 px-3 min-h-[38px] rounded-lg bg-white border border-[#E5E7EB] text-[#183153] hover:border-[#183153] hover:bg-[#F5F7FA] transition-colors shadow-2xs text-left whitespace-nowrap sm:whitespace-normal shrink-0 sm:shrink flex items-center"
            >
              {sq.label}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container: Clean white helpdesk interface */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-2xs flex flex-col h-[500px] sm:h-[580px] max-h-[72dvh] sm:max-h-[78vh] overflow-hidden">
        {/* Messages Stream */}
        <div className="flex-1 p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 bg-[#F5F7FA]">
          {messages.map(msg => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[94%] sm:max-w-[82%] rounded-xl p-3.5 sm:p-4 space-y-2.5 shadow-2xs break-words overflow-hidden ${
                    isUser
                      ? 'bg-[#183153] text-white rounded-tr-xs'
                      : 'bg-white text-[#183153] border border-[#E5E7EB] rounded-tl-xs'
                  }`}
                >
                  {/* Sender identity & metadata */}
                  <div className={`flex items-center justify-between gap-3 text-[11px] pb-1 border-b ${isUser ? 'border-white/10' : 'border-[#E5E7EB]'}`}>
                    <span className={isUser ? 'text-[#D98B36] font-semibold' : 'text-[#183153] font-bold'}>
                      {isUser ? (language === 'en' ? 'You (Citizen)' : 'आप (नागरिक)') : 'Apuni AI Public Desk'}
                    </span>

                    {!isUser && (
                      <span className="text-[10px] tracking-wide text-[#5A6A80] hidden xs:inline">
                        Official Knowledge Grounded
                      </span>
                    )}

                    <span className={`tabular-nums shrink-0 ${isUser ? 'text-slate-300' : 'text-[#5A6A80]'}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* Message body */}
                  {isUser ? (
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-line text-slate-100 break-words">
                      {msg.text}
                    </p>
                  ) : (
                    <>
                      {renderFormattedText(msg.text)}

                      {/* Compact Information-Source Section (Rigorous Verification Badges) */}
                      {((msg.sources && msg.sources.length > 0) || msg.retrievedService) && (
                        <div className="mt-3 pt-3 border-t border-[#E5E7EB] space-y-2.5 bg-[#F5F7FA] -mx-1 p-3 rounded-lg border border-[#E5E7EB]">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#5A6A80]">
                              {language === 'en' ? 'Official Service Source' : 'शासकीय सेवा स्रोत'}
                            </span>
                            {msg.retrievedService && (() => {
                              // Rigorous verification check: only truly 'verified' if overallStatus is verified AND no missing/null fields
                              const isFullyVerified =
                                msg.retrievedService.verificationStatus === 'verified' &&
                                (!msg.fieldReport || !msg.fieldReport.missingOrNullFields || msg.fieldReport.missingOrNullFields.length === 0);
                              
                              const isUnverified =
                                msg.retrievedService.verificationStatus === 'unverified' ||
                                (!msg.sources || msg.sources.length === 0);

                              if (isFullyVerified) {
                                return (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-[#47745A] border border-emerald-200">
                                    <ShieldCheck className="w-3 h-3 text-[#47745A]" />
                                    <span>{language === 'en' ? 'VERIFIED' : 'सत्यापित'}</span>
                                  </span>
                                );
                              } else if (isUnverified) {
                                return (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
                                    <AlertCircle className="w-3 h-3 text-rose-600" />
                                    <span>{language === 'en' ? 'UNVERIFIED' : 'असत्यापित'}</span>
                                  </span>
                                );
                              } else {
                                return (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200">
                                    <Clock className="w-3 h-3 text-amber-700" />
                                    <span>{language === 'en' ? 'PENDING VERIFICATION' : 'सत्यापन प्रक्रियाधीन'}</span>
                                  </span>
                                );
                              }
                            })()}
                          </div>

                          {/* Sources listing */}
                          {msg.sources && msg.sources.length > 0 ? (
                            <div className="space-y-1.5">
                              {msg.sources.map((src, sIdx) => (
                                <div
                                  key={src.id || sIdx}
                                  className="p-2.5 rounded bg-white border border-[#E5E7EB] text-[#183153] text-[11px] space-y-1.5 shadow-2xs"
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <span className="font-semibold text-[#183153]">
                                      {src.sourceTitle}
                                    </span>
                                    <span
                                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${
                                        src.verificationStatus === 'verified'
                                          ? 'text-[#47745A] bg-emerald-50 border border-emerald-200'
                                          : src.verificationStatus === 'unverified'
                                          ? 'text-rose-700 bg-rose-50 border border-rose-200'
                                          : 'text-amber-800 bg-amber-50 border border-amber-200'
                                      }`}
                                    >
                                      {src.verificationStatus.toUpperCase()}
                                    </span>
                                  </div>

                                  <div className="text-[10px] text-[#5A6A80] flex flex-wrap items-center gap-x-3 gap-y-0.5">
                                    <span>{src.governmentDepartment}</span>
                                    {src.verificationDate ? (
                                      <span className="text-[#183153] font-medium">
                                        {language === 'en' ? 'Last Verified: ' : 'अंतिम सत्यापन: '}
                                        {src.verificationDate}
                                      </span>
                                    ) : (
                                      <span className="text-amber-800 font-medium">
                                        {language === 'en' ? 'Date: Pending official gazette' : 'दिनांक: गजट अधिसूचना प्रतीक्षित'}
                                      </span>
                                    )}
                                  </div>

                                  {src.informationSupported && (
                                    <div className="text-[10px] text-[#5A6A80] bg-[#F5F7FA] p-1.5 rounded border border-[#E5E7EB]">
                                      <span className="font-medium text-[#183153]">{language === 'en' ? 'Verified Fact: ' : 'सत्यापित तथ्य: '}</span>
                                      <span>{src.informationSupported}</span>
                                    </div>
                                  )}

                                  {src.sourceUrl && (
                                    <div className="pt-0.5">
                                      <button
                                        type="button"
                                        onClick={() => triggerExternalRedirect(src.sourceUrl)}
                                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#183153] hover:text-[#D98B36] transition-colors max-w-full"
                                      >
                                        <span className="truncate max-w-[210px] sm:max-w-none inline-block">
                                          {src.sourceUrl.replace(/^https?:\/\//, '')}
                                        </span>
                                        <ExternalLink className="w-2.5 h-2.5 text-[#D98B36] shrink-0" />
                                      </button>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="p-2.5 rounded bg-rose-50 border border-rose-200 text-[11px] text-rose-900 flex items-start gap-2">
                              <AlertCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                              <div>
                                <p className="font-semibold">
                                  {language === 'en'
                                    ? 'This information has not yet been verified from an official source.'
                                    : 'यह जानकारी अभी तक किसी आधिकारिक स्रोत से सत्यापित नहीं हुई है।'}
                                </p>
                                <p className="text-[10px] text-rose-700 mt-0.5">
                                  {language === 'en'
                                    ? 'Please consult https://eservices.uk.gov.in or visit the relevant department before proceeding.'
                                    : 'कृपया आगे बढ़ने से पहले https://eservices.uk.gov.in देखें अथवा संबंधित विभाग से संपर्क करें।'}
                                </p>
                              </div>
                            </div>
                          )}

                          {/* Missing / Null Field Transparency Notice */}
                          {msg.fieldReport && msg.fieldReport.missingOrNullFields && msg.fieldReport.missingOrNullFields.length > 0 && (
                            <div className="p-2.5 rounded bg-amber-50 border border-amber-200 text-[10px] text-amber-900 flex items-start gap-1.5">
                              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                              <div className="space-y-1">
                                <div className="font-semibold text-amber-950">
                                  {language === 'en'
                                    ? 'Official Notice: This information has not yet been verified from an official source.'
                                    : 'शासकीय सूचना: यह जानकारी अभी तक किसी आधिकारिक स्रोत से सत्यापित नहीं हुई है।'}
                                </div>
                                {msg.fieldReport.missingOrNullFields.includes('fees') && (
                                  <div>
                                    <span className="font-semibold">{language === 'en' ? 'Fee Status: ' : 'शुल्क स्थिति: '}</span>
                                    <span>
                                      {language === 'en'
                                        ? 'Fees for this specific service have not been verified from the official gazette. Fees are never estimated or invented by Apuni AI.'
                                        : 'इस सेवा हेतु शुल्क अभी तक आधिकारिक गजट से सत्यापित नहीं हुआ है। अपुणी AI कभी भी शुल्क का अनुमान नहीं लगाता।'}
                                    </span>
                                  </div>
                                )}
                                {msg.fieldReport.missingOrNullFields.includes('processingTime') && (
                                  <div>
                                    <span className="font-semibold">{language === 'en' ? 'Processing Time Status: ' : 'समय-सीमा स्थिति: '}</span>
                                    <span>
                                      {language === 'en'
                                        ? 'Delivery timeframe has not been verified from the official RTS schedule. Timelines are never assumed.'
                                        : 'समय-सीमा आधिकारिक आरटीएस अनुसूची से अभी तक सत्यापित नहीं हुई है। समयावधि का कभी अनुमान नहीं लगाया जाता।'}
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </>
                  )}

                  {/* Quick Action Navigation Buttons */}
                  {!isUser && msg.quickActions && msg.quickActions.length > 0 && (
                    <div className="pt-2 flex flex-wrap gap-2 border-t border-[#E5E7EB]">
                      {msg.quickActions.map((action, aIdx) => (
                        <button
                          key={aIdx}
                          type="button"
                          onClick={() => navigateTo(action.targetPage, action.serviceId)}
                          className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded bg-[#F5F7FA] hover:bg-[#183153] hover:text-white text-[#183153] border border-[#E5E7EB] text-xs font-semibold transition-colors"
                        >
                          <Compass className="w-3 h-3 text-[#D98B36]" />
                          <span>{action.label}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Accessibility audio read-aloud and official link */}
                  {!isUser && (
                    <div className="pt-1 flex items-center justify-between text-xs text-[#5A6A80]">
                      <button
                        type="button"
                        onClick={() => handleReadAloud(msg)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5A6A80] hover:text-[#183153] transition-colors"
                        title={activeSpeechId === msg.id ? t.chat.stopAudio : t.chat.readAloud}
                      >
                        {activeSpeechId === msg.id ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 text-amber-600" />
                            <span className="text-amber-600">{t.chat.stopAudio}</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-[#D98B36]" />
                            <span>{t.chat.readAloud}</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
                        className="text-[11px] text-[#5A6A80] hover:text-[#183153] flex items-center gap-1 font-medium"
                      >
                        <span>eservices.uk.gov.in</span>
                        <ExternalLink className="w-2.5 h-2.5 text-[#D98B36]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2">
              <div className="bg-white border border-[#E5E7EB] rounded-xl rounded-tl-xs p-4 shadow-2xs flex items-center gap-3">
                <Loader2 className="w-4 h-4 text-[#D98B36] animate-spin" />
                <span className="text-xs text-[#5A6A80]">
                  {language === 'en'
                    ? 'Apuni AI is preparing verified guidance...'
                    : 'अपुणी AI शासकीय नियमों के अनुसार उत्तर तैयार कर रहा है...'}
                </span>
              </div>
            </div>
          )}

          {/* Error Banner */}
          {apiError && (
            <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Error: </strong>
                  <span>{apiError}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
                  if (lastUserMsg) handleUserSend(lastUserMsg.text);
                }}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 text-white font-semibold text-xs shrink-0"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Retry</span>
              </button>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-[#E5E7EB]">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleUserSend();
            }}
            className="flex items-center gap-2"
          >
            {/* Voice Input Microphone */}
            <button
              type="button"
              onClick={toggleListening}
              disabled={isLoading}
              className={`p-2.5 rounded-lg transition-all border min-w-[44px] min-h-[44px] flex items-center justify-center shrink-0 ${
                isListening
                  ? 'bg-red-600 text-white border-red-600 animate-pulse'
                  : 'bg-[#F5F7FA] text-[#183153] hover:bg-slate-200 border-[#E5E7EB]'
              }`}
              title={isListening ? t.chat.listening : t.chat.speakTooltip}
              aria-label="Microphone input"
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5 text-[#183153]" />}
            </button>

            {/* Text Input */}
            <input
              type="text"
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              disabled={isLoading}
              placeholder={isListening ? t.chat.listening : t.chat.inputPlaceholder}
              className="flex-1 bg-[#F5F7FA] border border-[#E5E7EB] rounded-lg px-3.5 py-2.5 min-h-[44px] text-xs sm:text-sm text-[#183153] placeholder-[#5A6A80] focus:bg-white focus:border-[#183153] focus:outline-none transition-colors"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className={`flex items-center justify-center p-2.5 rounded-lg text-white font-semibold transition-all min-w-[44px] min-h-[44px] shrink-0 ${
                inputText.trim() && !isLoading
                  ? 'bg-[#183153] hover:bg-[#12253E]'
                  : 'bg-slate-200 cursor-not-allowed text-slate-400'
              }`}
              aria-label="Send query"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin text-white" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          {isListening && (
            <div className="text-center text-xs text-red-600 font-semibold pt-1">
              {t.chat.listening}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
