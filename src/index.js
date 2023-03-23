import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Header from "./Header";
import Footer from "./Footer";

import AddButton from "./AddButton";

ReactDOM.render(
  <>
    <App />
    {/* <Ap/> */}
    {/* <Mm/> */}

    <Header />
    {/* <ActivityBar/> */}
    {/* <DeleteButton/> */}

    <AddButton />
    {/* <MyGrid/> */}
    <Footer />
  </>,
  document.getElementById("root")
);
