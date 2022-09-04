import React, { useState, useRef, TouchEvent } from "react";
import "./BeforeAfterSlide.scss";

import { GalleryRetouch } from "./RetouchData";

import { GiMagnifyingGlass } from "react-icons/gi";
import { TiArrowUnsorted } from "react-icons/ti";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry/Masonry";

export const BeforeAfterSlide = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();
    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX);
  };

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };

  return (
    <div className="px-4">
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2}>
        {GalleryRetouch.map((item, index) => (
          <div key={index}>
            <Item sx={{ item }} className="cursor-pointer">
              <div className="column">
                <div className="post" onClick={handleOpen}>
                  <div className="overlay">
                    <GiMagnifyingGlass size={50} className=" text-white" />
                  </div>
                  <img
                    className="rounded-xl cursor-pointer"
                    src={item.afterImg}
                    alt=""
                  />
                </div>
              </div>
            </Item>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="before-after">
                <div
                  ref={imageContainer}
                  className="max-w-xl w-full mx-auto relative select-none group "
                >
                  <img
                    src={item.beforeImg}
                    alt=""
                    className="pointer-events-none "
                  />
                  <img
                    style={{
                      clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
                        imageRevealFraq * 100
                      }% 100%, 0 100%)`,
                    }}
                    src={item.afterImg}
                    alt=""
                    className=" absolute inset-0 pointer-events-none "
                  />
                  <div
                    style={{ left: `${imageRevealFraq * 100}%` }}
                    className=" absolute inset-y-0 group-hover:opacity-100 md:opacity-0"
                  >
                    <div className=" relative h-full opacity-50 hover:opacity-100">
                      <div className=" absolute inset-y-0 bg-white w-0.5 -ml-px"></div>
                      <div
                        style={{ touchAction: "none" }}
                        onMouseDown={handleMouseDown}
                        onTouchMove={handleTouchMove}
                        className="h-12 w-12 -ml-6 -mt-6 rounded-full
                         bg-white absolute top-1/2 shadow-xl flex items-center
                          justify-center cursor-pointer"
                      >
                        <TiArrowUnsorted
                          size={20}
                          className=" text-gray-300 rotate-90 transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Box>
            </Modal>
          </div>
        ))}
      </Masonry>
    </div>
  );
};
