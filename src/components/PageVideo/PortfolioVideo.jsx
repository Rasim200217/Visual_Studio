import React from "react";

import { BsVimeo, BsCameraVideoFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

import { motion } from "framer-motion";

import "./PortfolioVideo.scss";

import logoRender from "../../assets/RENDER.png";
import { GalleryVideo } from "./dataVideo";
import { FooterRender } from "../FooterRender";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import { Brif } from "./Brif";

import { DateCompany } from "./DateCompany";
import ProccesCreate from "./ProccesCreate";
import BgVideo from "../../assets/bgVideo.mp4";

export const PortfolioVideo = () => {
  return (
    <>
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover opacity-20 fixed -z-10"
      />
      <div className="flex justify-between">
        <div
          id="video_portfolio"
          className="px-6 h-screen sm:px-12 md:px-12 items-center w-full"
        >
          <motion.div
            className="h-full pt-48 flex flex-col justify-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <img src={logoRender} alt="" className="w-60 sm:w-96" />
            <p className="text-white mt-8 text-sm leading-6 wText">
              В <span className=" font-medium">Render production</span> над
              видеоконтентом трудится целая команда, в которую входят
              маркетологи, сценаристы, режиссеры, операторы, художники по свету,
              звукорежиссер, монтажеры и профессионалы по компьютерной графике
            </p>

            <div className="mt-10">
              {/* <button className="font-bold text-white p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
                <a
                  href="https://www.instagram.com/renderquality/"
                  target="_blank"
                >
                  <FaInstagram size={30} />
                </a>
              </button> */}

              {/* <button className="font-bold text-white ml-6 p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
                <a href="https://vimeo.com/user181182409" target="_blank">
                  <BsVimeo size={30} />
                </a>
              </button> */}

              <button className="font-bold text-white p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
                <a href="https://vimeo.com/763387991" target="_blank">
                  Showreel
                </a>
              </button>
            </div>

            {/* Компаниия */}
            <div>
              <ul className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center absolute bottom-20 md:bottom-20">
                <h3 className=" text-base md:text-lg text-white uppercase font-bold border-b-[3px] border-red-600 w-28 pb-1">
                  Нам доверяют
                </h3>
                {DateCompany.map((item, index) => {
                  return (
                    <li key={index}>
                      <img
                        src={item.urlImg}
                        alt=""
                        className=" w-24 sm:w-32 md:w-full lg:w-52"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className=" px-12 pt-40">
          <div className="lg:bg-white ml-3 h-16 mb-10 m-sm"></div>
          <div className="hidden lg:flex flex-col text-white">
            {/* <a
              href="https://www.facebook.com/visualstudio21/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                className="icon mb-8 btn-hover hover:text-red-600 cursor-pointer"
                fontSize={25}
              />
            </a> */}

            <a href="https://www.instagram.com/renderquality/" target="_blank">
              <FaInstagram
                className="icon mb-8 btn-hover hover:text-red-600 cursor-pointer"
                fontSize={25}
              />
            </a>
            <a href="https://vimeo.com/user181182409" target="_blank">
              <BsVimeo
                size={25}
                className="icon btn-hover hover:text-red-600 cursor-pointer"
              />
            </a>
          </div>
          <div className="lg:bg-white h-16 m-sm ml-3 mt-10"></div>
        </div>
      </div>

      <div>
        <ProccesCreate />
      </div>

      <div>
        <Brif />
      </div>

      <div className="px-12 py-12">
        <h2 className="font-bold text-red-600 text-2xl">Наши работы</h2>
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
