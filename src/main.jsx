import React from "react"; 
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { BrowserRouter } from "react-router-dom";

AOS.init({ once: true });


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
