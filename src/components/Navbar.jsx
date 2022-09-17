import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

import Logo from "../assets/VS 21.png";
import RenderLink from "../assets/RENDER.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-20 bg-black text-white px-12">
      <div className="flex">
        <div>
          <Link to="/">
            <img src={Logo} className="h-10 my-2" />
          </Link>
        </div>
        <ul className="hidden lg:flex px-5">
          <li>
            <Link className=" active:text-yellow-300" to="/">
              Главная
            </Link>
          </li>
          <li>
            <HashLink to="/#fotostudio">Фотостудия</HashLink>
          </li>
          <li>
            <Link to="/retouch">Ретушь</Link>
          </li>
          <li>
            <Link className=" active:text-yellow-300" to="/portfolio">
              Портфолио
            </Link>
          </li>
          <li>
            <Link to="/video">
              <img src={RenderLink} className="h-4 mt-1" />
            </Link>
          </li>
          <li>
            <HashLink to="/#team">Команда</HashLink>
          </li>
          <li>
            <a href="#location">Где мы?</a>
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex hover:text-yellow-300 btn-hover">
        <FiPhone size={18} className="my-0.5" />
        <a className="px-2" href="tel:+998935094255">
          +998 (93) 509-42-55
        </a>
      </div>

      {/* Hamburger*/}
      <div onClick={handleNav} className="lg:hidden z-20">
        {nav ? (
          <AiOutlineClose className="text-white cursor-pointer" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} className=" cursor-pointer" />
        )}
      </div>
      {/* Mobile menu dropdowm*/}
      <div
        onClick={handleNav}
        className={
          nav
            ? "lg:hidden absolute left-0 top-0 w-full bg-black px-9 py-5 flex flex-col text-white z-10"
            : "absolute left-[-100%]"
        }
      >
        <ul className="">
          <img src={Logo} className="h-10 ml-3" />
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <HashLink to="/#fotostudio">Фотостудия</HashLink>
          </li>
          <li>
            <Link to="/retouch">Ретушь</Link>
          </li>
          <li>
            <Link to="/portfolio">Портфолио</Link>
          </li>
          <li>
            <Link to="/video">
              <img src={RenderLink} className="h-4 mt-1" />
            </Link>
          </li>
          <li>
            <HashLink to="/#team">Команда</HashLink>
          </li>
          <li>
            <a href="#location">Где мы?</a>
          </li>
          <li className="flex">
            <FiPhone size={18} className="my-0.5" />
            <a className="px-2" href="tel:+998935094255">
              +998 (93) 509-42-55
            </a>
          </li>
          <div className="mx-4 mt-4 border-t pt-6 border-yellow-300 border-b pb-6">
            <div className="flex justify-between mx-6">
              <FaFacebook
                className="icon cursor-pointer hover:text-yellow-300 btn-hover"
                fontSize={30}
              />
              <FaInstagram
                className="icon cursor-pointer hover:text-yellow-300 btn-hover"
                fontSize={30}
              />
              <FaTelegram
                className="icon cursor-pointer hover:text-yellow-300 btn-hover"
                fontSize={30}
              />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
