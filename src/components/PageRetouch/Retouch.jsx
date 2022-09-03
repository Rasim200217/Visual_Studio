import React, { useState } from "react";

import logoRetouch from "../../assets/bgRetouch.jpg";
import { BeforeAfterSlide } from "./BeforeAfterSlide";

export const Retouch = () => {
  return (
    <>
      <div
        className="px-12 py-20"
        style={{ backgroundImage: `url(${logoRetouch})` }}
      >
        <div>
          <div>
            <h2 className=" text-yellow-300 font-bold text-6xl">
              Услуги по ретуши фото
            </h2>
            <p className="text-white mt-8 text-sm leading-6 wText">
              Мы предоставляем 5 пакетов ретуши фото на выбор. Они все
              перечислены ниже. Есть также специальные предложения для
              начинающих фотографов и пресеты для Lightroom, чтобы облегчить
              обработку снимков.
            </p>
            <div className="mt-10 grid grid-cols-2 md:flex">
              <button className="font-bold text-white px-6 py-3 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black">
                <a href="https://forms.gle/v4p9FqJHaAAoo6Re7" target="_blank">
                  Пакет услуг
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BeforeAfterSlide />
    </>
  );
};
