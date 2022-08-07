import React from "react";

import { ImageCarousel } from "./ImageCarousel";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import image1 from "../assets/slide_1.jpg";
import image2 from "../assets/slide_2.jpg";
import image3 from "../assets/slide_3.jpg";

export const Header = () => {
  return (
    <div>
      <ImageCarousel images={[image1, image2, image3]} />
      <div className="flex justify-between h-496 px-12 items-center bg-black bg-opacity-70 absolute top-20 w-full">
        <div>
          <div>
            <p className="font-medium md:text-2xl text-white text-xl">
              Добро пожаловать
            </p>
            <h1 className="text-white font-bold lg:text-6xl text-yellow-300 pt-4 md:text-5xl text-4xl">
              The Visual Studio 21
            </h1>
            <p className="text-white pt-4 md:text-sm leading-6 text-xs">
              <span className="font-medium">
                Универсальная фотостудия в Ташкенте
              </span>
              <span>
                {" "}
                подойдёт под <br /> любые виды съёмок от съемок одежды до
                портретных съемок
              </span>
            </p>
          </div>
          <button className="font-bold text-white px-12 py-5 border border-yellow-300 rounded-full text-base mt-10">
            Забронировать
          </button>
        </div>
        <div>
          <div className="lg:bg-white ml-3 h-16 mb-10 m-sm"></div>
          <div className="hidden lg:flex flex-col text-white">
            <FaFacebook className="icon mb-8" fontSize={25} />
            <FaInstagram className="icon mb-8" fontSize={25} />
            <FaTelegram className="icon" fontSize={25} />
          </div>
          <div className="lg:bg-white h-16 m-sm ml-3 mt-10"></div>
        </div>
      </div>

      {/* {Mobile Header} */}
    </div>
  );
};
