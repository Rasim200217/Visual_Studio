import React, { useState, useRef, TouchEvent } from "react";

import second from "../../assets/team/avatar_1.jpg";
import secondF from "../../assets/team/avatar_2.jpg";

import { TiArrowUnsorted } from "react-icons/ti";

export const BeforeAfterSlide = () => {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

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
      <div
        ref={imageContainer}
        className=" max-w-lg w-full mx-auto mt-32 relative select-none group"
      >
        <img src={second} alt="" className="pointer-events-none" />
        <img
          style={{
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src={secondF}
          alt=""
          className=" absolute inset-0 pointer-events-none"
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
              className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center cursor-pointer"
            >
              <TiArrowUnsorted
                size={20}
                className=" text-gray-300 rotate-90 transform"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
