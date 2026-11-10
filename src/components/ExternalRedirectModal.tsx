import React from 'react';
import { useApp } from '../context/AppContext';
import { ExternalLink, AlertTriangle, X } from 'lucide-react';

export const ExternalRedirectModal: React.FC = () => {
  const { openExternalModal, setOpenExternalModal, externalUrl, t, language } = useApp();

  if (!openExternalModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
        <div className="flex items-start justify-between gap-4 pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#142B4A]">
                {language === 'en' ? 'Leaving Apuni AI Interface' : 'आधिकारिक पोर्टल पर प्रस्थान'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'Official Government Portal Redirection' : 'उत्तराखंड सरकारी पोर्टल'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpenExternalModal(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            {t.common.externalWarning}
          </p>
          <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 font-mono text-xs text-slate-700 break-all select-all">
            {externalUrl}
          </div>
          <p className="text-xs text-slate-500">
            {language === 'en'
              ? 'Please submit official forms, payment of fees, and legal documents exclusively on the government platform. Ensure your URL begins with https://eservices.uk.gov.in.'
              : 'कृपया आधिकारिक आवेदन, शुल्क भुगतान और दस्तावेज़ अपलोड केवल आधिकारिक सरकारी पोर्टल पर ही करें।'}
          </p>
        </div>

        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setOpenExternalModal(false)}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
          >
            {t.common.cancel}
          </button>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenExternalModal(false)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#142B4A] hover:bg-[#0D1C30] transition-colors"
          >
            <span>{t.common.continueToOfficial}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
