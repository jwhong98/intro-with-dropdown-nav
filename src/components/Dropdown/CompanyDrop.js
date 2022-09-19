import React from "react";
import Dropdown from "./Dropdown";

const CompanyDrop = () => {
  return (
    <Dropdown title="Company" left={true}>
      <li>History</li>
      <li>Our Team</li>
      <li>Blog</li>
    </Dropdown>
  );
};

export default CompanyDrop;
