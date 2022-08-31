import React from "react";

import { BsVimeo } from "react-icons/bs";

import "./PortfolioVideo.scss";

import logoRender from "../../assets/RENDER.png";
import bgRender from "../../assets/bgRender.jpg";

export const PortfolioVideo = () => {
  return (
    <>
      <div
        className="px-12 py-20"
        style={{ backgroundImage: `url(${bgRender})` }}
      >
        <div>
          <div>
            <img src={logoRender} alt="" className=" w-96" />
            <p
              className="text-white mt-8 text-sm leading-6"
              style={{ width: "600px" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="mt-10 flex">
              <button className="font-bold text-white px-8 py-3 md:px-12 md:py-5 border border-red-600 rounded-full text-sm md:text-base btn-hover hover:bg-red-600 hover:text-white">
                <a href="https://forms.gle/v4p9FqJHaAAoo6Re7" target="_blank">
                  Заполнить бриф
                </a>
              </button>
              <div className="flex">
                <button className="ml-6 font-bold text-white p-3 md:p-5 border border-red-600 rounded-full text-base btn-hover hover:bg-red-600 hover:text-white">
                  <a href="https://vimeo.com/user181182409" target="_blank">
                    <BsVimeo size={30} />
                  </a>
                </button>
                <p className="text-white m-auto ml-6 cursor-pointer btn-hover hover:opacity-80">
                  <a href="">
                    <u> Посмотреть презентацию</u>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
