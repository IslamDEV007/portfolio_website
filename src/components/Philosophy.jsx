import React from "react";
import { useTranslation } from "react-i18next";

const Philosophy = () => {
  const { t } = useTranslation();

  return (
    <section className="max-w-[1200px] mx-auto text-white sm:grid sm:grid-cols-2">
      <article className="bg-[#FFF3E4] text-black py-10 px-2 grid gap-12 sm:grid sm:content-between">
        <div>
          <h3 className="text-2xl animate-pulse font-bold mb-4" id="About me">
            {t("About me")}
          </h3>
          <p className="text-gray-500">
            {t("helloText")}{" "}
            <span className="text-blue-500 uppercase">{t("Islomjon Isroilov")}</span>,
            {t("devDescription")}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[25px] uppercase font-bold mb-4 ">
            {t("contatcm")}
          </h2>
          <div className="flex gap-4">
            <a
              href="linkedin.com/in/islomjon-isroilov-994312221"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img
                className="w-[100px]"
                src="/images/linked.png"
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://github.com/IslamDEV007"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img
                className="w-[100px]"
                src="/images/github.png"
                alt="GitHub"
              />
            </a>
            <a
              href="mailto:isroilovislomjon1@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-bold text-black sm:text-[20px] text-[40px] flex items-center"
            >
              <img className="w-[100px]" src="/images/gmail.png" alt="Gmail" />
            </a>
            
          </div>
        </div>
      </article>
      <article>
        <img
          className="w-full h-[450px]  object-cover"
          src="/images/portfolio2.jpg"
          alt=""
        />
      </article>
    </section>
  );
};

export default Philosophy;
