import React from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { ExternalLink, ShieldCheck, Phone, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t, navigateTo, triggerExternalRedirect } = useApp();

  return (
    <footer className="bg-[#0D1C30] text-slate-300 border-t border-slate-800 pt-12 pb-8 px-4 sm:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Col 1: About & Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#F29B38] flex items-center justify-center text-white font-extrabold text-sm">
                अ
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{t.brand}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.aboutDesc}
            </p>
            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#F29B38] font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Uttarakhand RTS Act Informed</span>
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.popularServices.title}
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'income-certificate')}
                  className="hover:text-white transition-colors"
                >
                  {t.guidePage.title} – Income
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', 'domicile-certificate')}
                  className="hover:text-white transition-colors"
                >
                  {t.checklistPage.title} – Domicile
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'caste-certificate')}
                  className="hover:text-white transition-colors"
                >
                  {t.guidePage.title} – Caste (SC/ST/OBC)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('guide', 'pension-services')}
                  className="hover:text-white transition-colors"
                >
                  {t.guidePage.title} – Social Pension
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigateTo('tracker')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.tracker}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: State Citizen Helplines */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.emergencyHelplines}
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F29B38] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{t.footer.cmHelpline}</span>
                  <div className="text-[11px] text-slate-400">Chief Minister Grievance Portal</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{t.footer.rtsHelpline}</span>
                  <div className="text-[11px] text-slate-400">Right to Service Commission, Dehradun</div>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-[#F29B38] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">{t.footer.cscHelpdesk}</span>
                  <div className="text-[11px] text-slate-400">Apuni Sarkar ITDA Technical Desk</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Portal Reference & Transparency */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              {t.footer.disclaimerHeading}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.disclaimerText}
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => triggerExternalRedirect('https://eservices.uk.gov.in')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-colors border border-white/10"
              >
                <span>Visit eservices.uk.gov.in</span>
                <ExternalLink className="w-3 h-3 text-[#F29B38]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>{t.footer.copyright}</div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Dehradun · Haridwar · Nainital · Almora · Pauri · Pithoragarh</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
