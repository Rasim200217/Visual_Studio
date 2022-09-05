import React, { useState } from "react";

import logoRetouch from "../../assets/bgRetouch.jpg";
import { BeforeAfterSlide } from "./BeforeAfterSlide";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import "./Retouch.scss";
import Hasan from "../../assets/team/hasan.jpg";

import { BsCheckLg, BsPlusLg } from "react-icons/bs";
import { Footer } from "../Footer";

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
                <a href="#services">Пакет услуг</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-12">
        <BeforeAfterSlide />
      </div>

      <div id="services" className="px-12 py-20">
        <h3 className="font-bold text-yellow-300 text-xl">Пакеты услуг</h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="rounded-xl p-8 mt-6 cursor-pointer btn-hover hoverCard"
            style={{ backgroundColor: "#1D1D1D" }}
          >
            <h4 className="font-bold text-yellow-300 text-xl">Базовый</h4>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Легкая коррекция кожи лица (до 3 человек)
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Удаления эффекта красных глаз
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Устранение дефектов</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Удаление шрамов, прыщей, акне
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Разглаживание кожи лица
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Отбеливание зубов</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Цветокоррекция</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Обрезка изображения</p>
            </div>
            <div className="flex pt-4">
              <BsPlusLg size={18} className="text-red-600 rotate-45" />
              <p className=" text-sm pl-2 text-white">Ретушь студийных фото</p>
            </div>
            <div className="flex pt-4">
              <BsPlusLg size={18} className="text-red-600 rotate-45" />
              <p className=" text-sm pl-2 text-white">Ретушь фона</p>
            </div>
            <div className="flex pt-4">
              <BsPlusLg size={18} className="text-red-600 rotate-45" />
              <p className=" text-sm pl-2 text-white">Ретушь фото младенцев</p>
            </div>

            <p className="font-bold text-yellow-300 text-2xl pt-36">Цена: 3$</p>
          </div>

          {/* {"2"} */}
          <div
            className="rounded-xl p-8 mt-6 cursor-pointer btn-hover hoverCard"
            style={{ backgroundColor: "#1D1D1D" }}
          >
            <h4 className="font-bold text-yellow-300 text-xl">Про</h4>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Базовые исправления</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Профессиональная бьюти-коррекция (до 3 человек)
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Коррекция Фигуры / Ретушь
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Уменьшение веса</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Проработка фона</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Удаление растрепавшихся волос
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Небольшое растяжение однотонного фона
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Удаление морщин на лице
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Удаление маленьких объектов
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className="text-sm pl-2 text-white">
                Услуга обтравочного контура для простых объектов
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Ретушь фото младенцев</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Ретушь портретов</p>
            </div>

            <div className="flex pt-4">
              <BsPlusLg size={18} className="text-red-600 rotate-45" />
              <p className=" text-sm pl-2 text-white">Masking Images</p>
            </div>
            <p className="font-bold text-yellow-300 text-2xl pt-8">Цена: 6$</p>
          </div>

          {/* {"3"} */}
          <div
            className="rounded-xl p-8 mt-6 cursor-pointer btn-hover hoverCard"
            style={{ backgroundColor: "#1D1D1D" }}
          >
            <h4 className="font-bold text-yellow-300 text-xl">Хай-энд</h4>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Профессиональная ретушь
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Высококачественная бьюти-коррекция (до 3-х человек)
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Продвинутая ретушь глаз
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Профессиональная ретушь волос
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Высококачественная ретушь фона
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                HDR эффекты/композитинг
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Следуем стилю клиента</p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">
                Ретушь фото ювелирных изделий
              </p>
            </div>
            <div className="flex pt-4">
              <BsCheckLg size={18} className="text-yellow-300" />
              <p className=" text-sm pl-2 text-white">Ретушь фото в стиле ню</p>
            </div>
            <p className="font-bold text-yellow-300 text-2xl pt-52">
              Цена: 12$
            </p>
          </div>
        </div>
      </div>

      <div className="px-12 py-20 text-white">
        <div className="grid grid-cols-1 gap-4 lg:gap-11 sm:grid-cols-2 items-center">
          <div>
            <p className=" text-xl font-semibold">Ретушер</p>
            <h3 className=" text-yellow-300 font-bold text-4xl">Хожи Хасан</h3>
            <p className=" font-medium">3 года опыта работы</p>
            <p className=" leading-6 pt-4">
              Креативный специалист по ретуши фотографий со знанием Photoshop{" "}
              <br /> и Lightroom. Создает оптимизированные фотографии, на
              которых объекты <br /> сияют, а цвета дополняют каждый аспект
              произведения.
            </p>
            <div className="flex pt-4 justify-between w-44">
              <FaFacebook
                size={30}
                className="btn-hover hover:text-yellow-300 cursor-pointer"
              />
              <FaInstagram
                size={30}
                className="btn-hover hover:text-yellow-300 cursor-pointer"
              />
              <FaTelegram
                size={30}
                className="btn-hover hover:text-yellow-300 cursor-pointer"
              />
            </div>
          </div>
          <div className=" pt-6 sm:pt-0 ">
            <img src={Hasan} alt="" className=" rounded-xl mx-auto" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
