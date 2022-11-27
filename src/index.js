import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";

import { HelmetProvider } from "react-helmet-async";
import reportWebVitals from "./reportWebVitals";

import BgVideo from "./assets/bgVideo.mp4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <meta charSet="utf-8" />
        <meta
          name="og:description"
          content="The Visual Studio – это творческая команда профессионалов, которая имеет огромный багаж опыта и знаний в таких сферах как фото-кино съемка, саунд-дизай и пр."
        />
      </HelmetProvider>
      <video
        src={BgVideo}
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover opacity-10 fixed -z-10"
      />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
