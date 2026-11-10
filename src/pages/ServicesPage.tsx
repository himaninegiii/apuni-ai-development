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
  ArrowRight,
  CheckSquare,
  BookOpen,
  Filter,
  Scroll
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { t, language, navigateTo } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'CreditCard':
        return <CreditCard className="w-6 h-6 text-[#F29B38]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#F29B38]" />;
      case 'Home':
        return <HomeIcon className="w-6 h-6 text-[#F29B38]" />;
      case 'Baby':
        return <Baby className="w-6 h-6 text-[#F29B38]" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-[#F29B38]" />;
      case 'HandHeart':
        return <HandHeart className="w-6 h-6 text-[#F29B38]" />;
      case 'Scroll':
        return <Scroll className="w-6 h-6 text-[#F29B38]" />;
      default:
        return <FileText className="w-6 h-6 text-[#F29B38]" />;
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
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 space-y-8">
      {/* Page Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
        <div>
          <span className="text-xs font-bold text-[#F29B38] uppercase tracking-wider">
            {language === 'en' ? 'Apuni Sarkar Directory' : 'अपुणी सरकार ई-सेवा संदर्शिका'}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#142B4A] mt-1">
            {t.servicesPage.title}
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            {t.servicesPage.subtitle}
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 pt-2">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder={t.servicesPage.searchPlaceholder}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#142B4A] bg-slate-50 focus:bg-white transition-colors"
            />
          </div>

          {/* Interactive Category Filter Tabs (Single-line controls with working handlers) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'all'
                  ? 'bg-[#142B4A] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.servicesPage.allCategories}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('revenue')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'revenue'
                  ? 'bg-[#142B4A] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.servicesPage.revenue}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('social_welfare')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'social_welfare'
                  ? 'bg-[#142B4A] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.servicesPage.socialWelfare}
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('vital_records')}
              className={`px-3 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 ${
                selectedCategory === 'vital_records'
                  ? 'bg-[#142B4A] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.servicesPage.vitalRecords}
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <div
            key={service.id}
            className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-6 flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Card Header: Icon & Code */}
              <div className="flex items-center justify-between gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100">
                  {getServiceIcon(service.iconName)}
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-mono text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded">
                    {service.code}
                  </span>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {service.category.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Title & Department */}
              <div>
                <h2 className="text-lg font-bold text-[#142B4A] leading-snug">
                  {service.title[language]}
                </h2>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {service.department[language]}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {service.shortDesc[language]}
              </p>

              {/* RTS and SLA details */}
              <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F29B38] shrink-0" />
                  <span>
                    {t.common.estimatedTime}: <strong className="text-slate-800 tabular-nums">{service.estimatedDays} {t.common.days}</strong>
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 italic">
                  {service.rtsGuarantee[language]}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-5 mt-4 border-t border-slate-100 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => navigateTo('checklist', service.id)}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <CheckSquare className="w-3.5 h-3.5 text-[#F29B38]" />
                <span>{t.servicesPage.openChecklist}</span>
              </button>

              <button
                type="button"
                onClick={() => navigateTo('guide', service.id)}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold bg-[#142B4A] hover:bg-[#0D1C30] text-white transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.servicesPage.viewDetails}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredServices.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-slate-200 p-8 space-y-3">
          <p className="text-sm text-slate-600">
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
            className="px-4 py-2 rounded-lg bg-[#142B4A] text-white text-xs font-semibold"
          >
            {language === 'en' ? 'Clear Filters' : 'फ़िल्टर हटाएं'}
          </button>
        </div>
      )}
    </div>
  );
};
