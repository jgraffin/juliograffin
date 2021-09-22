import { useState, useEffect, useContext, createContext } from "react";

const HeaderContext = createContext({});

const HeaderProvider = ({ children }: any) => {
  const [language, setLanguage] = useState({
    currentLanguage: getLanguageFromLocalStorage(),
    pt: { isActive: getPtFromLocalStorage() },
    en: { isActive: getEnFromLocalStorage() },
  });

  const switchLanguage = (lang: any) => {
    if (lang === "pt-br") {
      setLanguage({
        currentLanguage: "pt-br",
        pt: { isActive: true },
        en: { isActive: false },
      });
    } else {
      setLanguage({
        currentLanguage: "en-us",
        pt: { isActive: false },
        en: { isActive: true },
      });
    }
  };

  function getLanguageFromLocalStorage() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("currentLanguage")
        ? localStorage.getItem("currentLanguage")
        : 1;
    }
  }

  function getPtFromLocalStorage() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("pt") ? localStorage.getItem("pt") : false;
    }
  }

  function getEnFromLocalStorage() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("en") ? localStorage.getItem("en") : false;
    }
  }

  useEffect(() => {
    localStorage.setItem("currentLanguage", String(language.currentLanguage));
    localStorage.setItem("pt", String(language.pt.isActive));
    localStorage.setItem("en", String(language.en.isActive));
    getLanguageFromLocalStorage();
    getPtFromLocalStorage();
    getEnFromLocalStorage();
  }, [language.currentLanguage, language.pt.isActive, language.en.isActive]);

  return (
    <HeaderContext.Provider value={{ switchLanguage, language }}>
      {children}
    </HeaderContext.Provider>
  );
};

const useHeader = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeader must be used within an HeaderProvider");
  }
  return context;
};

export { HeaderProvider, useHeader };
