import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { servicesData } from '../data/servicesData';
import {
  CheckSquare,
  Square,
  Printer,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  FileText,
  ArrowRight,
  Info,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export const ChecklistPage: React.FC = () => {
  const {
    t,
    language,
    selectedServiceId,
    setSelectedServiceId,
    checkedDocs,
    toggleDocChecked,
    markAllDocsChecked,
    navigateTo
  } = useApp();

  const currentService =
    servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const docs = currentService.documents;
  const docIds = docs.map(d => d.id);
  const checkedCount = docs.filter(d => checkedDocs[d.id]).length;
  const totalCount = docs.length;
  const percentComplete = Math.round((checkedCount / totalCount) * 100);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-[#E5E7EB]">
          <div>
            <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
              {language === 'en' ? 'Citizen Readiness Tool' : 'नागरिक तैयारी टूल'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#183153] mt-1 break-words">
              {t.checklistPage.title}
            </h1>
            <p className="text-xs sm:text-sm text-[#5A6A80] mt-1">
              {t.checklistPage.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[40px] rounded-lg bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] text-xs font-semibold border border-[#E5E7EB] transition-colors shrink-0 self-start sm:self-auto"
          >
            <Printer className="w-4 h-4 text-[#183153]" />
            <span>{t.checklistPage.printChecklist}</span>
          </button>
        </div>

        {/* Service Selector Dropdown & Quick Switches */}
        <div className="pt-5 sm:pt-6 space-y-3">
          <label className="block text-xs font-bold text-[#183153] uppercase tracking-wider">
            {t.checklistPage.selectService}
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

      {/* Progress Card */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-6 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#5A6A80] font-medium break-words">
                {currentService.title[language]} · {t.checklistPage.progressLabel}
              </span>
              {currentService.verificationStatus === 'verified' ? (
                <span className="text-[10px] font-semibold text-[#47745A] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {language === 'en' ? 'Verified Checklist' : 'सत्यापित चेकलिस्ट'}
                </span>
              ) : (
                <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {language === 'en' ? 'Pending Local Resolution' : 'सत्यापन प्रक्रियाधीन'}
                </span>
              )}
            </div>
            <div className="text-xl sm:text-2xl font-bold text-[#183153] mt-0.5 tabular-nums">
              {checkedCount} / {totalCount} ({percentComplete}%)
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => markAllDocsChecked(docIds, true)}
              className="px-3 py-2 min-h-[38px] rounded-lg text-xs font-semibold bg-[#F5F7FA] text-[#47745A] hover:bg-emerald-50 border border-[#E5E7EB] transition-colors"
            >
              {t.checklistPage.markAll}
            </button>
            <button
              type="button"
              onClick={() => markAllDocsChecked(docIds, false)}
              className="px-3 py-2 min-h-[38px] rounded-lg text-xs font-semibold bg-[#F5F7FA] text-[#5A6A80] hover:bg-slate-200 border border-[#E5E7EB] transition-colors"
            >
              {t.checklistPage.resetAll}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-[#F5F7FA] h-2.5 rounded-full overflow-hidden border border-[#E5E7EB]">
          <div
            className="h-full bg-[#47745A] rounded-full transition-all duration-300"
            style={{ width: `${percentComplete}%` }}
          />
        </div>

        {percentComplete === 100 && (
          <div className="p-3.5 bg-[#F5F7FA] border border-[#47745A]/30 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#47745A]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#47745A] shrink-0" />
              <span className="font-medium">
                {language === 'en'
                  ? 'All documents marked ready! You are prepared to apply.'
                  : 'सभी दस्तावेज़ तैयार हैं! अब आप आवेदन करने के लिए तैयार हैं।'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('guide', currentService.id)}
              className="font-bold underline text-[#183153] hover:text-[#D98B36] shrink-0 self-start sm:self-auto"
            >
              {t.servicesPage.openGuide} →
            </button>
          </div>
        )}
      </div>

      {/* Document Items List */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-2xs divide-y divide-[#E5E7EB] overflow-hidden">
        <div className="p-4 bg-[#F5F7FA] border-b border-[#E5E7EB] flex items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#183153] uppercase tracking-wider truncate">
            {language === 'en' ? 'Required & Supporting Documents' : 'आवश्यक एवं सहायक दस्तावेज़ सूची'}
          </span>
          <span className="text-xs font-mono text-[#5A6A80] shrink-0">
            {currentService.code}
          </span>
        </div>

        {docs.map((doc, idx) => {
          const isChecked = !!checkedDocs[doc.id];
          return (
            <div
              key={doc.id}
              onClick={() => toggleDocChecked(doc.id)}
              className={`p-4 sm:p-5 transition-colors cursor-pointer flex items-start gap-3 sm:gap-4 hover:bg-[#F5F7FA]/70 ${
                isChecked ? 'bg-[#F5F7FA]/40' : ''
              }`}
            >
              {/* Checkbox with accessible touch target */}
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  toggleDocChecked(doc.id);
                }}
                className="mt-0.5 shrink-0 focus:outline-none p-1.5 -m-1.5 min-w-[36px] min-h-[36px] flex items-center justify-center"
                aria-label={`Toggle ${doc.name[language]}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-[#47745A]" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 hover:text-[#183153]" />
                )}
              </button>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-1.5 break-words">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                  <h3
                    className={`text-sm font-bold transition-colors break-words ${
                      isChecked
                        ? 'text-[#5A6A80] line-through decoration-slate-400'
                        : 'text-[#183153]'
                    }`}
                  >
                    {idx + 1}. {doc.name[language]}
                  </h3>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {doc.required ? (
                      <span className="text-[10px] sm:text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                        {language === 'en' ? 'Mandatory' : 'अनिवार्य'}
                      </span>
                    ) : (
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#5A6A80] bg-[#F5F7FA] border border-[#E5E7EB] px-2 py-0.5 rounded">
                        {language === 'en' ? 'If Applicable' : 'लागू होने पर'}
                      </span>
                    )}

                    <span className="text-[10px] sm:text-[11px] font-mono text-[#5A6A80] bg-[#F5F7FA] border border-[#E5E7EB] px-2 py-0.5 rounded">
                      {doc.acceptedFormats.join('/')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#5A6A80] leading-relaxed break-words">
                  {doc.description[language]}
                </p>

                {doc.tip && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-[#183153] bg-[#F5F7FA] px-2.5 py-1 rounded border border-[#E5E7EB] mt-1 break-words max-w-full">
                    <Info className="w-3 h-3 text-[#D98B36] shrink-0" />
                    <span className="break-words">{doc.tip[language]}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preparation Guidelines & Notes */}
      <div className="bg-[#F5F7FA] rounded-xl border border-[#E5E7EB] p-6 space-y-3">
        <h3 className="text-sm font-bold text-[#183153] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#47745A]" />
          <span>{t.checklistPage.instructionsTitle}</span>
        </h3>
        <ul className="space-y-1.5 text-xs text-[#5A6A80] leading-relaxed list-disc list-inside">
          <li>{t.checklistPage.instruction1}</li>
          <li>{t.checklistPage.instruction2}</li>
          <li>{t.checklistPage.instruction3}</li>
        </ul>
        <div className="pt-2 text-[11px] text-[#5A6A80] italic">
          {t.checklistPage.disclaimer}
        </div>
      </div>
    </div>
  );
};
