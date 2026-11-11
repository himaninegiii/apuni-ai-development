import React from 'react';
import { useApp } from '../context/AppContext';
import { ExternalLink, AlertTriangle, X } from 'lucide-react';

export const ExternalRedirectModal: React.FC = () => {
  const { openExternalModal, setOpenExternalModal, externalUrl, t, language } = useApp();

  if (!openExternalModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-xl max-w-lg w-full p-5 sm:p-6 shadow-xl border border-[#E5E7EB] max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between gap-3 sm:gap-4 pb-3 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#183153] leading-snug break-words">
                {language === 'en' ? 'Leaving Apuni AI Interface' : 'आधिकारिक पोर्टल पर प्रस्थान'}
              </h3>
              <p className="text-xs text-[#5A6A80]">
                {language === 'en' ? 'Official Government Portal Redirection' : 'उत्तराखंड सरकारी पोर्टल'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpenExternalModal(false)}
            className="p-1.5 rounded-lg text-[#5A6A80] hover:text-[#183153] hover:bg-[#F5F7FA] shrink-0"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-3 text-xs sm:text-sm text-[#5A6A80] leading-relaxed">
          <p>
            {t.common.externalWarning}
          </p>
          <div className="p-3 bg-[#F5F7FA] rounded-lg border border-[#E5E7EB] font-mono text-xs text-[#183153] break-all select-all font-semibold">
            {externalUrl}
          </div>
          <p className="text-xs text-[#5A6A80]">
            {language === 'en'
              ? 'Please submit official forms, payment of fees, and legal documents exclusively on the government platform. Ensure your URL begins with https://eservices.uk.gov.in.'
              : 'कृपया आधिकारिक आवेदन, शुल्क भुगतान और दस्तावेज़ अपलोड केवल आधिकारिक सरकारी पोर्टल पर ही करें।'}
          </p>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2.5 sm:gap-3 pt-4 border-t border-[#E5E7EB]">
          <button
            type="button"
            onClick={() => setOpenExternalModal(false)}
            className="px-4 py-2.5 min-h-[44px] rounded-lg text-xs font-semibold text-[#5A6A80] hover:bg-slate-100 transition-colors flex items-center justify-center"
          >
            {t.common.cancel}
          </button>
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpenExternalModal(false)}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-lg text-xs font-semibold text-white bg-[#183153] hover:bg-[#12253E] transition-colors shadow-2xs"
          >
            <span>{t.common.continueToOfficial}</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D98B36]" />
          </a>
        </div>
      </div>
    </div>
  );
};
