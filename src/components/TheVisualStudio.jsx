import React from "react";

import Img1 from "../assets/benefits/gps.png";
import Img2 from "../assets/benefits/oplata.png";
import Img3 from "../assets/benefits/wifi.png";
import Img4 from "../assets/benefits/light.png";
import Img5 from "../assets/benefits/car.png";
import Img6 from "../assets/benefits/bg.png";

export const TheVisualStudio = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 md:gap-8 h-full bg-black text-white px-12 py-20">
        <div>
          <h2 className="font-bold text-yellow-300 text-2xl">Фотостудия</h2>
          <p className="pt-6 leading-6 max-w-2xl">
            Уютная камерная фотостудия в центре города Ташкент. Единое съёмочное
            пространство, разделённое фактурными зонами в стиле Loft для
            реализации любых идей и задумок.
          </p>
          <br />
          <p className="leading-6 max-w-2xl">
            Естественный и студийный свет, большие окна, выходящие на восток и
            запад. Фактурные стены, передвижные фоны, деревянные полы и большой
            выбор разноообразных фотофонов.
          </p>
          <br />
          <p className="leading-6 max-w-2xl">
            Мы постарались создать атмосферную площадку для работы с
            использованием натуральных материалов и не прибегая к имитации.
          </p>

          <button
            className="font-bold text-white px-10 py-5 border
           border-yellow-300 rounded-full text-base mt-10 btn-hover 
           hover:bg-yellow-300 hover:text-black focus:bg-yellow-300
            focus:text-black"
          >
            Забронировать
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4 mt-14">
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img1} alt="gps" />
            <p className="p-3 text-center">Нас легко найти</p>
          </div>
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img2} alt="money" />
            <p className="p-3 text-center">Форма оплаты любая</p>
          </div>
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img3} alt="wifi" />
            <p className="p-3 text-center">Wi Fi</p>
          </div>
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img4} alt="light" />
            <p className="p-3 text-center">Различные источники света</p>
          </div>
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img5} alt="car" />
            <p className="p-3 text-center">Наличие парковки</p>
          </div>
          <div className="cursor-pointer hover:text-yellow-300 btn-hover">
            <img className="block mx-auto" src={Img6} alt="bg" />
            <p className="p-3 text-center">Ассортимент фонов</p>
          </div>
        </div>
      </div>
    </>
  );
};
