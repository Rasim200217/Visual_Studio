import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { VscMail, VscLocation } from "react-icons/vsc";

export const Footer = () => {
  return (
    <div
      id="location"
      className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 px-12 bg-black pt-12 pb-12"
    >
      <div>
        <h2 className="font-bold text-yellow-300 text-2xl md:text-xl">
          The Visual Studio 21
        </h2>
        <div className="order-2 md:order-1">
          <div className="flex justify-between w-40 pt-8 ">
            <FaFacebook
              className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={30}
            />
            <FaInstagram
              className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={30}
            />
            <FaTelegram
              className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
              fontSize={30}
            />
          </div>
          <p className="text-white">
            Copyright © 2019 - 2022 zxdk All Right Reserved.
          </p>
        </div>
      </div>

      <div className=" text-white pt-8 md:pt-0 order-1 md:order-2">
        <div className="flex cursor-pointer">
          <BsTelephone size={20} />
          <p className=" text-base pl-2">+998 (90) 348-71-81</p>
        </div>
        <div className="flex pt-4 cursor-pointer">
          <VscMail size={25} />
          <p className=" text-base pl-2">vusialstudio21@gmail.com</p>
        </div>
        <div className="flex pt-4 cursor-pointer">
          <VscLocation size={25} />
          <p className=" text-base pl-2 w-80">
            Ташкент. Чиланзарский р-н. Фархадская ярмарка, 7 блок - 1 этаж
          </p>
        </div>
      </div>

      <div className=" text-white pt-8 md:pt-0 order-3 md:order-3">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              className="rounded-xl	"
              width="100%"
              height="204px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=vs%2021&t=&z=17&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
