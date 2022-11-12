import React from "react";
import { Header } from "../Header";
import { PhotoStudio } from "../PhotoStudio/PhotoStudio";
import { TheVisualStudio } from "../TheVisualStudio";
import { StudioRental } from "../StudioRental";
import { Portfolio } from "../Portfolio";
import { OurTeam } from "../OurTeam";
import { Footer } from "../Footer";

export const MainPage = () => {
  return (
    <div>
      <Header />
      <PhotoStudio />
      <TheVisualStudio />
      <StudioRental />
      <Portfolio />
      <OurTeam />
      <Footer />
    </div>
  );
};
