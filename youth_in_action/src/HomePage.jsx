"use client";
import React from "react";
import styles from "./HomePage.css";
import "./HomePage.css"; // Import the CSS file for styles
function InputDesign() {
  return (
    <main className="mainContainer">
      <Header />
      <ContentSection />
    </main>
  );
}

function Header() {
  return (
    <header className="navBar">
      <h1 className="logo">Goal</h1>
      <div className="progressBar" />
      <p className="progressText">0/100</p>
      <button className="menuButton">Menu</button>
    </header>
  );
}

function ContentSection() {
  return (
    <section className="contentSection">
      <h2 className="matchPercentage">90% Match</h2>
      <div className="cardContainer">
        <div className="sideCardLeft" />
        <OrganizationCard />
        <div className="sideCardRight" />
      </div>
    </section>
  );
}

function OrganizationCard() {
  return (
    <article className="mainCard">
      <div className="cardImage" />
      <div className="cardContent">
        <h3 className="orgTitle">Organization Title</h3>
        <p className="hoursLabel">Estimated Hours</p>
        <p className="hoursValue">24</p>
        <p className="orgDescription">
          Description/Bio the gap between young changemakers and organizations
          in need. From environmental...
        </p>
        <div className="actionButtons">
          <button className="arrowButton">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-up"
            >
              <path
                d="M24 38L24 10M24 10L10 24M24 10L38 24"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button className="applicationButton">Send Application</button>
          <button className="heartButton">
            <svg
              width="45"
              height="42"
              viewBox="0 0 45 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.075 8.06752C38.1173 7.17328 36.9803 6.4639 35.7288 5.97992C34.4773 5.49593 33.1359 5.24683 31.7813 5.24683C30.4266 5.24683 29.0852 5.49593 27.8337 5.97992C26.5822 6.4639 25.4452 7.17328 24.4875 8.06752L22.5 9.92252L20.5125 8.06752C18.5781 6.26206 15.9544 5.24776 13.2188 5.24776C10.4831 5.24776 7.85943 6.26206 5.92501 8.06752C3.99059 9.87298 2.90384 12.3217 2.90384 14.875C2.90384 17.4283 3.99059 19.8771 5.92501 21.6825L22.5 37.1525L39.075 21.6825C40.0331 20.7887 40.7932 19.7274 41.3117 18.5594C41.8303 17.3913 42.0972 16.1394 42.0972 14.875C42.0972 13.6107 41.8303 12.3587 41.3117 11.1906C40.7932 10.0226 40.0331 8.96134 39.075 8.06752Z"
                stroke="#1E1E1E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

export default InputDesign;
