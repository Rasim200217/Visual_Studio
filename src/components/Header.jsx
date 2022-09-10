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

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { BsFillPlayFill } from "react-icons/bs";

import "../scss/Header.scss";

import image1 from "../assets/slide_1.jpg";
import image2 from "../assets/slide_2.jpg";
import image3 from "../assets/slide_3.jpg";
import { Form } from "./Form";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ImageCarousel images={[image1, image2, image3]} />
      <div className="flex justify-between h-496 px-6 sm:px-12 md:px-28 items-center bg-black bg-opacity-70 absolute top-20 w-full">
        <div>
          <div>
            <p className="font-medium sm:text-2xl text-white text-xl">
              Добро пожаловать
            </p>
            <h1 className="font-bold lg:text-6xl text-yellow-300 pt-4 sm:text-5xl text-3xl">
              The Visual Studio 21
            </h1>
            <p className="text-white pt-4 sm:text-sm leading-5 sm:leading-6 text-sm w-80 md:w-96">
              <span className="font-medium">
                Универсальная фотостудия в Ташкенте
              </span>
              <span>
                {""} подойдёт под любые виды съёмок от съемок одежды до
                портретных съемок
              </span>
            </p>
          </div>
          <div className="mt-10 flex">
            <Button onClick={handleOpen}>
              <button className="font-bold text-white px-6 py-4 md:px-12 md:py-6 border border-yellow-300 rounded-full text-sm md:text-base btn-hover hover:bg-yellow-300 hover:text-black focus:bg-yellow-300 focus:text-black">
                Забронировать
              </button>
            </Button>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="formModal">
                <Form />
              </Box>
            </Modal>

            <button className="ml-4 sm:ml-8 font-bold text-white p-4 md:p-6 border border-white rounded-full text-base btn-hover hover:bg-white hover:text-black">
              <BsFillPlayFill size={30} />
            </button>
            <p className="text-white m-auto ml-4 cursor-pointer text-xs md:text-sm">
              Презентация студии
            </p>
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
