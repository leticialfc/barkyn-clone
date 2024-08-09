import { useState } from "react";
import "./LanguageSwitcher.less";
import arrowUp from "../../../public/assets/arrow-up.svg";
import arrowDown from "../../../public/assets/arrow-down.svg";
import ptFlag from "../../../public/assets/pt-flag.png";
import itFlag from "../../../public/assets/it-flag.png";
import esFlag from "../../../public/assets/es-flag.png";
import { Language } from "../../types/types";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(Language.PT);
  const [isOpen, setisOpen] = useState(false);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setisOpen(false);
  };

  const languageData = [
    { language: Language.PT, flag: ptFlag },
    { language: Language.IT, flag: itFlag },
    { language: Language.ES, flag: esFlag },
  ];

  const dropdownClass = isOpen ? "dropdown open" : "dropdown";

  return (
    <div className="language-switcher">
      <div className="language-switcher-toggle">
        <button onClick={() => setisOpen(!isOpen)}>
          <img
            className="flag-icon"
            src={languageData.find((lang) => lang.language === language)?.flag}
          />
          {language}
          <img className="arrow-icon" src={isOpen ? arrowUp : arrowDown} />
        </button>
      </div>
      <div className={dropdownClass}>
        {languageData
          .filter((lang) => lang.language !== language)
          .map((langOption) => (
            <button
              key={langOption.language}
              onClick={() => handleLanguageChange(langOption.language)}
            >
              <img
                className="flag-icon"
                src={
                  languageData.find(
                    (lang) => lang.language === langOption.language
                  )?.flag
                }
              />
              {langOption.language}
            </button>
          ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
