import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { UTTARAKHAND_SERVICES_KNOWLEDGE } from './src/data/governmentKnowledgeBase.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = new GoogleGenAI({
  apiKey,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// Build system instruction incorporating the Uttarakhand Government Services Knowledge Base
import {
  retrieveRelevantService,
  buildGroundingPromptSection,
  knowledgeStore,
  validateService,
} from './src/services/knowledgeEngine.ts';

// Dynamic system instruction incorporating retrieved verified government service
const buildDynamicSystemInstruction = (retrieval: ReturnType<typeof retrieveRelevantService>): string => {
  const groundingSection = buildGroundingPromptSection(retrieval);

  return `You are "Apuni AI" (अपुणी AI), an expert, citizen-friendly Uttarakhand Government Services Assistant.
Your mission is to help citizens of Uttarakhand navigate public government services with total factual accuracy, empathy, and transparent source grounding.

CRITICAL INSTRUCTIONS & RESPONSE ACCURACY RULES:
1. MULTILINGUAL CONVERSATIONAL INTELLIGENCE:
   - Automatically detect language and script:
     * Hindi (Devanagari): reply in polite, natural, grammatical Hindi (Devanagari).
     * Hinglish / Romanized Hindi (e.g. "Mujhe income certificate banana hai", "kya documents lagenge?"): reply in warm, empathetic Hinglish (e.g. "Bilkul! Main aapki poori madad karta hoon...").
     * English: reply in clean, accessible English.
   - Maintain conversational context from previous messages naturally.

2. FACTUAL ACCURACY & ZERO FABRICATION (STRICT):
   - Verified information can be presented as official government information.
   - Unverified information must be clearly labelled.
   - MISSING INFORMATION MUST NOT BE GUESSED: If fees or processing time are null or marked pending verification, you MUST state honestly and explicitly that this information is currently pending official departmental/gazette verification. NEVER invent fees or timelines.
   - Fees and processing times must NEVER be invented.
   - NEVER claim an application has been submitted or approved. Apuni AI provides informational guidance only.
   - Always provide the official application link: https://eservices.uk.gov.in (Apuni Sarkar / e-District Uttarakhand).
   - Official helplines: CM Helpline (1905), Right to Service Commission (0135-2712400).

3. PROBLEM-FIRST & EMPATHETIC CITIZEN GUIDANCE:
   - If a citizen mentions a missing document (e.g., "Mere paas Parivar Register ki nakal nahi hai"):
     * Directly understand the missing document.
     * Retrieve and explain the verified steps to obtain it (e.g., meeting Gram Vikas Adhikari / VDO or applying via Apuni Sarkar under Panchayati Raj).
     * Reassure the citizen with clear next steps.
   - If a citizen asks about a certificate, list the required documents and steps clearly with bullet points.
   - Highlight both online (eservices.uk.gov.in) and offline (Tehsil / Gram Panchayat / CSC) avenues.
   - Keep answers well-formatted, using bullet points and short readable paragraphs.

${groundingSection}
`;
};

// API endpoint for chat
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required and must be a string' });
      return;
    }

    if (!process.env.GEMINI_API_KEY) {
      res.status(500).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please check the Secrets panel in AI Studio.'
      });
      return;
    }

    // Format previous history into Gemini contents format and history text array for retrieval
    const historyArray: Array<{ role: string; text: string }> = [];
    const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

    if (Array.isArray(history)) {
      for (const item of history) {
        if (item && item.text && (item.role === 'user' || item.role === 'model' || item.role === 'assistant')) {
          const role = item.role === 'assistant' ? 'model' : (item.role as 'user' | 'model');
          historyArray.push({ role, text: item.text });
          contents.push({
            role,
            parts: [{ text: item.text }],
          });
        }
      }
    }

    // Append the current user message
    contents.push({
      role: 'user',
      parts: [{ text: message }],
    });

    // 1. Identify relevant service and retrieve verified data
    const retrieval = retrieveRelevantService(message, historyArray);

    // 2. Build grounded dynamic prompt incorporating retrieved verified fields and source citations
    const dynamicSystemInstruction = buildDynamicSystemInstruction(retrieval);

    let replyText = '';
    let usedModel = 'gemini-3.1-flash-lite';
    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-3.8-flash'];
    let lastError: any = null;

    for (const model of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model,
          contents,
          config: {
            systemInstruction: dynamicSystemInstruction,
          },
        });
        if (response && response.text) {
          replyText = response.text;
          usedModel = model;
          break;
        }
      } catch (err: any) {
        lastError = err;
        console.warn(`Model ${model} call failed:`, err?.message || err);
        // Wait 400ms before trying next model if 503 / 429
        await new Promise(r => setTimeout(r, 400));
      }
    }

    if (!replyText) {
      throw lastError || new Error('Failed to generate response from Gemini');
    }

    res.json({
      text: replyText,
      model: usedModel,
      retrieval: {
        matchedService: retrieval.matchedService ? {
          serviceId: retrieval.matchedService.serviceId,
          serviceName: retrieval.matchedService.serviceName,
          department: retrieval.matchedService.department,
          responsibleAuthority: retrieval.matchedService.responsibleAuthority,
          officialUrl: retrieval.matchedService.officialUrl,
          verificationStatus: retrieval.matchedService.verificationStatus,
          lastVerified: retrieval.matchedService.lastVerified,
          fees: retrieval.matchedService.fees,
          processingTime: retrieval.matchedService.processingTime,
        } : null,
        fieldReport: retrieval.fieldReport,
        sources: retrieval.sources,
        detectedIntent: retrieval.detectedIntent,
        missingDocumentContext: retrieval.missingDocumentContext,
      },
    });
  } catch (error: any) {
    console.error('Error generating Gemini response:', error);
    const errorMessage = error?.message || 'Internal Server Error';
    const status = error?.status || 500;
    res.status(status).json({
      error: errorMessage,
      details: 'Failed to communicate with Gemini API. Please check your network or API key configuration.'
    });
  }
});

// Developer-accessible Administrative Maintenance Endpoints (Section 7)
// Provides programmatic validation and updates without exposing citizen edit UI
app.get('/api/admin/services', (req, res) => {
  try {
    const services = knowledgeStore.getAllServices();
    res.json({
      count: services.length,
      services,
      status: 'active',
      engine: 'Apuni AI Verified Knowledge Engine v2.0'
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/admin/validate', (req, res) => {
  try {
    const services = knowledgeStore.getAllServices();
    const results = services.map(s => ({
      serviceId: s.serviceId,
      serviceName: s.serviceName,
      validation: validateService(s),
      sourcesCount: s.sources.length,
      allSourcesVerified: s.sources.every(src => src.verificationStatus === 'verified'),
      feesStatus: s.fees === null ? 'unavailable_or_pending' : 'specified',
      processingTimeStatus: s.processingTime === null ? 'unverified_or_pending' : 'specified',
    }));

    const allValid = results.every(r => r.validation.valid);
    res.json({
      allValid,
      services: results,
      totalServices: services.length,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admin/services', (req, res) => {
  try {
    const newService = req.body;
    const result = knowledgeStore.upsertService(newService);
    if (!result.success) {
      res.status(400).json({ error: 'Validation failed', details: result.errors });
      return;
    }
    res.json({
      success: true,
      message: `Service ${newService.serviceId} saved successfully`,
      service: newService,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Setup Vite in development or serve static in production
const setupServer = async () => {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Apuni AI Full-Stack Server running on port ${PORT}`);
  });
};

setupServer();
