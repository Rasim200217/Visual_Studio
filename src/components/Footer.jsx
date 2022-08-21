import React from "react";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="grid grid-cols-2 px-12 secondaryColor pt-12 pb-12">
      <div className="">
        <h2 className="font-bold text-yellow-300 text-2xl">
          The Visual Studio 21
        </h2>
        <div className="flex justify-between w-40 pt-8">
          <FaFacebook className="icon mb-8 text-white" fontSize={25} />
          <FaInstagram className="icon mb-8 text-white" fontSize={25} />
          <FaTelegram className="icon mb-8 text-white" fontSize={25} />
        </div>
        <p className="text-white">
          Copyright © 2019 - 2022 zxdk All Right Reserved.
        </p>
      </div>
      <div className=" text-white">awfafw</div>
    </div>
  );
};
