import { useState, useEffect, useContext, createContext } from "react";

const HeaderContext = createContext({});

const HeaderProvider = ({ children }: any) => {
  const [language, setLanguage] = useState({
    currentLanguage: getLanguageFromLocalStorage(),
  });
  const [isActive, setIsActive] = useState({
    pt: {
      isActive: getIsActiveFromLocalStorage(),
    },
    en: {
      isActive: getIsActiveFromLocalStorage(),
    },
  });

  const switchLanguage = (lang: any) => {
    if (lang === "pt-br") {
      setLanguage({ currentLanguage: "pt-br" });
      setIsActive({
        pt: {
          isActive: true,
        },
        en: {
          isActive: false,
        },
      });
      localStorage.getItem("current");
    } else {
      setLanguage({ currentLanguage: "en-us" });
      setIsActive({
        pt: {
          isActive: false,
        },
        en: {
          isActive: true,
        },
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

  function getIsActiveFromLocalStorage() {
    if (typeof window !== "undefined") {
      return localStorage.getItem("currentIsActive")
        ? localStorage.getItem("currentIsActive")
        : false;
    }
  }

  useEffect(() => {
    localStorage.setItem("currentLanguage", String(language.currentLanguage));
    localStorage.setItem("currentIsActive", JSON.stringify(isActive));
    getLanguageFromLocalStorage();
    getIsActiveFromLocalStorage();
  }, [language.currentLanguage, isActive]);

  return (
    <HeaderContext.Provider value={{ switchLanguage, language, isActive }}>
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
