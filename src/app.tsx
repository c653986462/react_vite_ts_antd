import React from "react";
import ReactDOM from "react-dom/client";
import Layouts from "@/layouts/basiclayouts";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Layouts />
    </BrowserRouter>
  )
};
export default App;
