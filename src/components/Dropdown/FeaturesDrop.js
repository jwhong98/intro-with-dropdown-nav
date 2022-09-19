import React from "react";
import classes from "./FeaturesDrop.module.css";
import Dropdown from "./Dropdown";
import todo from "../../images/icon-todo.svg";
import calendar from "../../images/icon-calendar.svg";
import reminders from "../../images/icon-reminders.svg";
import planning from "../../images/icon-planning.svg";

const FeaturesDrop = () => {
  return (
    <Dropdown title="Features">
      <li className={classes.featuresItem}>
        <img src={todo} alt="item icon" /> Todo List
      </li>
      <li className={classes.featuresItem}>
        <img src={calendar} alt="item icon" /> Calendar
      </li>
      <li className={classes.featuresItem}>
        <img src={reminders} alt="item icon" /> Reminders
      </li>
      <li className={classes.featuresItem}>
        <img src={planning} alt="item icon" /> Planning
      </li>
    </Dropdown>
  );
};

export default FeaturesDrop;
