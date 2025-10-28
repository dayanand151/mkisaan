import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import LanguageSelector from "../components/LanguageSelector";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/mkisaan.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20"></div>

      <LanguageSelector />

      <div className="relative z-10 max-w-4xl text-center px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-10 shadow-2xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-900 mb-4">
            {t("welcome")}
          </h1>
          <p className="text-md md:text-lg text-emerald-800 mb-8">
            {t("subtitle")}
          </p>

          <div className="flex items-center justify-center gap-6">
            <Button label={t("login")} variant="primary" onClick={() => alert("Login clicked")} />
            <Button label={t("signup")} variant="outline" onClick={() => alert("Signup clicked")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;