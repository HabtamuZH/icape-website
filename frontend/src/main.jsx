import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
      {/* Meta Tags in the Head */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="ICAP Architectural specializes in innovative, sustainable, and modern architectural designs."
        />
        <meta
          name="keywords"
          content="ICAP Architecture, sustainable design, modern architecture, building design"
        />
        <meta name="author" content="ICAP Architectural Team" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="ICAP Architectural | Innovative & Sustainable Architecture"
        />
        <meta
          property="og:description"
          content="Explore cutting-edge projects by ICAP Architectural, a leader in sustainable and modern building design."
        />
        <meta
          property="og:image"
          content="https://icape.netlify.app/Profile-picture.jpg"
        />
        <meta property="og:url" content="https://icap-architectural.com" />
        <meta property="og:type" content="website" />
        {/* <!-- Open Graph Tags for Telegram (and other platforms) --> */}
        <meta
          property="og:title"
          content="ICAP Architectural | Innovative Design & Sustainable Architecture"
        />
        <meta
          property="og:description"
          content="Explore cutting-edge projects by ICAP Architectural, a leader in sustainable and modern building design."
        />
        <meta
          property="og:image"
          content="https://icape.netlify.app/Profile-picture.jpg"
        />
        <meta property="og:url" content="https://icap-architectural.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ICAP Architectural" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ICAP Architectural | Sustainable & Modern Designs"
        />
        <meta
          name="twitter:description"
          content="Innovative and eco-friendly architecture by ICAP Architectural."
        />
        <meta
          name="twitter:image"
          content="https://icape.netlify.app/Profile-picture.jpg"
        />

        <title>
          ICAP Architectural | Innovative Design & Sustainable Architecture
        </title>

      <ToastContainer />
      <App />
  </React.StrictMode>
);
