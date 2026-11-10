import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { servicesData } from '../data/servicesData';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Clock,
  Building,
  HelpCircle,
  FileCheck,
  MapPin,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const GuidePage: React.FC = () => {
  const {
    t,
    language,
    selectedServiceId,
    setSelectedServiceId,
    navigateTo,
    triggerExternalRedirect
  } = useApp();

  const currentService =
    servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const [activeTab, setActiveTab] = useState<'steps' | 'eligibility' | 'documents' | 'notes'>('steps');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 space-y-8">
      {/* Header & Service Switcher */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
        <div>
          <span className="text-xs font-bold text-[#F29B38] uppercase tracking-wider">
            {language === 'en' ? 'Official Procedure Guidance' : 'आधिकारिक प्रक्रिया मार्गदर्शिका'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] mt-1">
            {t.guidePage.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            {t.guidePage.subtitle}
          </p>
        </div>

        {/* Service Selector Chips */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-slate-700 mb-2">
            {t.guidePage.selectService}
          </label>
          <div className="flex flex-wrap gap-2">
            {servicesData.map(service => {
              const isSelected = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-[#142B4A] text-white border-[#142B4A] shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {service.title[language]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Banner Info */}
      <div className="bg-gradient-to-r from-[#142B4A] to-[#1E3B63] text-white rounded-xl p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#F29B38] bg-black/20 px-2.5 py-1 rounded">
              <span>{currentService.code}</span>
              <span>·</span>
              <span>{currentService.department[language]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {currentService.title[language]}
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl leading-relaxed">
              {currentService.fullDesc[language]}
            </p>
          </div>

          <div className="shrink-0 bg-white/10 p-4 rounded-xl border border-white/10 space-y-2 text-xs">
            <div>
              <span className="text-slate-300">{t.common.estimatedTime}: </span>
              <strong className="text-white text-sm tabular-nums">
                {currentService.estimatedDays} {t.common.days}
              </strong>
            </div>
            <div>
              <span className="text-slate-300">{t.common.officialFee}: </span>
              <span className="text-slate-200">{currentService.officialFee[language]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Content Tabs */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
        {/* Tab Headers */}
        <div className="flex items-center border-b border-slate-200 bg-slate-50 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('steps')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'steps'
                ? 'border-[#142B4A] text-[#142B4A] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.guidePage.tabSteps} ({currentService.steps.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('eligibility')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'eligibility'
                ? 'border-[#142B4A] text-[#142B4A] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.guidePage.tabEligibility}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'documents'
                ? 'border-[#142B4A] text-[#142B4A] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {language === 'en' ? 'Document Overview' : 'दस्तावेज़ विवरण'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'notes'
                ? 'border-[#142B4A] text-[#142B4A] bg-white'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.guidePage.tabNotes}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8">
          {/* TAB 1: STEPS */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div className="space-y-6">
                {currentService.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#142B4A] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      {step.stepNumber}
                    </div>

                    <div className="flex-1 space-y-2 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                      <h3 className="text-sm font-bold text-[#142B4A]">
                        {step.title[language]}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {step.instruction[language]}
                      </p>

                      {step.substeps && (
                        <ul className="pt-1 space-y-1 text-xs text-slate-600 list-disc list-inside">
                          {step.substeps[language].map((sub, idx) => (
                            <li key={idx}>{sub}</li>
                          ))}
                        </ul>
                      )}

                      {step.caution && (
                        <div className="flex items-center gap-2 p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 mt-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{step.caution[language]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Strip */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', currentService.id)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                >
                  ← {t.servicesPage.openChecklist}
                </button>

                <button
                  type="button"
                  onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#142B4A] hover:bg-[#0D1C30] text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>{t.guidePage.portalCTA}</span>
                  <ExternalLink className="w-4 h-4 text-[#F29B38]" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ELIGIBILITY */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#142B4A]">
                {language === 'en' ? 'Who can apply for this service?' : 'इस सेवा के लिए कौन पात्र है?'}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {currentService.eligibility[language].map((crit, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-[#142B4A]">
                  {language === 'en' ? 'Required Documentation Summary' : 'संक्षिप्त आवश्यक दस्तावेज़ विवरण'}
                </h3>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', currentService.id)}
                  className="text-xs font-bold text-[#F29B38] hover:underline"
                >
                  {t.checklistPage.title} →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.documents.map((doc, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-[#142B4A]">{doc.name[language]}</span>
                      {doc.required && (
                        <span className="text-[10px] text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 font-semibold">
                          {language === 'en' ? 'Required' : 'अनिवार्य'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doc.description[language]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: NOTES */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#142B4A]">
                {language === 'en' ? 'Legal & Procedural Notes' : 'विधिक एवं प्रक्रियागत महत्वपूर्ण बिंदु'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {currentService.importantNotes[language].map((note, nIdx) => (
                  <li key={nIdx} className="p-3 rounded-lg bg-amber-50/60 border border-amber-200/80 text-amber-950 flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Alternative Option: In-Person CSC Center Card */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm font-bold text-[#142B4A]">
            {t.guidePage.cscOptionTitle}
          </h3>
          <p className="text-xs text-slate-600 max-w-xl">
            {t.guidePage.cscOptionDesc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
          className="px-4 py-2 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs font-semibold hover:bg-slate-100 transition-colors shrink-0"
        >
          {language === 'en' ? 'Find Local CSC Kiosk' : 'नज़दीकी सीएससी केंद्र देखें'}
        </button>
      </div>
    </div>
  );
};
