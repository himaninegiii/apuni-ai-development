import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { servicesData } from '../data/servicesData';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileText,
  Volume2,
  CheckCircle2,
  Users,
  Clock,
  Printer,
  ChevronRight,
  CreditCard,
  Home as HomeIcon,
  Baby,
  HeartPulse,
  HandHeart,
  Globe,
  Scroll
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language, navigateTo } = useApp();
  const [heroImgError, setHeroImgError] = useState(false);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#F29B38]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#F29B38]" />;
      case 'Home':
        return <HomeIcon className="w-5 h-5 text-[#F29B38]" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-[#F29B38]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#F29B38]" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-[#F29B38]" />;
      case 'Scroll':
        return <Scroll className="w-5 h-5 text-[#F29B38]" />;
      default:
        return <FileText className="w-5 h-5 text-[#F29B38]" />;
    }
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#142B4A] via-[#1A3459] to-[#142B4A] text-white pt-10 pb-16 px-4 sm:px-8 -mt-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/15">
                <span className="w-2 h-2 rounded-full bg-[#F29B38]" />
                <span>{t.badgeDisclaimer}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => navigateTo('assistant')}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#F29B38] hover:bg-[#DF8725] text-white font-bold text-sm sm:text-base shadow-lg transition-all transform active:scale-95"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{t.hero.startAssistant}</span>
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('services')}
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base border border-white/20 transition-all"
                >
                  <span>{t.hero.exploreServices}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Trust statement */}
              <p className="text-xs text-sky-200/80 leading-normal max-w-xl">
                {t.hero.disclaimerNotice}
              </p>
            </div>

            {/* Right Column: Hero Visual - Authentic Uttarakhand Citizens */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 aspect-video lg:aspect-4/3 flex items-center justify-center">
                {!heroImgError ? (
                  <img
                    src="/images/uttarakhand_citizens_hero.jpg"
                    alt="Real citizens of Uttarakhand - elder in traditional Pahadi cap, woman in authentic Pahadi attire and young citizen in Himalayan village"
                    className="w-full h-full object-cover transition-opacity duration-300"
                    onError={() => setHeroImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#142B4A] via-[#1D3B63] to-[#0D1C30] p-6 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-[#F29B38]/10 blur-2xl pointer-events-none" />
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#F29B38]" />
                      <span className="text-xs font-semibold text-[#F29B38] uppercase tracking-wider">
                        {language === 'en' ? 'Citizen Assistance Platform' : 'नागरिक सेवा मंच'}
                      </span>
                    </div>
                    <div className="space-y-2 my-auto py-4">
                      <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#F29B38] mb-3 border border-white/15">
                        <Users className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {language === 'en' ? 'Uttarakhand Citizen Services' : 'उत्तराखंड नागरिक सेवाएं'}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {language === 'en'
                          ? 'Empowering citizens across all 13 districts with direct, verified access to government certificates and public welfare schemes.'
                          : 'सभी 13 जनपदों के नागरिकों हेतु प्रमाण पत्र, दस्तावेज चेकलिस्ट एवं पारदर्शी शासकीय मार्गदर्शन।'}
                      </p>
                    </div>
                    <div className="text-[11px] text-sky-200/70 border-t border-white/10 pt-2 flex items-center justify-between">
                      <span>Apuni AI</span>
                      <span>eservices.uk.gov.in</span>
                    </div>
                  </div>
                )}
                {!heroImgError && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-5 pointer-events-none">
                    <div className="text-white space-y-1">
                      <span className="text-[11px] font-bold text-[#F29B38] uppercase tracking-wider">
                        {language === 'en' ? 'Empowering Every Citizen' : 'उत्तराखंड के हर नागरिक के साथ'}
                      </span>
                      <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                        {language === 'en'
                          ? 'Built for the people of Uttarakhand, simplifying complex certificates and social benefits into easy everyday language.'
                          : 'उत्तराखंड के जन-सामान्य हेतु सरल, सुलभ और विश्वसनीय शासकीय सेवा मार्गदर्शन।'}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/15">
            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-[#F29B38] tabular-nums">
                {t.quickStats.servicesCount}
              </div>
              <div className="text-xs text-slate-300">
                {t.quickStats.servicesDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {t.quickStats.checklistReady}
              </div>
              <div className="text-xs text-slate-300">
                {t.quickStats.checklistDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-[#38BDF8]">
                {t.quickStats.bilingual}
              </div>
              <div className="text-xs text-slate-300">
                {t.quickStats.bilingualDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-2xl font-bold text-white">
                {t.quickStats.rtsAct}
              </div>
              <div className="text-xs text-slate-300">
                {t.quickStats.rtsDesc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142B4A]">
              {t.popularServices.title}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.popularServices.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#142B4A] hover:text-[#F29B38] transition-colors"
          >
            <span>{t.popularServices.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center border border-amber-100">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-600 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                    {service.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#142B4A] group-hover:text-[#F29B38] transition-colors">
                    {service.title[language]}
                  </h3>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {service.department[language]}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {service.shortDesc[language]}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-[#F29B38]" />
                  <span>
                    {t.common.estimatedTime}: <strong className="text-slate-800 tabular-nums">{service.estimatedDays} {t.common.days}</strong>
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateTo('guide', service.id)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-[#142B4A] hover:bg-[#0D1C30] text-white transition-colors text-center"
                >
                  {t.servicesPage.openGuide}
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', service.id)}
                  className="py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                  title={t.servicesPage.openChecklist}
                >
                  {t.servicesPage.openChecklist}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How Apuni AI Works */}
      <section className="bg-slate-50 border-y border-slate-200 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#142B4A]">
              {t.howItWorks.title}
            </h2>
            <p className="text-sm text-slate-600">
              {t.howItWorks.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#142B4A] text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-[#142B4A]">
                {t.howItWorks.step1Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step1Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#F29B38] text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-[#142B4A]">
                {t.howItWorks.step2Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step2Desc}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#142B4A] text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-[#142B4A]">
                {t.howItWorks.step3Title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.howItWorks.step3Desc}
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              onClick={() => navigateTo('assistant')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#142B4A] hover:bg-[#0D1C30] text-white font-bold text-sm shadow-md transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#F29B38]" />
              <span>{t.hero.startAssistant}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Accessibility & Inclusive Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-br from-[#142B4A] to-[#1E3E6B] rounded-2xl p-8 sm:p-12 text-white shadow-xl">
          <div className="max-w-2xl space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F29B38]">
              {language === 'en' ? 'Accessibility First' : 'सर्वसमावेशक नागरिक सहायता'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t.accessibilitySection.title}
            </h2>
            <p className="text-sm text-sky-100 leading-relaxed">
              {t.accessibilitySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-2">
              <Globe className="w-6 h-6 text-[#F29B38]" />
              <h3 className="text-sm font-bold text-white">
                {t.accessibilitySection.feature1Title}
              </h3>
              <p className="text-xs text-sky-100/90 leading-relaxed">
                {t.accessibilitySection.feature1Desc}
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-2">
              <Volume2 className="w-6 h-6 text-[#38BDF8]" />
              <h3 className="text-sm font-bold text-white">
                {t.accessibilitySection.feature2Title}
              </h3>
              <p className="text-xs text-sky-100/90 leading-relaxed">
                {t.accessibilitySection.feature2Desc}
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-2">
              <Users className="w-6 h-6 text-[#F29B38]" />
              <h3 className="text-sm font-bold text-white">
                {t.accessibilitySection.feature3Title}
              </h3>
              <p className="text-xs text-sky-100/90 leading-relaxed">
                {t.accessibilitySection.feature3Desc}
              </p>
            </div>

            <div className="bg-white/10 p-5 rounded-xl border border-white/10 space-y-2">
              <Printer className="w-6 h-6 text-[#38BDF8]" />
              <h3 className="text-sm font-bold text-white">
                {t.accessibilitySection.feature4Title}
              </h3>
              <p className="text-xs text-sky-100/90 leading-relaxed">
                {t.accessibilitySection.feature4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
