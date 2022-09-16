import React from "react";
import classes from "./Sponsors.module.css";
import databiz from "../../images/client-databiz.svg";
import audiophile from "../../images/client-audiophile.svg";
import maker from "../../images/client-maker.svg";
import meet from "../../images/client-meet.svg";

const Sponsors = () => {
  return (
    <section className={classes.clients}>
      <img src={databiz} alt="" />
      <img className={classes.smaller} src={audiophile} alt="" />
      <img src={meet} alt="" />
      <img src={maker} alt="" />
    </section>
  );
};

export default Sponsors;
