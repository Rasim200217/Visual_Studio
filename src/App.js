import { Routes, Route } from "react-router-dom";
import React from "react";

import { MainPage } from "./components/MainPage/MainPage";
import { Navbar } from "./components/Navbar";
import { BigPortfolio } from "./components/PagePortfolio/BigPortfolio";
import { Retouch } from "./components/PageRetouch/Retouch";
import { PortfolioVideo } from "./components/PageVideo/PortfolioVideo";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import NavbarNew from "./components/Sidebar/NavbarNew";
import Cyclorama from "./components/Cyclorama/Cyclorama";
import Chromakey from "./components/Chromakey/Chromakey";
import Loft from "./components/Loft/Loft";

function App() {
  return (
    <div className="flex">
      <div>
        <NavbarNew />
      </div>

      <div style={{ width: "-webkit-fill-available" }}>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/vs21/portfolio" element={<BigPortfolio />} />
          <Route path="/render" element={<PortfolioVideo />} />
          <Route path="/vs21/retouch" element={<Retouch />} />
          <Route path="/vs21/cyclorama" element={<Cyclorama />} />
          <Route path="/vs21/chromakey" element={<Chromakey />} />
          <Route path="/vs21/loft" element={<Loft />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
