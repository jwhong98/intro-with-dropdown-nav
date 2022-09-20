import React, { useState } from "react";
import classes from "./Dropdown.module.css";
import arrowDown from "../../images/icon-arrow-down.svg";
import arrowUp from "../../images/icon-arrow-up.svg";

const Dropdown = (props) => {
  const [display, setDisplay] = useState("none");
  const onClick = () => {
    display === "none" ? setDisplay("flex") : setDisplay("none");
  };

  return (
    <div className={classes.dropContainer}>
      <span onClick={onClick} className={classes.title}>
        {props.title}
        <img src={display === "none" ? arrowDown : arrowUp} alt="" />
      </span>
      <ul
        style={{ display: display }}
        className={
          props.left
            ? `${classes.listContainer} ${classes.leftAlign}`
            : classes.listContainer
        }
      >
        {props.children}
      </ul>
    </div>
  );
};

export default Dropdown;
