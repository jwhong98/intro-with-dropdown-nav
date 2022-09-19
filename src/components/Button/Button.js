import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={props.register ? classes.register : ""}>
      {props.label}
    </button>
  );
};

export default Button;
