import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../scss/Portfolio.scss";
import { AiOutlineClose } from "react-icons/ai";
import { GiMagnifyingGlass } from "react-icons/gi";

import Img1 from "../assets/img/img3.jpg";
import Img2 from "../assets/img/item2.jpg";
import Img3 from "../assets/img/img10.jpg";
import Img4 from "../assets/img/img9.jpg";

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
  {
    id: 3,
    urlVideo:
      "https://player.vimeo.com/video/749182800?h=733d16fba2&portrait=0",
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
      <div className="text-white px-6 pt-20 h-auto pb-20">
        <div>
          <h2 className="font-bold text-yellow-300 text-2xl">Портфолио</h2>
          <p className="pt-6 text-lg">Фотографии</p>
        </div>

        {/* фотографии */}
        <div className="flex-1 pt-4 relative top-0">
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
                  <div
                    style={{ padding: "56.25% 0 0 0", position: "relative" }}
                    className="w-full h-full"
                  >
                    <iframe
                      src={item.urlVideo}
                      className="w-full h-full rounded-xl"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      frameborder="0"
                      allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </li>
              );
            })}
            <div className="cursor-pointer transition-allease-in relative">
              <Link to="/video">
                <img
                  className=" mx-auto w-72 sm:w-full rounded-lg shadow-xl bg-cover bg-no-repeat object-cover opacity-60"
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
