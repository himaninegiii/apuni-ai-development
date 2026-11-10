import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PageId } from '../types';
import { Sparkles, Menu, X, Globe, Phone, ExternalLink } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, fontSize, setFontSize, currentPage, navigateTo, t, triggerExternalRedirect } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: Array<{ id: PageId; label: string }> = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'checklist', label: t.nav.checklist },
    { id: 'guide', label: t.nav.guide },
    { id: 'tracker', label: t.nav.tracker },
  ];

  const handleNavClick = (page: PageId) => {
    navigateTo(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#142B4A] text-white shadow-md border-b border-[#1D3B63]">
      {/* Top Accessibility & Citizen Helpline Utility Strip */}
      <div className="bg-[#0D1C30] text-xs text-slate-300 py-1.5 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="text-[#F29B38] font-medium">Uttarakhand Citizen Guide</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span className="hidden sm:inline text-slate-400">Independent assistance inspired by Apuni Sarkar</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            {/* Senior font size scaling */}
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-slate-400 text-[11px] hidden md:inline">{t.common.textSize}:</span>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                title="Normal text size"
                className={`px-1.5 py-0.5 rounded text-xs transition-colors ${
                  fontSize === 'normal' ? 'bg-[#F29B38] text-white font-bold' : 'hover:bg-white/10 text-slate-300'
                }`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                title="Large text size"
                className={`px-1.5 py-0.5 rounded text-xs transition-colors ${
                  fontSize === 'large' ? 'bg-[#F29B38] text-white font-bold' : 'hover:bg-white/10 text-slate-300'
                }`}
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('xlarge')}
                title="Extra large text size (Senior friendly)"
                className={`px-1.5 py-0.5 rounded text-xs transition-colors ${
                  fontSize === 'xlarge' ? 'bg-[#F29B38] text-white font-bold' : 'hover:bg-white/10 text-slate-300'
                }`}
              >
                A++
              </button>
            </div>

            <span aria-hidden="true" className="opacity-40">·</span>

            {/* Helpline indicator */}
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#F29B38]" />
              <span className="tabular-nums">CM Helpline: 1905</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F29B38] to-[#DF8725] flex items-center justify-center text-white font-extrabold shadow-sm">
                <span className="text-base tracking-tighter">अ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap">
                  {t.brand}
                </span>
                <span className="text-[11px] text-sky-200 tracking-wide font-normal -mt-0.5 hidden sm:block">
                  {language === 'en' ? 'Uttarakhand Citizen Guide' : 'उत्तराखंड नागरिक सेवा'}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-200">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`py-1.5 transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F29B38] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Language toggle + Primary CTA) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all whitespace-nowrap shrink-0"
              title="Switch language / भाषा बदलें"
            >
              <Globe className="w-3.5 h-3.5 text-[#F29B38]" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Primary Action Button: Start with AI Assistant */}
            <button
              type="button"
              onClick={() => handleNavClick('assistant')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm whitespace-nowrap shrink-0 ${
                currentPage === 'assistant'
                  ? 'bg-white text-[#142B4A]'
                  : 'bg-[#F29B38] hover:bg-[#DF8725] text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{t.nav.assistant}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1C30] border-t border-white/10 px-4 py-4 space-y-2">
          {navItems.map(item => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-[#142B4A] text-white font-semibold border-l-2 border-[#F29B38]'
                    : 'text-slate-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && <span className="text-xs text-[#F29B38]">●</span>}
              </button>
            );
          })}

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              type="button"
              onClick={() => handleNavClick('assistant')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#F29B38] text-white text-sm font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              <span>{t.hero.startAssistant}</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerExternalRedirect();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-medium border border-white/10"
            >
              <span>{t.nav.officialPortal} (eservices.uk.gov.in)</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
