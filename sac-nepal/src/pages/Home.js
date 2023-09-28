import React from "react";
import "../cssFiles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="addContainer1">Add Container</div>
      <div className="mainContainer">
        <div className="home4">
          <h4>Our Agenda</h4>
        </div>
        <div className="home1">
          <h4>What's happening in social media</h4>
        </div>
        <div className="home2">
          <h4>Quick Peek at coming events</h4>
        </div>
        <div className="home3">
          <h4>Whats on the Market</h4>{" "}
        </div>
      </div>
      <div className="addContainer2">Add Container</div>
    </div>
  );
}

export default Home;
//   style={{ border: "none", overflow: "hidden" }}
