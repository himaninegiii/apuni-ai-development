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
  Scroll,
  MapPin,
  Check
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { t, language, navigateTo } = useApp();
  const [peopleImgError, setPeopleImgError] = useState(false);
  const [villageImgError, setVillageImgError] = useState(false);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-[#D98B36]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#47745A]" />;
      case 'Home':
        return <HomeIcon className="w-5 h-5 text-[#183153]" />;
      case 'Baby':
        return <Baby className="w-5 h-5 text-[#D98B36]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-[#47745A]" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-[#D98B36]" />;
      case 'Scroll':
        return <Scroll className="w-5 h-5 text-[#183153]" />;
      default:
        return <FileText className="w-5 h-5 text-[#183153]" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-8">
      {/* 1. Hero Section: Pure White Background, Balanced, Spacious */}
      <section className="bg-white border-b border-[#E5E7EB] pt-6 sm:pt-14 pb-10 sm:pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Column: Clear Public Information & Actions */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F5F7FA] text-[#183153] text-xs font-semibold border border-[#E5E7EB] max-w-full">
                <span className="w-2 h-2 rounded-full bg-[#47745A] shrink-0" />
                <span className="truncate">{t.badgeDisclaimer}</span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#183153] leading-tight break-words">
                {t.hero.title}
              </h1>

              <p className="text-sm sm:text-lg text-[#5A6A80] leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>

              {/* Two Prominent Actions: Explore Services & Ask Apuni AI (Stacked vertically on mobile, row on tablet+) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => navigateTo('services')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#183153] hover:bg-[#12253E] text-white font-bold text-sm sm:text-base shadow-xs transition-all active:scale-98 min-h-[44px]"
                >
                  <span>{t.hero.exploreServices}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => navigateTo('assistant')}
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#D98B36] hover:bg-[#C57B28] text-white font-bold text-sm sm:text-base shadow-xs transition-all active:scale-98 min-h-[44px]"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>{t.hero.startAssistant}</span>
                </button>
              </div>

              {/* Trust statement & Right to Service indicator */}
              <div className="flex items-center gap-3 text-xs text-[#5A6A80] pt-2 border-t border-[#E5E7EB]/80 max-w-xl">
                <ShieldCheck className="w-4 h-4 text-[#47745A] shrink-0" />
                <span className="leading-snug">{t.hero.disclaimerNotice}</span>
              </div>
            </div>

            {/* Right Column: Authentic Uttarakhand People Portrait */}
            <div className="lg:col-span-5 w-full">
              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F5F7FA] shadow-xs flex flex-col w-full">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                  {!peopleImgError ? (
                    <img
                      src="/images/uttarakhand_people_community.jpg"
                      alt="Portrait of an elderly couple in a traditional village in Uttarakhand, India"
                      className="w-full h-full object-cover transition-opacity duration-300"
                      onError={() => setPeopleImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center bg-[#F5F7FA]">
                      <Users className="w-10 h-10 text-[#183153] mb-2" />
                      <div className="font-bold text-[#183153]">Uttarakhand Citizen Community</div>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-3.5 text-white">
                    <div className="text-[11px] sm:text-xs font-semibold tracking-wide">
                      {language === 'en' ? 'Authentic Uttarakhand Citizen Community' : 'उत्तराखंड ग्रामीण नागरिक समुदाय'}
                    </div>
                    <div className="text-[10px] text-slate-200">
                      Uttarkashi Village, Garhwal (Photo: Sumita Roy Dutta, CC BY-SA 4.0)
                    </div>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 bg-white border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#183153]">
                    {language === 'en' ? 'Serving All 13 Districts' : 'सभी 13 जनपदों के नागरिकों हेतु'}
                  </span>
                  <span className="text-[#47745A] font-semibold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Free Public Access</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Transparency Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E5E7EB]">
            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-extrabold text-[#183153] tabular-nums">
                {t.quickStats.servicesCount}
              </div>
              <div className="text-[11px] sm:text-xs text-[#5A6A80]">
                {t.quickStats.servicesDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-extrabold text-[#47745A] tabular-nums">
                {t.quickStats.checklistReady}
              </div>
              <div className="text-[11px] sm:text-xs text-[#5A6A80]">
                {t.quickStats.checklistDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-extrabold text-[#D98B36]">
                {t.quickStats.bilingual}
              </div>
              <div className="text-[11px] sm:text-xs text-[#5A6A80]">
                {t.quickStats.bilingualDesc}
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xl sm:text-3xl font-extrabold text-[#183153]">
                {t.quickStats.rtsAct}
              </div>
              <div className="text-[11px] sm:text-xs text-[#5A6A80]">
                {t.quickStats.rtsDesc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Popular Services Section: Clean Cards, Clear Typography, No Decorative Gradient Slop */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
              {language === 'en' ? 'Core Public Services' : 'प्रमुख नागरिक सेवाएं'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#183153] mt-0.5">
              {t.popularServices.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6A80] mt-1">
              {t.popularServices.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigateTo('services')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#183153] hover:text-[#D98B36] transition-colors self-start sm:self-auto py-1"
          >
            <span>{t.popularServices.viewAll}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {servicesData.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-[#E5E7EB] hover:border-[#183153]/40 shadow-xs hover:shadow-sm transition-all p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] flex items-center justify-center border border-[#E5E7EB] shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono text-[#5A6A80] font-semibold bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E7EB]">
                    {service.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#183153] group-hover:text-[#D98B36] transition-colors leading-snug">
                    {service.title[language]}
                  </h3>
                  <div className="text-xs text-[#5A6A80] mt-0.5">
                    {service.department[language]}
                  </div>
                </div>

                <p className="text-xs text-[#5A6A80] leading-relaxed line-clamp-3">
                  {service.shortDesc[language]}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs text-[#5A6A80]">
                  <Clock className="w-3.5 h-3.5 text-[#D98B36] shrink-0" />
                  <span>
                    {t.common.estimatedTime}: <strong className="text-[#183153] tabular-nums font-semibold">{service.estimatedDays} {t.common.days}</strong>
                  </span>
                </div>
              </div>

              {/* Action buttons with comfortable touch targets */}
              <div className="pt-4 mt-4 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => navigateTo('guide', service.id)}
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#183153] hover:bg-[#12253E] text-white transition-colors text-center min-h-[44px] flex items-center justify-center"
                >
                  {t.servicesPage.openGuide}
                </button>
                <button
                  type="button"
                  onClick={() => navigateTo('checklist', service.id)}
                  className="py-2.5 px-3 rounded-lg text-xs font-semibold bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] border border-[#E5E7EB] transition-colors text-center min-h-[44px] flex items-center justify-center"
                  title={t.servicesPage.openChecklist}
                >
                  {t.servicesPage.openChecklist}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Authentic Himalayan Photography & Real Village Showcase Section */}
      <section className="bg-[#F5F7FA] border-y border-[#E5E7EB] py-10 sm:py-16 px-4 sm:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
                {language === 'en' ? 'Grounded in Local Reality' : 'उत्तराखंड की वास्तविक संस्कृति व परिवेश'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#183153] mt-1 break-words">
                {language === 'en' ? 'Connecting Remote Villages with Digital Governance' : 'दूरस्थ पर्वतीय गांवों तक सुलभ डिजिटल नागरिक सेवाएं'}
              </h2>
              <p className="text-xs sm:text-sm text-[#5A6A80] mt-1 max-w-2xl leading-relaxed">
                {language === 'en'
                  ? 'From remote Himalayan settlements in Chamoli and Pithoragarh to urban hubs in Dehradun and Haridwar, Apuni AI ensures every citizen understands their statutory entitlements.'
                  : 'चमोली व पिथौरागढ़ के दूरस्थ पर्वतीय गांवों से लेकर देहरादून और हरिद्वार तक—अपुणी AI हर नागरिक को उनके शासकीय अधिकारों की सीधी जानकारी देता है।'}
              </p>
            </div>
            <div className="text-xs text-[#5A6A80] flex items-center gap-1.5 shrink-0 self-start md:self-auto">
              <MapPin className="w-3.5 h-3.5 text-[#D98B36]" />
              <span>Gaundar Village, Kedarnath Valley</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Village Photograph */}
            <div className="lg:col-span-7 w-full">
              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] shadow-xs bg-white w-full">
                <div className="relative aspect-16/9 w-full bg-slate-100">
                  {!villageImgError ? (
                    <img
                      src="/images/uttarakhand_himalayan_village.jpg"
                      alt="Traditional Himalayan settlement of Gaundar village surrounded by green mountains in Uttarakhand"
                      className="w-full h-full object-cover"
                      onError={() => setVillageImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#F5F7FA] text-[#5A6A80] text-xs p-4 text-center">
                      Traditional Himalayan village setting in Uttarakhand
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 sm:p-4 text-white">
                    <div className="text-xs font-bold">
                      {language === 'en' ? 'Gaundar Village, Garhwal Himalayas' : 'गौंडार गांव, गढ़वाल हिमालय'}
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Traditional stone-and-timber architecture (Photo: Immortal Sharma, CC BY-SA 4.0, Wikimedia Commons)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Explanatory Narrative: Why Transparent Public Assistance Matters */}
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-[#183153] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#47745A] shrink-0" />
                  <span>{language === 'en' ? 'Bridging Geographical Distances' : 'भौगोलिक दूरी को सुगमता में बदलना'}</span>
                </h3>
                <p className="text-xs text-[#5A6A80] leading-relaxed">
                  {language === 'en'
                    ? 'In mountainous terrain where traveling to the nearest Tehsil office can take hours, having a complete, pre-verified document checklist avoids multiple unnecessary trips and delays.'
                    : 'पर्वतीय जनपदों में तहसील या ब्लॉक मुख्यालय तक पहुंचने में कई घंटे लगते हैं। आवश्यक दस्तावेजों की पूर्व-सत्यापित चेकलिस्ट नागरिकों को अनावश्यक चक्कर लगाने से बचाती है।'}
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base font-bold text-[#183153] flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#D98B36] shrink-0" />
                  <span>{language === 'en' ? 'Right to Service Compliance' : 'सेवा का अधिकार अधिनियम (RTS)'}</span>
                </h3>
                <p className="text-xs text-[#5A6A80] leading-relaxed">
                  {language === 'en'
                    ? 'Every government certificate is mapped directly to statutory timeframes under the Uttarakhand Right to Service Act 2011, ensuring transparency and accountability for citizens.'
                    : 'प्रत्येक प्रमाण पत्र उत्तराखंड सेवा का अधिकार अधिनियम 2011 के तहत निर्धारित समय-सीमा से जुड़ा है, जिससे नागरिकों को समयबद्ध सेवा की निश्चितता मिलती है।'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. How Apuni AI Works: Simple 3 Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 sm:space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
            {language === 'en' ? 'Simple Process' : 'सरल नागरिक प्रक्रिया'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#183153]">
            {t.howItWorks.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#5A6A80]">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-2 sm:space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#183153] font-bold flex items-center justify-center text-sm border border-[#E5E7EB]">
              1
            </div>
            <h3 className="text-base font-bold text-[#183153]">
              {t.howItWorks.step1Title}
            </h3>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              {t.howItWorks.step1Desc}
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-2 sm:space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#D98B36] font-bold flex items-center justify-center text-sm border border-[#E5E7EB]">
              2
            </div>
            <h3 className="text-base font-bold text-[#183153]">
              {t.howItWorks.step2Title}
            </h3>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              {t.howItWorks.step2Desc}
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#E5E7EB] shadow-xs space-y-2 sm:space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#47745A] font-bold flex items-center justify-center text-sm border border-[#E5E7EB]">
              3
            </div>
            <h3 className="text-base font-bold text-[#183153]">
              {t.howItWorks.step3Title}
            </h3>
            <p className="text-xs text-[#5A6A80] leading-relaxed">
              {t.howItWorks.step3Desc}
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => navigateTo('assistant')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#183153] hover:bg-[#12253E] text-white font-bold text-sm shadow-xs transition-colors min-h-[44px]"
          >
            <Sparkles className="w-4 h-4 text-[#D98B36]" />
            <span>{t.hero.startAssistant}</span>
          </button>
        </div>
      </section>

      {/* 5. Accessibility & Senior-Friendly Citizen Design Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#F5F7FA] rounded-2xl p-5 sm:p-12 border border-[#E5E7EB]">
          <div className="max-w-2xl space-y-2 mb-6 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D98B36]">
              {language === 'en' ? 'Accessibility First' : 'सर्वसमावेशक नागरिक सहायता'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#183153]">
              {t.accessibilitySection.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6A80] leading-relaxed">
              {t.accessibilitySection.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E7EB] space-y-2 shadow-2xs">
              <Globe className="w-6 h-6 text-[#183153]" />
              <h3 className="text-sm font-bold text-[#183153]">
                {t.accessibilitySection.feature1Title}
              </h3>
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                {t.accessibilitySection.feature1Desc}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E7EB] space-y-2 shadow-2xs">
              <Volume2 className="w-6 h-6 text-[#D98B36]" />
              <h3 className="text-sm font-bold text-[#183153]">
                {t.accessibilitySection.feature2Title}
              </h3>
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                {t.accessibilitySection.feature2Desc}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E7EB] space-y-2 shadow-2xs">
              <Users className="w-6 h-6 text-[#47745A]" />
              <h3 className="text-sm font-bold text-[#183153]">
                {t.accessibilitySection.feature3Title}
              </h3>
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                {t.accessibilitySection.feature3Desc}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E7EB] space-y-2 shadow-2xs">
              <Printer className="w-6 h-6 text-[#183153]" />
              <h3 className="text-sm font-bold text-[#183153]">
                {t.accessibilitySection.feature4Title}
              </h3>
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                {t.accessibilitySection.feature4Desc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
