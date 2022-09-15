import React from "react";
import classes from "./Navbar.module.css";
import logo from "../../images/logo.svg";
import bars from "../../images/icon-menu.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

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
          <li className={classes.navMenu__item}>Features</li>
          <li className={classes.navMenu__item}>Company</li>
          <li className={classes.navMenu__item}>
            <a href="/">Careers</a>
          </li>
          <li className={classes.navMenu__item}>
            <a href="/">About</a>
          </li>
        </ul>
        <div className={classes.buttonContainer}>buttons</div>
      </nav>
      {isOpen && <MobileMenu />}
    </>
  );
};

export default Navbar;
