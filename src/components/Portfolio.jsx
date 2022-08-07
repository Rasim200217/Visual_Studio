import React from "react";
import { useState } from "react";

import "../scss/Portfolio.scss";
import { AiOutlineClose } from "react-icons/ai";

import Img1 from "../assets/img/img1.jpg";
import Img2 from "../assets/img/img2.jpg";
import Img3 from "../assets/img/img3.jpg";
import Img4 from "../assets/img/img4.jpg";

const data = [
  { id: 1, imgSrc: Img1 },
  { id: 2, imgSrc: Img2 },
  { id: 3, imgSrc: Img3 },
  { id: 4, imgSrc: Img4 },
];

const urlVideo = [
  { url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0" },
  { url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0" },
  { url: "https://player.vimeo.com/video/732100843?h=3bf74103b7&title=0" },
  { url: "https://player.vimeo.com/video/732180675?h=db862d66aa&title=0" },
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
      <div className="text-white px-12 pt-20 secondaryColor h-auto pb-20">
        <div>
          <h2 className="font-bold text-yellow-300 text-2xl">Портфолио</h2>
          <p className="pt-6">Фотографии</p>
        </div>

        {/* фотографии */}
        <div className="flex-1 pt-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {data.map((item, index) => {
              return (
                <li key={index} className="p-0 cursor-pointer">
                  <div
                    className="h-full transition-allease-in hover:opacity-80 relative"
                    onClick={() => getImg(item.imgSrc)}
                  >
                    <img
                      className="w-full h-72 rounded-lg shadow-xl bg-cover bg-no-repeat object-cover"
                      src={item.imgSrc}
                      alt=""
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Видео */}
        <p className="pt-6">Видео</p>
        <div className="flex-1 pt-4">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {urlVideo.map((item, index) => {
              return (
                <li key={index} className="p-0 cursor-pointer">
                  <iframe
                    className="w-full h-full"
                    src={item.url}
                    frameborder="0"
                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
