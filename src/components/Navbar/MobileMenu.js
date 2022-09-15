import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import close from "../../images/icon-close-menu.svg";

const Drop = (props) => {
  return <div className={classes.drop} onClick={props.onClick}></div>;
};

const MobileMenu = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onClick={props.menuToggler} />
          <div className={classes.mobileMenuContainer}>
            <img src={close} alt="close icon" onClick={props.menuToggler} />
            <ul className={classes.mobileMenu}>
              <li className={classes.mobileMenu__item}>Features</li>
              <li className={classes.mobileMenu__item}>Company</li>
              <li className={classes.mobileMenu__item}>Careers</li>
              <li className={classes.mobileMenu__item}>About</li>
            </ul>
            <div className={classes.buttonWrap}>button</div>
          </div>
        </>,
        portalElement
      )}
    </>
  );
};

export default MobileMenu;
