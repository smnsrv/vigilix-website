'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { T } from './translations';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('uz');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vigilix_lang') || 'uz';
    setLang(saved);
    setMounted(true);
  }, []);

  function switchLang(l) {
    setLang(l);
    localStorage.setItem('vigilix_lang', l);
  }

  const t = (key) => T[lang]?.[key] ?? T['en']?.[key] ?? key;

  return (
    <LangContext.Provider value={{ lang, switchLang, t, mounted }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside LangProvider');
  return ctx;
}