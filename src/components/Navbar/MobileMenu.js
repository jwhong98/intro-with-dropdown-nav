import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileMenu.module.css";
import close from "../../images/icon-close-menu.svg";
import FeaturesDrop from "../Dropdown/FeaturesDrop";
import CompanyDrop from "../Dropdown/CompanyDrop";
import ButtonContainer from "../Button/ButtonContainer";

const Drop = (props) => {
  return <div className={classes.drop} onClick={props.onClick}></div>;
};

const MobileMenu = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          {props.open && <Drop onClick={props.menuToggler} />}
          <div
            className={
              props.open
                ? `${classes.mobileMenuContainer} ${classes.active}`
                : classes.mobileMenuContainer
            }
          >
            <img src={close} alt="close icon" onClick={props.menuToggler} />
            <ul className={classes.mobileMenu}>
              <li className={classes.mobileMenu__item}>
                <FeaturesDrop />
              </li>
              <li className={classes.mobileMenu__item}>
                <CompanyDrop />
              </li>
              <li className={classes.mobileMenu__item}>Careers</li>
              <li className={classes.mobileMenu__item}>About</li>
            </ul>
            <ButtonContainer mobile={true} />
          </div>
        </>,
        portalElement
      )}
    </>
  );
};

export default MobileMenu;
