import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { servicesData } from '../data/servicesData';
import {
  Search,
  CreditCard,
  ShieldCheck,
  Home as HomeIcon,
  Baby,
  HeartPulse,
  HandHeart,
  FileText,
  Clock,
  CheckSquare,
  BookOpen,
  Scroll
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { t, language, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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

  const filteredServices = servicesData.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;

    const q = searchQuery.toLowerCase();
    const titleMatch =
      service.title.en.toLowerCase().includes(q) ||
      service.title.hi.toLowerCase().includes(q);
    const descMatch =
      service.shortDesc.en.toLowerCase().includes(q) ||
      service.shortDesc.hi.toLowerCase().includes(q);
    const deptMatch =
      service.department.en.toLowerCase().includes(q) ||
      service.department.hi.toLowerCase().includes(q);
    const codeMatch = service.code.toLowerCase().includes(q);

    return matchesCategory && (titleMatch || descMatch || deptMatch || codeMatch);
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5 sm:p-8 shadow-2xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#D98B36] uppercase tracking-wider">
            {language === 'en' ? 'Citizen Service Directory' : 'अपुणी सरकार ई-सेवा संदर्शिका'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#183153] mt-1 break-words">
            {t.servicesPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-[#5A6A80] mt-1 max-w-2xl">
            {t.servicesPage.subtitle}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 pt-2">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#5A6A80] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.servicesPage.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 min-h-[44px] rounded-lg border border-[#E5E7EB] text-xs sm:text-sm text-[#183153] placeholder-[#5A6A80] focus:outline-none focus:border-[#183153] bg-[#F5F7FA] focus:bg-white transition-colors"
            />
          </div>

          {/* Interactive Category Filter Tabs: Horizontal scrollable strip on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 sm:mx-0 sm:px-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center justify-center ${
                selectedCategory === 'all'
                  ? 'bg-[#183153] text-white'
                  : 'bg-[#F5F7FA] text-[#183153] hover:bg-slate-200 border border-[#E5E7EB]'
              }`}
            >
              {t.servicesPage.allCategories}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('revenue')}
              className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center justify-center ${
                selectedCategory === 'revenue'
                  ? 'bg-[#183153] text-white'
                  : 'bg-[#F5F7FA] text-[#183153] hover:bg-slate-200 border border-[#E5E7EB]'
              }`}
            >
              {t.servicesPage.revenue}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('social_welfare')}
              className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center justify-center ${
                selectedCategory === 'social_welfare'
                  ? 'bg-[#183153] text-white'
                  : 'bg-[#F5F7FA] text-[#183153] hover:bg-slate-200 border border-[#E5E7EB]'
              }`}
            >
              {t.servicesPage.socialWelfare}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('vital_records')}
              className={`px-3.5 py-2 min-h-[40px] text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center justify-center ${
                selectedCategory === 'vital_records'
                  ? 'bg-[#183153] text-white'
                  : 'bg-[#F5F7FA] text-[#183153] hover:bg-slate-200 border border-[#E5E7EB]'
              }`}
            >
              {t.servicesPage.vitalRecords}
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-[#E5E7EB] hover:border-[#183153]/40 shadow-2xs hover:shadow-xs transition-all p-5 sm:p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Card Header: Icon & Code */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F5F7FA] flex items-center justify-center border border-[#E5E7EB] shrink-0">
                  {getServiceIcon(service.iconName)}
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-[#5A6A80] font-semibold bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E7EB]">
                    {service.code}
                  </span>
                  <div className="text-[10px] text-[#5A6A80] mt-0.5 font-medium">
                    {service.category.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Title & Department */}
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#183153] leading-snug break-words">
                  {service.title[language]}
                </h2>
                <div className="text-xs text-[#5A6A80] font-medium mt-0.5">
                  {service.department[language]}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#5A6A80] leading-relaxed">
                {service.shortDesc[language]}
              </p>

              {/* RTS and SLA details */}
              <div className="pt-2 border-t border-[#E5E7EB] space-y-1.5 text-xs text-[#5A6A80]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#D98B36] shrink-0" />
                  <span>
                    {t.common.estimatedTime}: <strong className="text-[#183153] tabular-nums font-semibold">{service.estimatedDays} {t.common.days}</strong>
                  </span>
                </div>
                <div className="text-[11px] text-[#47745A] font-medium leading-snug">
                  {service.rtsGuarantee[language]}
                </div>
              </div>
            </div>

            {/* Action Buttons: Stacked on narrow mobile, 2 cols on tablet/desktop */}
            <div className="pt-4 mt-4 border-t border-[#E5E7EB] grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => navigateTo('checklist', service.id)}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold bg-[#F5F7FA] hover:bg-slate-200 text-[#183153] border border-[#E5E7EB] transition-colors"
              >
                <CheckSquare className="w-3.5 h-3.5 text-[#D98B36]" />
                <span>{t.servicesPage.openChecklist}</span>
              </button>

              <button
                type="button"
                onClick={() => navigateTo('guide', service.id)}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 min-h-[44px] rounded-lg text-xs font-semibold bg-[#183153] hover:bg-[#12253E] text-white transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.servicesPage.viewDetails}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-[#E5E7EB] p-8 space-y-3">
          <p className="text-sm text-[#5A6A80]">
            {language === 'en'
              ? 'No matching citizen services found for your query.'
              : 'आपकी खोज के अनुसार कोई सेवा नहीं मिली।'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 rounded-lg bg-[#183153] text-white text-xs font-semibold"
          >
            {language === 'en' ? 'Clear Filters' : 'फ़िल्टर हटाएं'}
          </button>
        </div>
      )}
    </div>
  );
};
