import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <section>
      <div className="sidebar">
        <ul className="sport-list">
          <li className="sport-item">
            <img src={process.env.PUBLIC_URL + "yoga.png"} alt="logo yoga" />
          </li>
          <li className="sport-item">
            <img
              src={process.env.PUBLIC_URL + "swimming.png"}
              alt="logo natation"
            />
          </li>
          <li className="sport-item">
            <img src={process.env.PUBLIC_URL + "biking.png"} alt="logo vélo" />
          </li>
          <li className="sport-item">
            <img
              src={process.env.PUBLIC_URL + "bodybuilding.png"}
              alt="logo musculation"
            />
          </li>
        </ul>
        <p className="copyryght">Copiryght, SportSee 2020</p>
      </div>
    </section>
  );
}
