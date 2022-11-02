import React from "react";

import { BsVimeo } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

import "./PortfolioVideo.scss";

import logoRender from "../../assets/RENDER.png";
import bgRender from "../../assets/bgRender.jpg";
import { GalleryVideo } from "./dataVideo";
import { Footer } from "../Footer";

export const PortfolioVideo = () => {
  return (
    <>
      <div
        className="px-12 py-12 sm:py-20 bg-cover bg-no-repeat object-cover"
        style={{ backgroundImage: `url(${bgRender})` }}
      >
        <div>
          <div>
            <img src={logoRender} alt="" className="w-60 sm:w-96" />
            <p className="text-white mt-8 text-sm leading-6 wText">
              Мы владеем практически всеми современными графическими
              программами, поэтому сможем реализовать любой замысел. Предложим
              идею, распишем сценарий и приступим к реализации крутого видео
              специально для Вас!
            </p>

            <p className="text-white mt-4 text-sm leading-6 flex ">
              <FiPhone size={18} className="my-0.5" />
              <span className=" font-medium pl-2">
                <a href="tel:+998903333366"> +998 (90) 333-33-66</a>
              </span>
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-3 sm:grid-cols-2 md:flex">
              <a href="https://forms.gle/v4p9FqJHaAAoo6Re7" target="_blank">
                <button className="font-bold text-white px-8 py-4 md:px-12 md:py-5 border border-red-600 rounded-full text-base md:text-base btn-hover hover:bg-red-600 hover:text-white">
                  Заполнить бриф
                </button>
              </a>

              <div className="flex pl-4 sm:pl-8">
                <button className="font-bold text-white p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
                  <a href="https://vimeo.com/user181182409" target="_blank">
                    <BsVimeo size={30} />
                  </a>
                </button>
                {/* <p className="text-white m-auto ml-4 sm:ml-6 cursor-pointer btn-hover hover:opacity-80">
                  <a href="">
                    <u> Посмотреть презентацию</u>
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-12 py-14">
        <div className="">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
            {GalleryVideo.map((item, index) => {
              return (
                <li key={index} className="p-0 cursor-pointer ">
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    className="w-full h-full"
                  >
                    <iframe
                      className="w-full h-full rounded-xl"
                      src={item.urlVideo}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
