import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import image1 from "../assets/slide_1.jpg";
import image2 from "../assets/slide_2.jpg";
import image3 from "../assets/slide_3.jpg";
import { StudioSlider } from "./StudioSlider";

export const PhotoStudio = () => {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 h-full secondaryColor text-white px-12 pt-20">
      <div>
        <h2 className="font-bold text-yellow-300 text-2xl">Фотостудия</h2>
        <p className="pt-6 relative leading-6">
          Наша студия универсальна и подойдёт
          <br /> под любые виды съёмок:
          <p className="leading-6 mt-2">
            • Съёмки коллекций одежды/обуви
            <br /> • Семейные съёмки
            <br /> • Видеографам
            <br /> • Предметные съемки
          </p>
          <p className="mt-2">Огромный потенциал студии в ваших руках!</p>
        </p>
        <button className="font-bold text-white px-10 py-5 border border-yellow-300 rounded-full text-base mt-10">
          Оборудование
        </button>
      </div>
      <div>
        <StudioSlider />
      </div>
    </div>
  );
};
