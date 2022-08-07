import React, { useState, useEffect } from "react";

export const ImageCarousel = ({
  images = [],
  autoPlay = true,
  autoPlayTime = 5000,
  children,
  ...props
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const newSlideIndex =
        currentSlide >= images.length - 1 ? 0 : currentSlide + 1;

      setCurrentSlide(newSlideIndex);
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      className="h-496 flex flex-nowrap overflow-x-hidden relative"
      {...props}
    >
      {images.map((imageUrl, index) => (
        <div
          className="h-full w-screen shrink-0 bg-center bg-cover duration-700 delay-1000 transition-all ease-in-out"
          key={index}
          style={{
            backgroundImage: `url(${imageUrl})`,
            marginLeft: index == 0 ? `-${currentSlide * 100}vw` : undefined,
          }}
        ></div>
      ))}
    </div>
  );
};
