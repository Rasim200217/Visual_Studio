import React from "react";

import { Footer } from "../components/Footer";
import { Intro } from "../components/Intro";
import { OurTeam } from "../components/OurTeam";
import { PhotoStudio } from "../components/PhotoStudio";
import { Portfolio } from "../components/Portfolio";
import { StudioRental } from "../components/StudioRental";
import { TheVisualStudio } from "../components/TheVisualStudio";

import { ImageCarousel } from "./ImageCarousel";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import { BsFillPlayFill } from "react-icons/bs";

import "../scss/Header.scss";

import image1 from "../assets/slide_1.jpg";
import image2 from "../assets/slide_2.jpg";
import image3 from "../assets/slide_3.jpg";

export const Header = () => {
  return (
    <div>
      <ImageCarousel images={[image1, image2, image3]} />
      <div className="flex justify-between h-496 px-4 sm:px-6 md:px-28 items-center bg-black bg-opacity-70 absolute top-20 w-full">
        <div>
          <div>
            <p className="font-medium md:text-2xl text-white text-xl">
              Добро пожаловать
            </p>
            <h1 className="font-bold lg:text-6xl text-yellow-300 pt-4 md:text-5xl text-3xl">
              The Visual Studio 21
            </h1>
            <p className="text-white pt-4 md:text-sm leading-6 text-xs w-80 md:w-full">
              <span className="font-medium">
                Универсальная фотостудия в Ташкенте
              </span>
              <span>
                подойдёт под любые виды съёмок от съемок одежды до портретных
                съемок
              </span>
            </p>
          </div>
          <div className="mt-10 flex">
            <button className="font-bold text-white px-6 py-3 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black">
              Забронировать
            </button>
            <div className="flex">
              <button className="ml-6 sm:ml-10 font-bold text-white p-3 md:p-5 border border-white rounded-full text-base btn-hover hover:bg-white hover:text-black">
                <BsFillPlayFill size={30} />
              </button>
              <p className="text-white m-auto ml-4 cursor-pointer text-xs md:text-sm">
                Презентация студии
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:bg-white ml-3 h-16 mb-10 m-sm"></div>
          <div className="hidden lg:flex flex-col text-white">
            <FaFacebook
              className="icon mb-8 btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={25}
            />
            <FaInstagram
              className="icon mb-8 btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={25}
            />
            <FaTelegram
              className="icon btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={25}
            />
          </div>
          <div className="lg:bg-white h-16 m-sm ml-3 mt-10"></div>
        </div>
      </div>
      <PhotoStudio />
      <Portfolio />
      <TheVisualStudio />
      <Intro />
      <StudioRental />
      <OurTeam />
      <Footer />
    </div>
  );
};
