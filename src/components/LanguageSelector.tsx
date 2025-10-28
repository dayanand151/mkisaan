import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="absolute top-6 right-6">
      <select
        defaultValue={i18n.language || "en"}
        onChange={(e) => changeLanguage(e.target.value)}
        className="bg-white/90 text-sm px-3 py-1 rounded-md border border-gray-200 shadow-sm"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
};

export default LanguageSelector;