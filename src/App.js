import { Routes, Route } from "react-router-dom";

import { MainPage } from "./components/MainPage/MainPage";
import { Navbar } from "./components/Navbar";
import { BigPortfolio } from "./components/PagePortfolio/BigPortfolio";
import { Retouch } from "./components/PageRetouch/Retouch";
import { PortfolioVideo } from "./components/PageVideo/PortfolioVideo";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/portfolio" element={<BigPortfolio />} />
        <Route path="/video" element={<PortfolioVideo />} />
        <Route path="/retouch" element={<Retouch />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
