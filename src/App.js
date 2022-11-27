import { Routes, Route } from "react-router-dom";
import React from "react";

import { MainPage } from "./components/MainPage/MainPage";
import { Navbar } from "./components/Navbar";
import { BigPortfolio } from "./components/PagePortfolio/BigPortfolio";
import { Retouch } from "./components/PageRetouch/Retouch";
import { PortfolioVideo } from "./components/PageVideo/PortfolioVideo";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import NavbarNew from "./components/Sidebar/NavbarNew";

function App() {
  return (
    <div className="flex">
      <div>
        <NavbarNew />
      </div>

      <div className="">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/vs21/portfolio" element={<BigPortfolio />} />
          <Route path="/render/main" element={<PortfolioVideo />} />
          <Route path="/vs21/retouch" element={<Retouch />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
