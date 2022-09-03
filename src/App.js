import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { BigPortfolio } from "./components/PagePortfolio/BigPortfolio";
import { Retouch } from "./components/PageRetouch/Retouch";
import { PortfolioVideo } from "./components/PageVideo/PortfolioVideo";

function App() {
  return (
    <>
      <Navbar className="" />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<BigPortfolio />} />
        <Route path="/video" element={<PortfolioVideo />} />
        <Route path="/retouch" element={<Retouch />} />
      </Routes>
    </>
  );
}

export default App;
