import React from "react";
import NavBarElement from "./NavBarElement";

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavBarElement>ETHAN JIU</NavBarElement>
      <div></div>
      <NavBarElement>BEGINNING</NavBarElement>
      <NavBarElement>PROJECTS</NavBarElement>
      <NavBarElement>ABOUT ME</NavBarElement>
      <NavBarElement>CONTACT</NavBarElement>
    </div>
  );
};

export default NavBar;
