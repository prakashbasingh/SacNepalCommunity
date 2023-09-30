import React from "react";
import "../cssFiles/home.css";
import Logo from "../assets/logo.png";

function Home() {
  return (
    <div className="home">
      <div className="homeImageContainer">
        <div>
          <img src={Logo} alt="logo"></img>
        </div>
      </div>
      <div className="homeContentContainer">
        <div className="addContainer1">
          <h4>Add Container 1</h4>
          <div className="add1A"></div>
          <div className="add1B"></div>
          <div className="add1C"></div>
        </div>
        <div className="mainContainer">
          <div className="home1">
            <div className="ObjHeading">
              <h4>Our Objectives</h4>
            </div>
            <div className="goalList">
              <li>To establish a Nepalese Community Center.</li>
              <li>
                To operate a platform and organize Nepali families with social,
                cultural, spiritual, national and international values on a
                regular basis for the benefit of the community.
              </li>
              <li>
                To establish and maintain a community center for the purpose of
                conducting educational, cultural, literary, and performing arts
                activities consistent with the mission as stated Article 1.4.
              </li>
              <li>
                To encourage sponsoring and/or supporting community service and
                charitable activities for the benefit of the community and the
                nation as a whole.
              </li>
              <li>
                To work with other community organizations on areas of common
                interests
              </li>
            </div>
          </div>
          <div className="home2">
            <h4>Quick Peek at upcoming events</h4>
            <div className="home2Item">
              <div>
                <p>Stay tuned...... for upcoming event......</p>
              </div>
              <div>
                <p>Checkout previous events</p>
              </div>
            </div>
          </div>
          <div className="home3">
            <h4>Whats on the Market</h4>{" "}
          </div>
          <div className="home4">
            <h4>What's happening in social media</h4>
          </div>
        </div>
        <div className="addContainer2">
          <h4>Add Container 2</h4>
          <div className="add2A"></div>
          <div className="add2B"></div>
          <div className="add2C"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
