import React from "react";
import Logo from "../assets/logo.png";

function navbar() {
  return (
    <div className="navbar">
      <div>
        <h1 className="mainTitle">
          Greater Sacramento Nepalese Community Center
        </h1>
      </div>
      <div className="menuContent">
        <div className="leftSide">
          <img src={Logo} alt="sacLogo" width="150" height="150" />
        </div>
        <div className="rightSide">
          <a href="/"> Home </a>
          <a href="/events">Events</a>
          <a href="/news">News</a>
          <a href="/market">Market</a>
          <a href="/membersCommittee">Members & Committee</a>
          <a href="/aboutUs">About Us</a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
