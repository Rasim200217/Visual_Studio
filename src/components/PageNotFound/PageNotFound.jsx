import React from "react";
import { Link } from "react-router-dom";
import "../../scss/PageNotFound.scss";
import error from "../../assets/error.png";

export const PageNotFound = () => {
  return (
    <div className=" text-white text-center p-9 h-full ">
      <h2 className=" font-medium text-2xl md:text-4xl">Страница не найдена</h2>
      <img className=" w-1/2 lg:w-96 m-auto mt-14" src={error} alt="404" />
      <Link to="/">
        <button className="pulsBtn m-auto error mt-8">Вернуться</button>
      </Link>
    </div>
  );
};
