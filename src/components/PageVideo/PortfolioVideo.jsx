import React from "react";

import { BsVimeo } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

import { motion } from "framer-motion";

import "./PortfolioVideo.scss";

import logoRender from "../../assets/RENDER.png";
import { GalleryVideo } from "./dataVideo";
import { FooterRender } from "../FooterRender";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import { Brif } from "./Brif";

export const PortfolioVideo = () => {
  return (
    <>
      <div
        id="video_portfolio"
        className="px-6 sm:px-12 md:px-12 items-center w-full"
      >
        <motion.div
          className="h-full pb-36 pt-48 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img src={logoRender} alt="" className="w-60 sm:w-96" />
          <p className="text-white mt-8 text-sm leading-6 wText">
            Мы владеем практически всеми современными графическими программами,
            поэтому сможем реализовать любой замысел. Предложим идею, распишем
            сценарий и приступим к реализации крутого видео специально для Вас!
          </p>

          <div className="mt-10">
            <button className="font-bold text-white p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
              <a
                href="https://www.instagram.com/renderquality/"
                target="_blank"
              >
                <FaInstagram size={30} />
              </a>
            </button>

            <button className="font-bold text-white ml-6 p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
              <a href="https://vimeo.com/user181182409" target="_blank">
                <BsVimeo size={30} />
              </a>
            </button>
          </div>
        </motion.div>
      </div>

      <div>
        <Brif />
      </div>
      <div className="px-12 py-12">
        <h2 className="font-bold text-yellow-300 text-2xl">
          Портфолио с видео
        </h2>
        <div className="mt-8">
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
      <FooterRender />
    </>
  );
};
