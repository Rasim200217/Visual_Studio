import React from "react";
import { Header } from "../Header";
import { PhotoStudio } from "../PhotoStudio/PhotoStudio";
import { TheVisualStudio } from "../TheVisualStudio";
import { StudioRental } from "../StudioRental";
import { Portfolio } from "../Portfolio";
import { OurTeam } from "../OurTeam";
import { Footer } from "../Footer";
import Vs21Video from "../../assets/studioMove.mov";

export const MainPage = () => {
  return (
    <div>
      <video
        src={Vs21Video}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover opacity-20 fixed -z-10"
      />
      <Header />
      {/* <PhotoStudio /> */}
      <TheVisualStudio />
      {/* <StudioRental /> */}
      {/* <Portfolio /> */}
      {/* <OurTeam /> */}
      <Footer />
    </div>
  );
};
