import React from "react";
import "../scss/StudioSlider.scss";

import Img1 from "../assets/slide_1.jpg";
import Img2 from "../assets/slide_2.jpg";
import Img3 from "../assets/slide_3.jpg";

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
];

export const StudioSlider = () => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-4">
      {data.map((item, index) => {
        return (
          <div key={index}>
            <img
              className="cursor-pointer w-full h-72 rounded-lg bg-cover bg-no-repeat object-cover"
              src={item.img}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};
