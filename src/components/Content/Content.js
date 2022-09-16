import React from "react";
import Button from "../Button/Button";
import Sponsors from "../Sponsors/Sponsors";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <section className={classes.content}>
      <h1>Make remote work</h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <Button />
      <Sponsors />
    </section>
  );
};

export default Content;
