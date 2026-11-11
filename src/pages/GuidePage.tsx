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
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Header & Service Switcher */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs space-y-4 sm:space-y-5">
        <div>
          <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
            {language === 'en' ? 'Official Procedure Guidance' : 'आधिकारिक प्रक्रिया मार्गदर्शिका'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#183153] mt-1 break-words">
            {t.guidePage.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A6A80] mt-1">
            {t.guidePage.subtitle}
          </p>
        </div>

        {/* Service Selector Chips */}
        <div className="pt-2">
          <label className="block text-xs font-bold text-[#183153] uppercase tracking-wider mb-2">
            {t.guidePage.selectService}
          </label>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-1 px-1 sm:mx-0 sm:px-0">
            {servicesData.map(service => {
              const isSelected = service.id === currentService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg border transition-all whitespace-nowrap shrink-0 flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#183153] text-white border-[#183153]'
                      : 'bg-[#F5F7FA] text-[#183153] border-[#E5E7EB] hover:bg-slate-200'
                  }`}
                >
                  {service.title[language]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Service Banner Info: Clean White Box with subtle grey background & deep navy text */}
      <div className="bg-[#F5F7FA] border border-[#E5E7EB] rounded-xl p-5 sm:p-8 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#D98B36] font-semibold bg-white px-2.5 py-1 rounded border border-[#E5E7EB]">
              <span>{currentService.code}</span>
              <span>·</span>
              <span>{currentService.department[language]}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#183153] break-words">
              {currentService.title[language]}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6A80] max-w-2xl leading-relaxed">
              {currentService.fullDesc[language]}
            </p>
          </div>

          <div className="w-full md:w-auto shrink-0 bg-white p-4 rounded-xl border border-[#E5E7EB] space-y-2 text-xs">
            <div>
              <span className="text-[#5A6A80]">{t.common.estimatedTime}: </span>
              <strong className="text-[#183153] text-sm tabular-nums font-semibold">
                {currentService.estimatedDays} {t.common.days}
              </strong>
            </div>
            <div>
              <span className="text-[#5A6A80]">{t.common.officialFee}: </span>
              <span className="text-[#183153] font-semibold">{currentService.officialFee[language]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Guide Content Tabs */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-2xs overflow-hidden">
        {/* Tab Headers */}
        <div className="flex items-center border-b border-[#E5E7EB] bg-[#F5F7FA] overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('steps')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'steps'
                ? 'border-[#D98B36] text-[#183153] bg-white'
                : 'border-transparent text-[#5A6A80] hover:text-[#183153]'
            }`}
          >
            {t.guidePage.tabSteps} ({currentService.steps.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('eligibility')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'eligibility'
                ? 'border-[#D98B36] text-[#183153] bg-white'
                : 'border-transparent text-[#5A6A80] hover:text-[#183153]'
            }`}
          >
            {t.guidePage.tabEligibility}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('documents')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'documents'
                ? 'border-[#D98B36] text-[#183153] bg-white'
                : 'border-transparent text-[#5A6A80] hover:text-[#183153]'
            }`}
          >
            {language === 'en' ? 'Document Overview' : 'दस्तावेज़ विवरण'}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('notes')}
            className={`px-5 py-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
              activeTab === 'notes'
                ? 'border-[#D98B36] text-[#183153] bg-white'
                : 'border-transparent text-[#5A6A80] hover:text-[#183153]'
            }`}
          >
            {t.guidePage.tabNotes}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-4 sm:p-8">
          {/* TAB 1: STEPS */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              <div className="space-y-4 sm:space-y-6">
                {currentService.steps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#183153] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {step.stepNumber}
                    </div>

                    <div className="flex-1 space-y-2 bg-[#F5F7FA] p-3.5 sm:p-4 rounded-xl border border-[#E5E7EB] break-words">
                      <h3 className="text-sm font-bold text-[#183153] break-words">
                        {step.title[language]}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed break-words">
                        {step.instruction[language]}
                      </p>

                      {step.substeps && (
                        <ul className="pt-1 space-y-1 text-xs text-[#5A6A80] list-disc list-inside break-words">
                          {step.substeps[language].map((sub, idx) => (
                            <li key={idx} className="break-words">{sub}</li>
                          ))}
                        </ul>
                      )}

                      {step.caution && (
                        <div className="flex items-start gap-2 p-2.5 rounded bg-amber-50 border border-amber-200 text-xs text-amber-900 mt-2 break-words">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span className="break-words">{step.caution[language]}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Strip: Stacked full-width buttons on mobile, row on tablet+ */}
              <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', currentService.id)}
                  className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] rounded-lg bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] text-xs font-semibold border border-[#E5E7EB] transition-colors flex items-center justify-center"
                >
                  ← {t.servicesPage.openChecklist}
                </button>

                <button
                  type="button"
                  onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 min-h-[44px] rounded-lg bg-[#183153] hover:bg-[#12253E] text-white text-xs font-bold transition-all shadow-2xs"
                >
                  <span>{t.guidePage.portalCTA}</span>
                  <ExternalLink className="w-4 h-4 text-[#D98B36]" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ELIGIBILITY */}
          {activeTab === 'eligibility' && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#183153]">
                {language === 'en' ? 'Who can apply for this service?' : 'इस सेवा के लिए कौन पात्र है?'}
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#183153]">
                {currentService.eligibility[language].map((crit, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#F5F7FA] border border-[#E5E7EB] break-words">
                    <CheckCircle2 className="w-4 h-4 text-[#47745A] shrink-0 mt-0.5" />
                    <span className="break-words">{crit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* TAB 3: DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#183153]">
                  {language === 'en' ? 'Required Documentation Summary' : 'संक्षिप्त आवश्यक दस्तावेज़ विवरण'}
                </h3>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', currentService.id)}
                  className="text-xs font-bold text-[#D98B36] hover:underline self-start sm:self-auto"
                >
                  {t.checklistPage.title} →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.documents.map((doc, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg border border-[#E5E7EB] bg-[#F5F7FA] space-y-1 break-words">
                    <div className="flex items-center justify-between text-xs gap-2">
                      <span className="font-bold text-[#183153] break-words">{doc.name[language]}</span>
                      {doc.required && (
                        <span className="text-[10px] text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200 font-semibold shrink-0">
                          {language === 'en' ? 'Required' : 'अनिवार्य'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#5A6A80] leading-relaxed break-words">
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
              <h3 className="text-sm font-bold text-[#183153]">
                {language === 'en' ? 'Legal & Procedural Notes' : 'विधिक एवं प्रक्रियागत महत्वपूर्ण बिंदु'}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#183153]">
                {currentService.importantNotes[language].map((note, nIdx) => (
                  <li key={nIdx} className="p-3.5 rounded-lg bg-amber-50/50 border border-amber-200/80 text-amber-950 flex items-start gap-2.5 break-words">
                    <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span className="break-words">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Alternative Option: In-Person CSC Center Card */}
      <div className="bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] p-5 sm:p-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-sm font-bold text-[#183153]">
            {t.guidePage.cscOptionTitle}
          </h3>
          <p className="text-xs text-[#5A6A80] max-w-xl">
            {t.guidePage.cscOptionDesc}
          </p>
        </div>

        <button
          type="button"
          onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
          className="w-full sm:w-auto px-4 py-2.5 min-h-[44px] rounded-lg bg-white border border-[#E5E7EB] text-[#183153] text-xs font-semibold hover:bg-slate-100 transition-colors shrink-0 shadow-2xs flex items-center justify-center"
        >
          {language === 'en' ? 'Find Local CSC Kiosk' : 'नज़दीकी सीएससी केंद्र देखें'}
        </button>
      </div>
    </div>
  );
};
