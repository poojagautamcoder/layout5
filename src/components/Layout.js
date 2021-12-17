import React from "react";
import styles from "../styles/Layout.css";
import MainSlide from "./MainSlide";
import SideSlide from "./SideSlide";
const Layout = () => {
  return (
    <div className="Container">
      <MainSlide />
      <SideSlide />
    </div>
  );
};
export default Layout;
