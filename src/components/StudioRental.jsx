import React from "react";
import studioImg from "../assets/studio.png";

import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { Form } from "./Form.jsx";

import { BsArrowDownShort } from "react-icons/bs";

import "../scss/StudioRental.scss";

export const StudioRental = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="secondaryColor grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="order-2 lg:order-1">
        <img
          className="bg-cover bg-no-repeat object-contain sm:object-cover h-fit sm:h-80 w-full"
          src={studioImg}
          alt="studio"
        />
      </div>
      <div className="px-12 md:px-28 pt-8 order-1 lg:order-2 z-30">
        <h2 className="font-bold text-yellow-300 text-2xl">
          Арендовать фотостудию
        </h2>
        <p className=" text-white pt-6 leading-6 w-62 sm:w-96">
          <span className="font-medium">
            Универсальная фотостудия в Ташкенте
          </span>
          <span>
            {""} подойдёт под любые виды съёмок от съемок одежды до портретных
            съемок
          </span>
        </p>
        <BsArrowDownShort size={40} className=" text-white mt-3 ml-16" />
        {/* <div className="grid grid-cols-2 gap-4 text-white pt-6">
          <div>
            <p className="text-xs lg:text-sm">Аренда за студийный час</p>
            <p>
              <span className="font-bold text-xl lg:text-2xl">200 000</span> сум
            </p>
          </div>
          <div>
            <p className="text-xs lg:text-sm sm:w-full">
              Дополнительный свет и фоны
            </p>
            <p>
              <span className="font-bold text-xl lg:text-2xl">+50 000</span> сум
            </p>
          </div>
        </div> */}
        <div className="mt-4">
          <button onClick={handleOpen} className="pulsBtn">
            Забронировать
          </button>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box className="formModal">
              <Form handleCloseF={handleClose} />
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};
