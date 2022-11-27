import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { VscLocation, VscMail } from "react-icons/vsc";

export const Footer = () => {
  return (
    <div
      id="location"
      className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-4 px-8 pt-12 pb-12"
    >
      <div>
        <h2 className="font-bold text-yellow-300 text-2xl md:text-xl">
          The Visual Studio 21
        </h2>
        <div className="order-2 md:order-1">
          <div className="flex justify-between w-40 pt-8 ">
            <a href="https://www.facebook.com/visualstudio21/" target="_blank">
              <FaFacebook
                className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={30}
              />
            </a>

            <a href="https://www.instagram.com/vs21.art/" target="_blank">
              <FaInstagram
                className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={30}
              />
            </a>

            <a href="https://t.me/vs21art" target="_blank">
              <FaTelegram
                className="icon mb-8 text-white btn-hover hover:text-yellow-300 cursor-pointer"
                fontSize={30}
              />
            </a>
          </div>
          <p className="text-white">
            Copyright © 2019 - 2022 zxdk All Right Reserved.
          </p>
        </div>
      </div>

      <div className=" text-white pt-8 md:pt-0 order-1 md:order-2">
        <a href="tel:+998903333366">
          <div className="flex cursor-pointer">
            <BsTelephone size={20} />
            <p className=" text-base pl-2"> +998 (90) 333-33-66</p>
          </div>
        </a>
        <p>
          <div className="flex pt-4 cursor-pointer">
            <VscMail size={25} />
            <p className=" text-base pl-2">vusialstudio21@gmail.com</p>
          </div>
        </p>

        <div className="flex pt-4 cursor-pointer">
          <VscLocation size={25} />
          <a
            href="https://www.google.com/maps/place/The+Visual+Studio+21+-+%D0%9A%D0%B8%D0%BD%D0%BE%D0%BF%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BE%D0%BD,+%D0%A4%D0%BE%D1%82%D0%BE%D1%81%D1%82%D1%83%D0%B4%D0%B8%D1%8F./@41.28231,69.193391,17z/data=!4m5!3m4!1s0x0:0x595b9c7b28d6e43b!8m2!3d41.2823098!4d69.1933906?hl=en-US"
            target="_blank"
            className=" text-base pl-2 w-80"
            rel="noreferrer"
          >
            Ташкент. Чиланзарский р-н. Фархадская ярмарка, 7 блок - 1 этаж
          </a>
        </div>
      </div>

      <div className=" text-white pt-8 md:pt-0 order-3 md:order-3">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              title="The Visual Studio 21"
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
