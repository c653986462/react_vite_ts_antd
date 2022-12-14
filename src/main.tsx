import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "antd/dist/antd.css";
import App from "./app";
import 'amfe-flexible/index.js'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
