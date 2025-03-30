"use client";
import React, { useState, useEffect } from "react";
import styles from "./HomePage.css";
import "./HomePage.css"; // Import the CSS file for styles

import lightsandcubes from "./assets/lights-and-cubes.png";
import techCorpImage from './assets/tech-corp.png';

// Then use it
<img src={techCorpImage} alt="Tech Corp" />

// User preferences for matching
const userPreferences = {
  field: "Tech",  // Desired field
  location: "NYC", // Desired location
  min_hours: 20, // Minimum desired hours
};

// Function to calculate match score for an organization
const calculateMatchScore = (organization) => {
  let score = 0;

  // Matching criteria based on field, location, and hours
  if (organization.field === userPreferences.field) score += 3;
  if (organization.location === userPreferences.location) score += 3;
  if (organization.hours >= userPreferences.min_hours) score += 2; // +2 for meeting min hours

  // Return the match score as a percentage (out of 8 in this case)
  return (score / 8) * 100;
};

// Example organization data
const organizationsData = [
  {
    id: 1,
    title: "Tech Corp",
    hours: 25,
    description: "A leading tech company.",
    imageUrl: techCorpImage,
    field: "Tech",
    location: "NYC",
    applicationLink: "/apply/tech-corp"
  },
  {
    id: 2,
    title: "Finance Corp",
    hours: 15,
    description: "A financial company.",
    imageUrl: "/images/finance-corp.png",
    field: "Finance",
    location: "NYC",
    applicationLink: "/apply/finance-corp"
  },
  {
    id: 3,
    title: "Design Studio",
    hours: 30,
    description: "Creative studio for design projects.",
    imageUrl: "/images/design-studio.png",
    field: "Design",
    location: "Remote",
    applicationLink: "/apply/design-studio"
  }
  // Add more organizations as needed
];

function InputDesign() {
  const [sortedOrganizations, setSortedOrganizations] = useState([]);
  const [counter, setCounter] = useState(0); // Counter to track which organization to display

  // UseEffect to run when the page loads
  useEffect(() => {
    // Add match score to each organization and calculate
    const organizationsWithScores = organizationsData.map((org) => {
      const matchScore = calculateMatchScore(org);
      return { ...org, match_score: matchScore };
    });

    // Sort organizations by match_score in descending order
    const sortedOrganizationsList = organizationsWithScores.sort((a, b) => b.match_score - a.match_score);

    // Set the sorted list to state
    setSortedOrganizations(sortedOrganizationsList);
  }, []); // Empty dependency array ensures this runs once on mount

  // Function to increment the counter
  const handleNext = () => {
    if (counter < sortedOrganizations.length - 1) {
      setCounter(counter + 1);
    }
  };

  // Function to decrement the counter
  const handlePrevious = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <main className="mainContainer">
      <Header />
      <ContentSection
        organization={sortedOrganizations[counter]} // Display organization based on counter
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        canGoNext={counter < sortedOrganizations.length - 1}
        canGoPrevious={counter > 0}
      />
      {/* Removed the navigation buttons since we're using side cards instead */}
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

function ContentSection({ organization, handleNext, handlePrevious, canGoNext, canGoPrevious }) {
  return (
    <section className="contentSection">
      <h2 className="matchPercentage">{organization ? `${organization.match_score}% Match` : "Loading..."}</h2>
      <div className="cardContainer">
        <div 
          className="sideCardLeft" 
          onClick={canGoPrevious ? handlePrevious : undefined} 
          style={{ cursor: canGoPrevious ? 'pointer' : 'default', opacity: canGoPrevious ? 1 : 0.5 }}
        />
        {organization ? (
          <OrganizationCard
            key={organization.id}
            title={organization.title}
            estimatedHours={organization.hours}
            description={organization.description}
            imageUrl={organization.imageUrl}
          />
        ) : (
          <p>Loading...</p>
        )}
        <div 
          className="sideCardRight" 
          onClick={canGoNext ? handleNext : undefined} 
          style={{ cursor: canGoNext ? 'pointer' : 'default', opacity: canGoNext ? 1 : 0.5 }}
        />
      </div>
    </section>
  );
}

function OrganizationCard({ title, estimatedHours, description, imageUrl }) {
  return (
    <article className="mainCard">
      <div className="cardImage"  >       <img src={techCorpImage}
          style={{ 
            width: '500px',
            height: '685px',
            objectFit: 'fill'
          }} /> </div> 
      <div className="cardContent">
        <h3 className="orgTitle">{title}</h3>
        <p className="hoursLabel">Estimated Hours</p>
        <p className="hoursValue">{estimatedHours}</p>
        <p className="orgDescription">{description}</p>
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