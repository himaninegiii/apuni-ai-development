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
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB]">
      {/* Top Utility Strip: Accessibility, Citizen Helpline, and Regional Attribution */}
      <div className="bg-[#F5F7FA] text-xs text-[#5A6A80] py-1.5 px-4 sm:px-8 border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs truncate">
            <span className="font-semibold text-[#183153] truncate">
              Uttarakhand Citizen Portal
            </span>
            <span aria-hidden="true" className="text-[#E5E7EB] hidden sm:inline">|</span>
            <span className="hidden md:inline text-[#5A6A80]">Independent citizen guidance inspired by Apuni Sarkar</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs shrink-0">
            {/* Senior font size scaling */}
            <div className="flex items-center gap-1 text-[#5A6A80]">
              <span className="text-[11px] hidden md:inline mr-1">{t.common.textSize}:</span>
              <button
                type="button"
                onClick={() => setFontSize('normal')}
                title="Normal text size"
                className={`min-w-[24px] h-6 px-1.5 rounded text-xs transition-colors flex items-center justify-center ${
                  fontSize === 'normal' ? 'bg-[#183153] text-white font-bold' : 'hover:bg-slate-200 text-[#183153]'
                }`}
              >
                A
              </button>
              <button
                type="button"
                onClick={() => setFontSize('large')}
                title="Large text size"
                className={`min-w-[24px] h-6 px-1.5 rounded text-xs transition-colors flex items-center justify-center ${
                  fontSize === 'large' ? 'bg-[#183153] text-white font-bold' : 'hover:bg-slate-200 text-[#183153]'
                }`}
              >
                A+
              </button>
              <button
                type="button"
                onClick={() => setFontSize('xlarge')}
                title="Extra large text size (Senior friendly)"
                className={`min-w-[26px] h-6 px-1.5 rounded text-xs transition-colors flex items-center justify-center ${
                  fontSize === 'xlarge' ? 'bg-[#183153] text-white font-bold' : 'hover:bg-slate-200 text-[#183153]'
                }`}
              >
                A++
              </button>
            </div>

            <span aria-hidden="true" className="text-[#E5E7EB] hidden sm:inline">|</span>

            {/* Helpline indicator */}
            <a
              href="tel:1905"
              className="flex items-center gap-1 text-[#183153] hover:text-[#D98B36] transition-colors"
              title="Call CM Helpline 1905"
            >
              <Phone className="w-3 h-3 text-[#D98B36]" />
              <span className="tabular-nums font-medium text-[11px] sm:text-xs">
                <span className="hidden sm:inline">CM Helpline: </span>1905
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main White Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4 lg:gap-8">
          {/* Zone 1: Brand Wordmark & Subtitle */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 sm:gap-3 text-left group focus:outline-none min-w-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#183153] flex items-center justify-center text-[#D98B36] font-extrabold text-base sm:text-lg shadow-2xs shrink-0">
                <span>अ</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#183153] truncate leading-none">
                  {t.brand}
                </span>
                <span className="text-[10px] sm:text-xs text-[#5A6A80] tracking-normal font-medium mt-1 truncate">
                  {language === 'en' ? 'Uttarakhand Citizen Guide' : 'उत्तराखंड नागरिक सेवा संदर्शिका'}
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Clean Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#183153]">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`py-2 transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? 'text-[#183153] font-bold'
                      : 'text-[#5A6A80] hover:text-[#183153]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D98B36] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Language toggle + Primary CTA + Hamburger) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="flex items-center gap-1 sm:gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs font-semibold bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] border border-[#E5E7EB] transition-all whitespace-nowrap shrink-0 min-h-[38px]"
              title="Switch language / भाषा बदलें"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-[#D98B36]" />
              <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Primary Action Button: Start with AI Assistant (Hidden on very narrow mobile screens to avoid clipping, accessible in drawer and tablet+) */}
            <button
              type="button"
              onClick={() => handleNavClick('assistant')}
              className={`hidden sm:flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap shrink-0 shadow-2xs min-h-[38px] ${
                currentPage === 'assistant'
                  ? 'bg-[#183153] text-white'
                  : 'bg-[#D98B36] hover:bg-[#C57B28] text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.nav.assistant}</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#183153] hover:bg-[#F5F7FA] border border-[#E5E7EB] focus:outline-none min-w-[40px] min-h-[40px] flex items-center justify-center shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 space-y-3 shadow-lg max-h-[calc(100vh-100px)] overflow-y-auto">
          {/* Quick AI Assistant Button at Top of Mobile Menu */}
          <button
            type="button"
            onClick={() => handleNavClick('assistant')}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold transition-colors shadow-2xs ${
              currentPage === 'assistant'
                ? 'bg-[#183153] text-white'
                : 'bg-[#D98B36] hover:bg-[#C57B28] text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{t.hero.startAssistant}</span>
          </button>

          {/* Navigation Links */}
          <div className="space-y-1 pt-1">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-between min-h-[44px] ${
                    isActive
                      ? 'bg-[#F5F7FA] text-[#183153] font-bold border-l-4 border-[#D98B36]'
                      : 'text-[#5A6A80] hover:bg-[#F5F7FA] hover:text-[#183153]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="text-xs text-[#D98B36]">●</span>}
                </button>
              );
            })}
          </div>

          {/* Mobile Accessibility & Senior Controls Section */}
          <div className="pt-3 border-t border-[#E5E7EB] space-y-3">
            <div className="bg-[#F5F7FA] p-3 rounded-xl border border-[#E5E7EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#183153]">
                {t.common.textSize}:
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  className={`min-w-[32px] h-8 px-2 rounded-md text-xs transition-colors flex items-center justify-center ${
                    fontSize === 'normal' ? 'bg-[#183153] text-white font-bold' : 'bg-white hover:bg-slate-200 text-[#183153] border border-[#E5E7EB]'
                  }`}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  className={`min-w-[32px] h-8 px-2 rounded-md text-xs transition-colors flex items-center justify-center ${
                    fontSize === 'large' ? 'bg-[#183153] text-white font-bold' : 'bg-white hover:bg-slate-200 text-[#183153] border border-[#E5E7EB]'
                  }`}
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('xlarge')}
                  className={`min-w-[36px] h-8 px-2 rounded-md text-xs transition-colors flex items-center justify-center ${
                    fontSize === 'xlarge' ? 'bg-[#183153] text-white font-bold' : 'bg-white hover:bg-slate-200 text-[#183153] border border-[#E5E7EB]'
                  }`}
                >
                  A++
                </button>
              </div>
            </div>

            {/* Official Portal Redirect */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                triggerExternalRedirect();
              }}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] text-xs font-semibold border border-[#E5E7EB] min-h-[44px]"
            >
              <span>{t.nav.officialPortal} (eservices.uk.gov.in)</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#5A6A80]" />
            </button>

            {/* Helpline quick dial */}
            <a
              href="tel:1905"
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>CM Helpline: 1905 (Toll Free)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
