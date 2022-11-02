import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "../scss/Intro.scss";

import IntroUrl from "../assets/intro.mp4";

export const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video ">
      <video
        className=" w-full h-full object-cover"
        src={IntroUrl}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex justify-center ">
        <div
          className="app__video-overlay_circle flex justify-center items-center mx-auto my-auto"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={50} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={50} />
          )}
        </div>
      </div>
    </div>
  );
};
