import React, { useState } from "react";
import "../../scss/StudioSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineClose } from "react-icons/ai";
import Slider from "react-slick";

import Img1 from "../../assets/slideStudio/slide_1.jpg";
import Img2 from "../../assets/slideStudio/slide_2.jpg";
import Img3 from "../../assets/slideStudio/slide_3.jpg";
import Img4 from "../../assets/slideStudio/slide_4.jpg";
import Img5 from "../../assets/slideStudio/slide_5.jpg";
import Img6 from "../../assets/slideStudio/slide_6.jpg";
import Img7 from "../../assets/slideStudio/slide_7.jpg";
import Img8 from "../../assets/slideStudio/slide_8.jpg";
import Img9 from "../../assets/slideStudio/slide_9.jpg";

const data = [
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
  {
    id: 4,
    img: Img4,
  },
  {
    id: 5,
    img: Img5,
  },
  {
    id: 6,
    img: Img6,
  },
  {
    id: 7,
    img: Img7,
  },
  {
    id: 8,
    img: Img8,
  },
  {
    id: 9,
    img: Img9,
  },
];

export const StudioSlider = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrs] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrs(imgSrc);
    setModel(true);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div>
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} onClick={() => getImg(item.img)}>
                <img
                  className=" p-3 cursor-pointer w-full h-72 rounded-lg bg-cover bg-no-repeat object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
