import React from "react";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation();

  return (
    <section className="text-white py-12 px-2 max-w-[1200px] mx-auto">
      <div>
        <h3
          className="uppercase text-sm font-semibold text-gray-400"
          id="Work Experience"
        >
          {t("WorkExperience")}
        </h3>

        <h2 className="text-3xl font-bold font-Bebas hover:text-lime-400 cursor-pointer mt-2">
          {t("MainProjects")}
        </h2>
      </div>

      <section class="grid grid-cols-1 items-center md:grid-cols-2 xl:grid-cols-3 mx-auto gap-[20px]  text-[22px] sm:text-[16px] mt-6 font-Bebas ">
        <article className="group h-[400px] w-[100%]  mx-auto sm:h-[400px] sm:w-[400px] sm:mt-4 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto rounded-[18px] shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/Comfy_store.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center  h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4  sm:py-4  py-0 ">
                {t("E-commerce")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project1")}</p>
              <p className=" text-xl sm:text-[25px]  sm:py-4">
                {t("project1text")}
              </p>
              <a
                href="https://ecommerce-react-project01.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400  sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon1")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mx-auto  mt-4 sm:h-[400px] sm:w-[400px] sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/Jobster.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  flex flex-col justify-center items-center h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-xl sm:py-1 ">
                {t("Jobster")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project2")}</p>
              <p className=" text-xl  sm:text-[25px] sm:py-8">
                {t("project2text")}
              </p>
              <a
                href="https://jobster-job-search.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="   text-gray-400 mt-1  sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon2")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto sm:h-[400px] sm:w-[400px] sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/HackerNews.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full flex flex-col justify-center items-center rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-xl sm:py-4  ">
                {t("HackerNews")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project3")}</p>
              <p className=" text-xl sm:text-[25px] sm:py-4">
                {t("project3text")}
              </p>
              <a
                href="https://hacker-news-api-react-project.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-lime-500"
              >
                {t("clickon3")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full  rounded-xl object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/cocktail_API.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  flex flex-col justify-center items-center  h-full rounded-xl bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4 ">
                {t("Cocktails")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project4")}</p>
              <p className="text-xl sm:text-[25px] sm:py-8">
                {t("project4text")}
              </p>
              <a
                href="https://findcocktail-api.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500"
              >
                {t("clickon4")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]  border-[#FFF3E4]  border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-full   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/backroads.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full rounded-xl flex flex-col justify-center items-center bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4  ">
                {" "}
                {t("Backroads")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project5")}</p>
              <p className="text-xl sm:text-[25px] sm:py-4">
                {t("project5text")}
              </p>
              <a
                href="https://backroads-react-app.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl hover:text-lime-500"
              >
                {t("clickon5")}
              </a>
            </div>
          </div>
        </article>

        <article className="group h-[400px] w-[100%] mt-4 mx-auto  sm:h-[400px] sm:w-[400px] sm:mt-2 sm:p-2  px-6 [perspective:1000px]">
          <div
            className="relative object-cover h-full w-full mx-auto  rounded-[18px]  shadow-xl translation-all duration-500
               [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)] border-[#FFF3E4]   border-[4px]"
          >
            <div className="absolute  inset-0">
              <img
                className="h-full w-50%   rounded-xl  object-cover shadow-xl  text-center
                   text-slate-200 "
                src="/images/QuizApp.png"
                alt=""
              />
            </div>

            {/* parte posterior card*/}
            <div
              className="absolute inset-0  h-full flex flex-col justify-center items-center rounded-xl  bg-black/80 px-12
                 text-center bg-[#FFF3E4]  [transform:rotatey(180deg)] [backface-visibility:hidden]"
            >
              <h1 className="text-xl pt-4 sm:text-2xl sm:py-4   ">
                {t("QuizApp")}
              </h1>
              <p class="text-xl sm:text-2xl text-lime-400">{t("project6")}</p>
              <p className="text-xl sm:text-[25px] sm:py-10">
                {t("project6text")}
              </p>
              <a
                href="https://quizapp-react-project.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-1 items  text-gray-400 sm:text-[25px] text-xl  hover:text-lime-500 "
              >
                {t("clickon6")}
              </a>
            </div>
          </div>
        </article>
       
      </section>
      <article>
        <img src="" alt="" />
      </article>
    </section>
  );
};

export default Work;
