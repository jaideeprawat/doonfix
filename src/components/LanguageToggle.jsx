import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="
        border border-gray-300
        px-3 py-1
        rounded-full
        text-sm
        font-medium
        hover:bg-gray-100
        transition
      "
    >
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
};

export default LanguageToggle;
