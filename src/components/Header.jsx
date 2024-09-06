import React from "react";
import SwitchThemeButton from "./SwitchThemeButton";

const Header = () => {
  const roles = ["SOFTWARE", "GAME"];
  let currRole = roles[0];

  return (
    <div className="Head">
      <p style={{ gridRow: "1/2" }}>HELLO! MY NAME IS </p>
      <p className="Name">ETHAN JIU</p>
      <p style={{ gridRow: "3/4" }}>AM A</p>
      <p className="Software">{roles[0]}</p>
      <p className="Game">{roles[1]}</p>
      <p style={{ gridRow: "5/6" }}>DEVELOPER</p>
    </div>
  );
};

export default Header;
