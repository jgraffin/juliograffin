import { useState, useEffect, useContext, createContext } from "react";

const HeaderContext = createContext({});
const switchValue = {
  pt: {
    isActive: true,
  },
  en: {
    isActive: false,
  },
};

const HeaderProvider = ({ children }: any) => {
  const [language, setLanguage] = useState("pt-br");
  const [isActive, setIsActive] = useState(switchValue) as any;

  const switchLanguage = (lang: any) => {
    if (lang === "pt-br") {
      setLanguage("pt-br");
      setIsActive({
        pt: {
          isActive: true,
        },
        en: {
          isActive: false,
        },
      });
    } else {
      setLanguage("en-us");
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
