import React from "react";
import classes from "./Hero.module.css";
import heroMobile from "../../images/image-hero-mobile.png";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <img src={heroMobile} alt="" />
    </section>
  );
};
