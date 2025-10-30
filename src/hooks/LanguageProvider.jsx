import React, { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './languageContext';

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('app-lang') : null;
    return stored || 'pt';
  });

  useEffect(() => {
    try {
      localStorage.setItem('app-lang', language);
    } catch (error) {
      console.error('Error setting language in localStorage:', error);
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
    }
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
