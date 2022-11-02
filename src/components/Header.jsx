import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Icons
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";

// Components
import { ImageCarousel } from "./ImageCarousel";
import { Form } from "./Form.jsx";

//Library
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Style
import "../scss/Header.scss";

// Image
import image1 from "../assets/slideStudio/slide_1.jpg";
import image2 from "../assets/slideStudio/slide_2.jpg";
import image3 from "../assets/slideStudio/slide_3.jpg";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ImageCarousel images={[image1, image2, image3]} />
      <div
        id="header"
        className="flex justify-between h-496 px-6 sm:px-12 md:px-12 items-center bg-black bg-opacity-70 absolute top-20 w-full"
      >
        <div>
          <div>
            <p className="font-medium sm:text-2xl text-white text-xl">
              Добро пожаловать
            </p>
            <h1 className="font-bold lg:text-6xl text-yellow-300 pt-4 sm:text-5xl text-3xl">
              The Visual Studio 21
            </h1>
            <p className="text-white pt-4 sm:text-base leading-5 sm:leading-6 text-sm w-62 sm:w-80 md:w-[600px]">
              Мы предоставляем для своих клиентов
              <b> Циклораму / Лофт зону / Хромакей зону</b>. С ценами вы можете
              ознакомится ниже по ссылке!
            </p>
          </div>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <BsArrowDownShort size={40} className=" text-white ml-16 mb-2" />
              <a
                href="https://telegra.ph/Aktualnye-ceny-Prajs-list-VS21ART-2022-10-06"
                target="_blank"
              >
                <button className="pulsBtn">Смотреть прайс</button>
              </a>
            </div>

            <div>
              <button
                className="pulsBtn mt-3 sm:mt-[46px] ml-[2px]"
                onClick={handleOpen}
              >
                Забронировать
              </button>
            </div>

            <Link to="/retouch">
              <button className="pulsBtn mt-3 sm:mt-[46px]">
                Услуга ретуши
              </button>
            </Link>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="formModal">
                <Form handleCloseF={handleClose} />
              </Box>
            </Modal>
          </div>
        </div>
        <div>
          <div className="lg:bg-white ml-3 h-16 mb-10 m-sm"></div>
          <div className="hidden lg:flex flex-col text-white">
            <a href="https://www.facebook.com/visualstudio21/" target="_blank">
              <FaFacebook
                className="icon mb-8 btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={25}
              />
            </a>

            <a href="https://www.instagram.com/vs21.art/" target="_blank">
              <FaInstagram
                className="icon mb-8 btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={25}
              />
            </a>
            <a href="https://t.me/vs21art" target="_blank">
              <FaTelegram
                className="icon btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={25}
              />
            </a>
          </div>
          <div className="lg:bg-white h-16 m-sm ml-3 mt-10"></div>
        </div>
      </div>
    </div>
  );
};
