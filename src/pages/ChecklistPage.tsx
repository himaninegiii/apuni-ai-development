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
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-4 space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-[#F29B38] uppercase tracking-wider">
              {language === 'en' ? 'Citizen Readiness Tool' : 'नागरिक तैयारी टूल'}
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] mt-1">
              {t.checklistPage.title}
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              {t.checklistPage.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0"
          >
            <Printer className="w-4 h-4 text-[#142B4A]" />
            <span>{t.checklistPage.printChecklist}</span>
          </button>
        </div>

        {/* Service Selector Dropdown & Quick Switches */}
        <div className="pt-6 space-y-3">
          <label className="block text-xs font-bold text-slate-700">
            {t.checklistPage.selectService}
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

      {/* Progress Card */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs text-slate-500 font-medium">
              {currentService.title[language]} · {t.checklistPage.progressLabel}
            </span>
            <div className="text-xl font-bold text-[#142B4A] mt-0.5 tabular-nums">
              {checkedCount} / {totalCount} ({percentComplete}%)
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => markAllDocsChecked(docIds, true)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              {t.checklistPage.markAll}
            </button>
            <button
              type="button"
              onClick={() => markAllDocsChecked(docIds, false)}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              {t.checklistPage.resetAll}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <div
            className="h-full bg-gradient-to-r from-[#F29B38] to-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${percentComplete}%` }}
          />
        </div>

        {percentComplete === 100 && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-4 text-xs text-emerald-800">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'en'
                  ? 'All documents marked ready! You are prepared to apply.'
                  : 'सभी दस्तावेज़ तैयार हैं! अब आप आवेदन करने के लिए तैयार हैं।'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => navigateTo('guide', currentService.id)}
              className="font-bold underline text-emerald-900 shrink-0"
            >
              {t.servicesPage.openGuide} →
            </button>
          </div>
        )}
      </div>

      {/* Document Items List */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-xs divide-y divide-slate-100 overflow-hidden">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
            {language === 'en' ? 'Required & Supporting Documents' : 'आवश्यक एवं सहायक दस्तावेज़ सूची'}
          </span>
          <span className="text-xs text-slate-500">
            {currentService.code}
          </span>
        </div>

        {docs.map((doc, idx) => {
          const isChecked = !!checkedDocs[doc.id];
          return (
            <div
              key={doc.id}
              onClick={() => toggleDocChecked(doc.id)}
              className={`p-5 transition-colors cursor-pointer flex items-start gap-4 hover:bg-slate-50/80 ${
                isChecked ? 'bg-amber-50/20' : ''
              }`}
            >
              {/* Checkbox */}
              <button
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  toggleDocChecked(doc.id);
                }}
                className="mt-0.5 shrink-0 focus:outline-none"
                aria-label={`Toggle ${doc.name[language]}`}
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-slate-300 hover:text-slate-500" />
                )}
              </button>

              {/* Content */}
              <div className="flex-1 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3
                    className={`text-sm font-bold transition-colors ${
                      isChecked
                        ? 'text-slate-500 line-through decoration-slate-400'
                        : 'text-[#142B4A]'
                    }`}
                  >
                    {idx + 1}. {doc.name[language]}
                  </h3>

                  <div className="flex items-center gap-2">
                    {doc.required ? (
                      <span className="text-[11px] font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                        {language === 'en' ? 'Mandatory' : 'अनिवार्य'}
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {language === 'en' ? 'If Applicable' : 'लागू होने पर'}
                      </span>
                    )}

                    <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {doc.acceptedFormats.join('/')}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {doc.description[language]}
                </p>

                {doc.tip && (
                  <div className="inline-flex items-center gap-1.5 text-[11px] text-amber-800 bg-amber-50/80 px-2.5 py-1 rounded border border-amber-200/60 mt-1">
                    <Info className="w-3 h-3 text-amber-600 shrink-0" />
                    <span>{doc.tip[language]}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Preparation Guidelines & Notes */}
      <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 space-y-3">
        <h3 className="text-sm font-bold text-[#142B4A] flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#F29B38]" />
          <span>{t.checklistPage.instructionsTitle}</span>
        </h3>
        <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed list-disc list-inside">
          <li>{t.checklistPage.instruction1}</li>
          <li>{t.checklistPage.instruction2}</li>
          <li>{t.checklistPage.instruction3}</li>
        </ul>
        <div className="pt-2 text-[11px] text-slate-500 italic">
          {t.checklistPage.disclaimer}
        </div>
      </div>
    </div>
  );
};
