import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import bars from "../../images/icon-menu.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import Button from "../Button/Button";
import FeaturesDrop from "../Dropdown/FeaturesDrop";
import CompanyDrop from "../Dropdown/CompanyDrop";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuToggler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav>
        <img className={classes.logo} src={logo} alt="logo" />
        <img
          className={classes.bars}
          src={bars}
          alt="mobile menu icon"
          onClick={menuToggler}
        />
        <ul className={classes.navMenu}>
          <li className={classes.navMenu__item}>
            <FeaturesDrop />
          </li>
          <li className={classes.navMenu__item}>
            <CompanyDrop />
          </li>
          <li className={classes.navMenu__item}>
            <a href="/">Careers</a>
          </li>
          <li className={classes.navMenu__item}>
            <a href="/">About</a>
          </li>
        </ul>
        <div className={classes.buttonContainer}>
          <a href="/">Login</a>
          <Button label="Register" register={true} />
        </div>
      </nav>
      {/* {isOpen && <MobileMenu menuToggler={menuToggler} open={isOpen} />} */}
      <MobileMenu open={isOpen} menuToggler={menuToggler} />
    </>
  );
};

export default Navbar;
