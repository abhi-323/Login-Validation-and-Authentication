import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <div className=" bg-cover h-screen bg-[url('https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_960_720.jpg')]">
        <App />
      </div>
    </RecoilRoot>
  </React.StrictMode>
);
