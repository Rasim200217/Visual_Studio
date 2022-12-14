import React from "react";

import { StudioSlider } from "./StudioSlider";
import { motion } from "framer-motion";

import "../../scss/PhotoStudio.scss";

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

export const PhotoStudio = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 gap-0 lg:grid-cols-2 md:gap-0 text-white px-8 py-14 h-full"
      >
        <div>
          <a id="fotostudio" className="font-bold text-yellow-300 text-2xl">
            Фотостудия
          </a>
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
          <div className="mt-8">
            <button
              onClick={handleOpen}
              className="font-bold text-white px-6 py-4 sm:px-10 sm:py-5 border
           border-yellow-300 rounded-full text-sm sm:text-base  btn-hover 
           hover:bg-yellow-300 hover:text-black focus:bg-yellow-300
            focus:text-black"
            >
              Оборудование
            </button>
          </div>

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
                    <span className=" font-medium">Насадка Гобо с масками</span>
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
                      <span className=" text-base font-semibold">SK400</span>
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
        <div>
          <StudioSlider />
        </div>
      </motion.div>
    </>
  );
};
