import React from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { ExternalLink, ShieldCheck, Phone, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, navigateTo, triggerExternalRedirect } = useApp();

  return (
    <footer className="bg-white text-[#5A6A80] border-t border-[#E5E7EB] pt-10 sm:pt-14 pb-8 sm:pb-10 px-4 sm:px-8 mt-12 sm:mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 sm:pb-10 border-b border-[#E5E7EB]">
          {/* Col 1: About & Identity */}
          <div className="space-y-3.5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#183153] flex items-center justify-center text-[#D98B36] font-extrabold text-sm shadow-2xs">
                अ
              </div>
              <span className="text-lg font-bold text-[#183153] tracking-tight">{t.brand}</span>
            </div>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              {t.footer.aboutDesc}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#47745A] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Uttarakhand Right to Service (RTS) Informed</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#183153] uppercase tracking-wider">
              {t.popularServices.title}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'income-certificate')}
                  className="hover:text-[#183153] hover:underline transition-colors min-h-[32px] flex items-center"
                >
                  {t.guidePage.title} – Income
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', 'domicile-certificate')}
                  className="hover:text-[#183153] hover:underline transition-colors min-h-[32px] flex items-center"
                >
                  {t.checklistPage.title} – Domicile
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'caste-certificate')}
                  className="hover:text-[#183153] hover:underline transition-colors min-h-[32px] flex items-center"
                >
                  {t.guidePage.title} – Caste (SC/ST/OBC)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'old-age-pension')}
                  className="hover:text-[#183153] hover:underline transition-colors min-h-[32px] flex items-center"
                >
                  {t.guidePage.title} – Old Age Pension
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('tracker')}
                  className="hover:text-[#183153] hover:underline transition-colors min-h-[32px] flex items-center"
                >
                  {t.nav.tracker}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: State Citizen Helplines */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#183153] uppercase tracking-wider">
              {t.footer.emergencyHelplines}
            </h3>
            <ul className="space-y-2.5 text-xs text-[#5A6A80]">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D98B36] shrink-0 mt-0.5" />
                <div>
                  <a href="tel:1905" className="font-semibold text-[#183153] hover:text-[#D98B36]">
                    {t.footer.cmHelpline}
                  </a>
                  <div className="text-[11px] text-[#5A6A80]">Chief Minister Grievance Portal</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#183153] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#183153]">{t.footer.rtsHelpline}</span>
                  <div className="text-[11px] text-[#5A6A80]">Right to Service Commission, Dehradun</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#D98B36] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#183153]">{t.footer.cscHelpdesk}</span>
                  <div className="text-[11px] text-[#5A6A80]">Apuni Sarkar ITDA Technical Desk</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Portal Reference & Transparency */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#183153] uppercase tracking-wider">
              {t.footer.disclaimerHeading}
            </h3>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              {t.footer.disclaimerText}
            </p>
            <div className="pt-1.5">
              <button
                type="button"
                onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#F5F7FA] hover:bg-slate-200 text-xs font-semibold text-[#183153] transition-colors border border-[#E5E7EB] min-h-[40px]"
              >
                <span>Visit eservices.uk.gov.in</span>
                <ExternalLink className="w-3 h-3 text-[#D98B36]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar with District Inclusivity & Licensing */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5A6A80]">
          <div className="text-center sm:text-left">{t.footer.copyright}</div>
          <div className="text-xs text-[#5A6A80] text-center sm:text-right leading-relaxed break-words">
            <span>Dehradun · Haridwar · Nainital · Almora · Pauri · Pithoragarh · Chamoli · Tehri · Uttarkashi · Rudraprayag · Bageshwar · Champawat · US Nagar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
