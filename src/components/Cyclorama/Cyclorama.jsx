import React from "react";
import {
  BsTextareaResize,
  BsFillCollectionFill,
  BsFillMapFill,
} from "react-icons/bs";

import {
  FaWifi,
  FaShower,
  FaThermometerHalf,
  FaUmbrellaBeach,
  FaBolt,
} from "react-icons/fa";

import Vs21Video from "../../assets/studioMove.mov";

import Img1 from "../../assets/slideStudio/slide_7.jpg";
import Img2 from "../../assets/slideStudio/slide_8.jpg";
import Img3 from "../../assets/slideStudio/slide_9.jpg";

const date = [
  {
    id: 1,
    img: Img1,
  },
  {
    id: 2,
    img: Img2,
  },
  {
    id: 3,
    img: Img3,
  },
];

const Cyclorama = () => {
  return (
    <div className=" text-white">
      <video
        src={Vs21Video}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover opacity-20 fixed -z-10"
      />
      <div className="px-12 py-20">
        <div>
          <h2 className=" text-yellow-300 font-bold text-3xl sm:text-6xl">
            Белая циклорама
          </h2>
          <p className="text-white mt-4 sm:mt-8 text-sm leading-6 wText">
            Зал с большой циклорамой 5х5м с обилием реквизита и аксессуаров для
            съемки. Зал идеально подходит для съемки лукбуков и минималистичных
            имиджевых фотосессий, или видеосъемок.
          </p>

          <div className=" grid grid-cols-2 md:grid-cols-4 mt-7 gap-6">
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <BsTextareaResize size={30} />
              </div>
              <p className="inline-block font-bold text-xs md:text-sm w-40 md:w-48 uppercase  text-center pt-3">
                Размер циклорамы 5х5м
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <BsFillCollectionFill size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Система цветных фонов из 5 штук
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <FaThermometerHalf size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Теплые полы
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <FaShower size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Душ
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <BsFillMapFill size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Гримерка/Примерочная
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <FaBolt size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                220/380В 32А
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <FaWifi size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Wi-Fi 100 Mb/s
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className=" bg-[#1B1A20] p-4 rounded-xl">
                <FaUmbrellaBeach size={30} />
              </div>
              <p className="inline-block font-bold uppercase text-xs md:text-sm w-40 md:w-48 text-center pt-3">
                Просторная зона отдыха
              </p>
            </div>
          </div>

          <div className="mt-10">
            <a href="#services">
              <button className="font-bold text-white px-6 py-4 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black">
                Забронировать
              </button>
            </a>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3 mt-6">
              {date.map((item, index) => {
                return (
                  <div key={index.id}>
                    <img src={item.img} alt="" className="rounded-lg" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyclorama;
