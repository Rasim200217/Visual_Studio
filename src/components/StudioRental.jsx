import React from "react";
import studioImg from "../assets/studio.png";

export const StudioRental = () => {
  return (
    <div className="secondaryColor grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="order-2 lg:order-1">
        <img
          className="bg-cover bg-no-repeat object-cover h-96 w-full"
          src={studioImg}
          alt="studio"
        />
      </div>
      <div className="px-12 md:px-28 pt-8 order-1 lg:order-2">
        <h2 className="font-bold text-yellow-300 text-2xl">
          Аренда фотостудии
        </h2>
        <p className=" text-white pt-6 leading-6">
          Уютная камерная фотостудия в центре города Ташкент. Единое съёмочное
          пространство, разделённое фактурными зонами в стиле Loft для
          реализации любых идей и задумок.
        </p>
        <div className="grid grid-cols-2 gap-4 text-white pt-6">
          <div>
            <p className=" text-xs lg:text-sm">Аренда за студийный час</p>
            <p>
              <span className=" font-bold text-xl lg:text-2xl">150 000</span>{" "}
              сум
            </p>
          </div>
          <div>
            <p className="text-xs lg:text-sm">Дополнительный свет</p>
            <p>
              <span className=" font-bold text-xl lg:text-2xl">+45 000</span>{" "}
              сум
            </p>
          </div>
        </div>
        <button
          className="font-bold text-white px-10 py-5 border
           border-yellow-300 rounded-full text-base mt-8 btn-hover 
           hover:bg-yellow-300 hover:text-black focus:bg-yellow-300
            focus:text-black"
        >
          Забронировать
        </button>
      </div>
    </div>
  );
};
