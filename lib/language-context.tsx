"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "zh";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("siteLang");
    if (saved === "zh" || saved === "en") {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  function toggleLang() {
    setLang((prev) => {
      const next = prev === "en" ? "zh" : "en";
      window.localStorage.setItem("siteLang", next);
      return next;
    });
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
