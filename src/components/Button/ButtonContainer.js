import React from "react";
import Button from "./Button";
import classes from "./ButtonContainer.module.css";

const ButtonContainer = (props) => {
  return (
    <div
      className={
        props.mobile
          ? `${classes.buttonContainer} ${classes.mobile}`
          : classes.buttonContainer
      }
    >
      <a href="/">Login</a>
      <Button label="Register" register={true} />
    </div>
  );
};

export default ButtonContainer;
