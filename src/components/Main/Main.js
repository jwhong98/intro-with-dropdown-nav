import React from "react";
import Content from "../Content/Content";
import { Hero } from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Content />
      </main>
    </>
  );
};

export default Main;
