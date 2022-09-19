import React from "react";
import classes from "./Hero.module.css";
import heroMobile from "../../images/image-hero-mobile.png";
import heroDesktop from "../../images/image-hero-desktop.png";

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <picture>
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img src={heroMobile} alt="" />
      </picture>
    </section>
  );
};
