import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../scss/Portfolio.scss";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { GiMagnifyingGlass } from "react-icons/gi";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
import Img4 from "../assets/img/img4.jpg";

import imgVideo1 from "../assets/videoImg_1.png";
import imgVideo2 from "../assets/videoImg_2.png";

import { Gallery } from "./PagePortfolio/dataGallery";
import { GalleryVideo } from "./PageVideo/dataVideo";

const data = [
  { id: 1, imgSrc: Img1 },
  { id: 2, imgSrc: Img2 },
  { id: 3, imgSrc: Img3 },
];

const urlVideo = [
  {
    id: 1,
    urlVideo: "https://player.vimeo.com/video/739973521?h=6de078d33a&title=0",
    imgSrc: imgVideo1,
  },
  {
    id: 2,
    urlVideo: "https://player.vimeo.com/video/739444043?h=34f130324e&title=0",
    imgSrc: imgVideo2,
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
                  <div key={index} className="column">
                    <div className="post" onClick={() => getImg(item.imgSrc)}>
                      <div className="overlay">
                        <GiMagnifyingGlass size={50} className=" text-white" />
                      </div>
                      <img
                        className="rounded-xl cursor-pointer"
                        src={item.imgSrc}
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              );
            })}
            <div className="bg-black  cursor-pointer transition-allease-in relative ">
              <Link className=" active:text-yellow-300" to="/portfolio">
                <img
                  className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover opacity-60"
                  src={Img4}
                  alt=""
                />
                <p className="text-pos">+{Gallery.length}</p>
              </Link>
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
                  <iframe
                    src={item.urlVideo}
                    className="w-full h-full rounded-lg"
                    frameborder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  {/* <Button onClick={handleOpen}>
                    <div className="h-full transition-allease-in hover:opacity-80 relative btn-hover">
                      <img
                        className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover relative bg-black opacity-60"
                        src={item.imgSrc}
                        alt=""
                      />
                      <BsFillPlayFill
                        size={80}
                        className="justify-center items-center mx-auto my-auto text-pos"
                      />
                    </div>
                  </Button> */}
                  {/* <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box className="modalVideo">
                      <iframe
                        src={item.urlVideo}
                        className="w-full h-full"
                        frameborder="0"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                      <AiOutlineClose
                        className="text-white absolute right-0 top-52 cursor-pointer lg:top-40 sm:top-56"
                        onClick={handleClose}
                        size={20}
                      />
                    </Box>
                  </Modal> */}
                </li>
              );
            })}
            <div className=" cursor-pointer transition-allease-in relative ">
              <Link to="/video">
                <img
                  className="w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover opacity-60"
                  src={imgVideo2}
                  alt=""
                />
                <p className="text-pos">+{GalleryVideo.length}</p>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};
