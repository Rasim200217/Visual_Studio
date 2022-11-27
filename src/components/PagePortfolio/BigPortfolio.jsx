import React from "react";
import { Gallery } from "./dataGallery";
import { GiMagnifyingGlass } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./BigPortfolio.scss";
import { useState } from "react";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry/Masonry";
import { Footer } from "../Footer";

export const BigPortfolio = () => {
  const [items, setItems] = useState(Gallery);

  const filterItem = (categoryItem) => {
    const updateItems = Gallery.filter((currentElement) => {
      return currentElement.category === categoryItem;
    });
    setItems(updateItems);
  };

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrs] = useState("");
  const getImg = (image) => {
    setTempImgSrs(image);
    setModel(true);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="" />
        <AiOutlineClose
          className="text-white"
          onClick={() => setModel(false)}
          size={20}
        />
      </div>
      <div className=" px-12 pt-8">
        <h2 className="font-bold text-yellow-300 text-2xl">Фотографии</h2>
        <div className=" text-white flex justify-between w-76 md:w-60 pt-6 text-xs md:text-sm">
          <button
            onClick={() => setItems(Gallery)}
            className=" hover:opacity-80 btn-hover"
          >
            Все
          </button>
          <button
            onClick={() => filterItem("portrait")}
            className=" hover:opacity-80 btn-hover"
          >
            Портрет
          </button>
          {/* <button
            onClick={() => filterItem("wedding")}
            className=" hover:opacity-80 btn-hover"
          >
            Свадебное
          </button> */}
          <button
            onClick={() => filterItem("subject")}
            className=" hover:opacity-80 btn-hover"
          >
            Предметка
          </button>
        </div>
        <div className="pt-4">
          <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
            {items.map((item, index) => (
              <Item key={index} sx={{ item }} className="cursor-pointer">
                <div key={index} className="column">
                  <div className="post" onClick={() => getImg(item.image)}>
                    <div className="overlay">
                      <GiMagnifyingGlass size={50} className=" text-white" />
                    </div>
                    <img
                      className="rounded-xl cursor-pointer"
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
              </Item>
            ))}
          </Masonry>
        </div>
      </div>
      <Footer />
    </>
  );
};
