import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../components/LanguageSelector";
import Button from "../components/Button";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h1 className="text-5xl font-bold mb-6">{t("welcome")}</h1>
        <LanguageSelector />
        <p className="text-lg mb-8">{t("subtitle")}</p>

        <div className="flex gap-4 justify-center">
          <Button label={t("login")} />
          <Button label={t("signup")} />
        </div>
      </div>
    </div>
  );
};

export default Home;