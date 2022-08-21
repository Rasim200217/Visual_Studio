import React from "react";
import { useState } from "react";

import "../scss/Portfolio.scss";
import { AiOutlineClose } from "react-icons/ai";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
import Img4 from "../assets/img/img4.jpg";

const data = [
  { id: 1, imgSrc: Img1 },
  { id: 2, imgSrc: Img2 },
  { id: 3, imgSrc: Img3 },
];

const urlVideo = [
  {
    url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0",
    imgSrc: Img1,
  },
  {
    url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0",
    imgSrc: Img2,
  },
  {
    url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0",
    imgSrc: Img3,
  },
];

export const Portfolio = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrs] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrs(imgSrc);
    setModel(true);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <AiOutlineClose
          className="text-white"
          onClick={() => setModel(false)}
          size={20}
        />
      </div>
      <div className="text-white px-12 pt-20 secondaryColor h-auto pb-20 ">
        <div>
          <h2 className="font-bold text-yellow-300 text-2xl">Портфолио</h2>
          <p className="pt-6 text-lg">Фотографии</p>
        </div>

        {/* фотографии */}
        <div className="flex-1 pt-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {data.map((item, index) => {
              return (
                <li key={index} className="p-0 cursor-pointer">
                  <div
                    className="h-full transition-allease-in hover:opacity-80 relative"
                    onClick={() => getImg(item.imgSrc)}
                  >
                    <img
                      className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover"
                      src={item.imgSrc}
                      alt=""
                    />
                  </div>
                </li>
              );
            })}
            <div className="bg-black  cursor-pointer transition-allease-in relative ">
              <img
                className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover opacity-60"
                src={Img4}
                alt=""
              />
              <p className="text-pos">+30</p>
            </div>
          </ul>
        </div>

        {/* Видео */}
        <p className="pt-6 text-lg">Видео</p>
        <div className="flex-1 pt-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {urlVideo.map((item, index) => {
              return (
                <li key={index} className="p-0 cursor-pointer">
                  <Button onClick={handleOpen}>
                    <div className="h-full transition-allease-in hover:opacity-80 relative ">
                      <img
                        className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </Button>

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className="modalVideo">
                      <AiOutlineClose
                        className="text-white absolute right-0 top-52 cursor-pointer lg:top-40 sm:top-56"
                        onClick={handleClose}
                        size={20}
                      />
                      <iframe
                        className="w-full h-full"
                        src={item.url}
                        frameborder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Box>
                  </Modal>
                </li>
              );
            })}
            <div className="bg-black cursor-pointer transition-allease-in relative ">
              <Button>
                <img
                  className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover opacity-60"
                  src={Img4}
                  alt=""
                />
                <p className="text-pos">+30</p>
              </Button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
