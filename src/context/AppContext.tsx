import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, FontSize, PageId } from '../types';
import { translations } from '../data/translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  selectedServiceId: string;
  setSelectedServiceId: (id: string) => void;
  navigateTo: (page: PageId, serviceId?: string) => void;
  checkedDocs: Record<string, boolean>;
  toggleDocChecked: (docId: string) => void;
  markAllDocsChecked: (docIds: string[], checked: boolean) => void;
  t: typeof translations.en;
  openExternalModal: boolean;
  setOpenExternalModal: (open: boolean) => void;
  externalUrl: string;
  triggerExternalRedirect: (url?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [fontSize, setFontSizeState] = useState<FontSize>('normal');
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('income-certificate');
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [openExternalModal, setOpenExternalModal] = useState<boolean>(false);
  const [externalUrl, setExternalUrl] = useState<string>('https://eservices.uk.gov.in');

  // Load saved preferences if available
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('apuni_lang') as Language;
      if (savedLang === 'en' || savedLang === 'hi') {
        setLanguageState(savedLang);
      }
      const savedFont = localStorage.getItem('apuni_fontsize') as FontSize;
      if (savedFont === 'normal' || savedFont === 'large' || savedFont === 'xlarge') {
        setFontSizeState(savedFont);
      }
      const savedDocs = localStorage.getItem('apuni_checked_docs');
      if (savedDocs) {
        setCheckedDocs(JSON.parse(savedDocs));
      }
    } catch {
      // Ignore localStorage errors in restricted environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('apuni_lang', lang);
    } catch {}
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
  };

  const setFontSize = (size: FontSize) => {
    setFontSizeState(size);
    try {
      localStorage.setItem('apuni_fontsize', size);
    } catch {}
  };

  const navigateTo = (page: PageId, serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDocChecked = (docId: string) => {
    setCheckedDocs(prev => {
      const updated = { ...prev, [docId]: !prev[docId] };
      try {
        localStorage.setItem('apuni_checked_docs', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const markAllDocsChecked = (docIds: string[], checked: boolean) => {
    setCheckedDocs(prev => {
      const updated = { ...prev };
      docIds.forEach(id => {
        updated[id] = checked;
      });
      try {
        localStorage.setItem('apuni_checked_docs', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const triggerExternalRedirect = (url = 'https://eservices.uk.gov.in') => {
    setExternalUrl(url);
    setOpenExternalModal(true);
  };

  const t = translations[language];

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        fontSize,
        setFontSize,
        currentPage,
        setCurrentPage,
        selectedServiceId,
        setSelectedServiceId,
        navigateTo,
        checkedDocs,
        toggleDocChecked,
        markAllDocsChecked,
        t,
        openExternalModal,
        setOpenExternalModal,
        externalUrl,
        triggerExternalRedirect,
      }}
    >
      <div
        className={
          fontSize === 'xlarge'
            ? 'text-lg leading-relaxed'
            : fontSize === 'large'
            ? 'text-base leading-relaxed'
            : 'text-sm sm:text-base leading-normal'
        }
      >
        {children}
      </div>
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
