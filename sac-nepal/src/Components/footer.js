import React from "react";
import "../cssFiles/footer.css";

function footer() {
  return (
    <div className="footer">
      <div className="footerNav">
        <a href="/"> Home </a>
        <a href="/events">Events</a>
        <a href="/news">News</a>
        <a href="/market">Market</a>
        <a href="/membersCommittee">Members & Committee</a>
        <a href="/aboutUs">About Us</a>
      </div>
      <div>
        <h4>Contact SNCC</h4>
        <p>7700 Auburn Boulevard</p>
        <p>Citrus Heights, CA 95610</p>
        <p>Email: sacnepal2020@gmail.com</p>
      </div>
      <div>
        <h4>Keep in touch</h4>
        <form>
          <label for="fname">your email here</label>
          <br></br>
          <input type="text" id="fname" name="fname"></input>
        </form>
      </div>
    </div>
  );
}

export default footer;
