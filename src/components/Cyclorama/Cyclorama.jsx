import React, { useState } from "react";
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

import { AiOutlineClose } from "react-icons/ai";

import Vs21Video from "../../assets/studioMove.mov";
import { Footer } from "../Footer";
import FormCyclorama from "./FormCyclorama";

import Img1 from "../../assets/slideStudio/slide_7.jpg";
import Img2 from "../../assets/slideStudio/slide_8.jpg";
import Img3 from "../../assets/slideStudio/slide_9.jpg";
import { HashLink } from "react-router-hash-link";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import img1 from "../../assets/equipment/image_1.jpg";
import img2 from "../../assets/equipment/image_2.jpg";
import img3 from "../../assets/equipment/image_3.jpg";
import img4 from "../../assets/equipment/image_4.jpg";
import img5 from "../../assets/equipment/image_5.jpg";
import img6 from "../../assets/equipment/image_6.jpg";
import img7 from "../../assets/equipment/image_7.jpg";
import img8 from "../../assets/equipment/image_8.jpg";
import img9 from "../../assets/equipment/image_9.jpg";

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrs] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrs(imgSrc);
    setModel(true);
  };

  return (
    <div className=" text-white">
      <video
        src={Vs21Video}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover opacity-20 fixed -z-10"
      />

      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <AiOutlineClose
          className="text-white"
          onClick={() => setModel(false)}
          size={20}
        />
      </div>

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
            <HashLink to="#formcyclorama">
              <button className="font-bold text-white px-6 py-4 md:px-12 md:py-5 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black">
                Забронировать
              </button>
            </HashLink>

            <button
              onClick={handleOpen}
              className=" ml-4 font-bold text-white px-6 py-4 sm:px-10 sm:py-5 border
           border-yellow-300 rounded-full text-sm sm:text-base  btn-hover 
           hover:bg-yellow-300 hover:text-black focus:bg-yellow-300
            focus:text-black"
            >
              Оборудование
            </button>

            {/* Оборудование  */}

            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="boxStyle">
                  <h3 className="font-bold text-yellow-300 text-xl">
                    Оборудование
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-6">
                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            Ninlite <br />
                            <span className=" text-sm font-light">
                              Входит в стоимость аренды
                            </span>
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img1}
                          alt="Ninlite"
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">Ninlite</span> <br />
                        Входит в стоимость аренды
                      </p>
                    </div>

                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            Насадка Гобо с масками
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img2}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">
                          Насадка Гобо с масками
                        </span>
                      </p>
                    </div>

                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            AD600PRO]AD400PRO <br />
                            <span className=" text-sm font-light">
                              Входит в стоимость аренды
                            </span>
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img3}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">AD600PRO]AD400PRO</span>
                        <br /> Входит в стоимость аренды
                      </p>
                    </div>

                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            SK400
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img4}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">SK400</span>
                      </p>
                    </div>

                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            SL100W <br />
                            <span className=" text-sm font-light">
                              Постоянный источник
                            </span>
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img5}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">SL100W</span> <br />
                        Постоянный источник
                      </p>
                    </div>

                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            Тубусы с фильтрами
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img6}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">Тубусы с фильтрами</span>
                      </p>
                    </div>
                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            Отражатели
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img9}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">Отражатели</span>
                      </p>
                    </div>
                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">
                            Стойки (журавль)
                          </span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img8}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">Стойки (журавль)</span>
                      </p>
                    </div>
                    <div className="column">
                      <div className="post">
                        <div className="overlay text-white text-center">
                          <span className=" text-base font-semibold">Фоны</span>
                        </div>
                        <img
                          className="rounded-xl md:w-full lg:w-full"
                          src={img7}
                          alt=""
                        />
                      </div>
                      <p className="text-white text-xs leading-5">
                        <span className=" font-medium">Фоны</span>
                      </p>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>

            {/* Оборудование */}
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-16">
              {date.map((item, index) => {
                return (
                  <div key={index.id}>
                    <img
                      src={item.img}
                      alt=""
                      className="rounded-lg cursor-pointer"
                      onClick={() => getImg(item.img)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FormCyclorama />
    </div>
  );
};

export default Cyclorama;
