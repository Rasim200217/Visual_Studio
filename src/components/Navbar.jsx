import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import Logo from "../assets/VS 21.png";
import RenderLink from "../assets/RENDER.png";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 px-12 bg-black text-white">
      <div className="flex">
        <div>
          <img src={Logo} className="h-10 my-2" />
        </div>
        <ul className="hidden lg:flex px-5">
          <li>
            <a>Главная</a>
          </li>
          <li>
            <a>Фотостудия</a>
          </li>
          <li>
            <a>Ретушь</a>
          </li>
          <li>
            <a>Портфолио</a>
          </li>
          <li>
            <a>
              <img src={RenderLink} className="h-4 mt-1" />
            </a>
          </li>
          <li>
            <a>Команда</a>
          </li>
          <li>
            <a>Где мы?</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex">
        <FiPhone size={18} className="my-0.5" />
        <a className="px-2">+998 (93) 509-42-55</a>
      </div>

      {/* Hamburger*/}
      <div onClick={handleNav} className="lg:hidden z-20">
        {nav ? (
          <AiOutlineClose className="text-white" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>
      {/* Mobile menu dropdowm*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "lg:hidden absolute left-0 top-0 w-full bg-black px-4 py-7 flex flex-col text-white z-10"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <img src={Logo} className="h-10 my-2 ml-3" />
          <li>
            <a>Главная</a>
          </li>
          <li>
            <a>Фотостудия</a>
          </li>
          <li>
            <a>Ретушь</a>
          </li>
          <li>
            <a>Портфолио</a>
          </li>
          <li>
            <a>Render</a>
          </li>
          <li>
            <a>Команда</a>
          </li>
          <li>
            <a>Где мы?</a>
          </li>
          <div className="mx-5 mt-4 border-t pt-6 border-yellow-300 border-b pb-6">
            <div className="flex justify-between mx-6">
              <FaFacebook className="icon" fontSize={30} />
              <FaInstagram className="icon" fontSize={30} />
              <FaTelegram className="icon" fontSize={30} />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
