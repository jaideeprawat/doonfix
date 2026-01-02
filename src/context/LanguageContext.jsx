import { createContext, useContext, useState } from "react";
import { en } from "../i18n/en";
import { hi } from "../i18n/hi";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  const strings = lang === "en" ? en : hi;

  return (
    <LanguageContext.Provider
      value={{ lang, toggleLanguage, strings }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);


//  import { createContext, useContext, useState } from "react";

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const [lang, setLang] = useState("hi"); // 👈 Hindi default

//   return (
//     <LanguageContext.Provider value={{ lang, setLang }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);
