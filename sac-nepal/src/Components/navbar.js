import React from "react";
import Logo from "../assets/logo.png";

function navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={Logo} alt="sacLogo" />
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
  );
}

export default navbar;
