import { useState, useEffect, useContext, createContext } from "react";

const HeaderContext = createContext({});

const HeaderProvider = ({ children }: any) => {
  const [language, setLanguage] = useState({
    currentLanguage: getLanguageFromLocalStorage(),
  });

  const switchLanguage = (lang: any) => {
    if (lang === "pt-br") {
      setLanguage({
        currentLanguage: "pt-br",
      });
    } else {
      setLanguage({
        currentLanguage: "en-us",
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

  useEffect(() => {
    localStorage.setItem("currentLanguage", String(language.currentLanguage));
    getLanguageFromLocalStorage();
  }, [language.currentLanguage]);

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
