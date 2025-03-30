"use client";
import React, { useState, useEffect } from "react";
import styles from "./HomePage.css";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file for styles
import MenuDropDown from "./MenuDropDown"; // Import the MenuDropDown component
import lightsandcubes from "./assets/lights-and-cubes.png";
import techCorpImage from './assets/tech-corp.png';
import financeCorpImage from './assets/finance_corp.png'; 
import designImage from './assets/design-studio.png';
import animalImage from './assets/animal.png'; // Import additional images for organizations

// User preferences for matching
const userPreferences = {
  field: "Sports",  // Desired field
  location: "Chicago", // Desired location
  min_hours: 1, // Minimum desired hours
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
    title: "Youth Sports Science",
    hours: 2,
    description: "develop and deliver high-quality, immersive learning experiences that bridge the gap between theoretical knowledge and practical applications.",
    imageUrl: techCorpImage,
    field: "Sports",
    location: "Chicago", 
    applicationLink: "/apply/tech-corp"
  },
  {
    id: 2,
    title: "MakeAWish",
    hours: 3,
    description: "help make the wishes of children with critical illnesses",
    imageUrl: financeCorpImage,
    field: "Community",
    location: "Chicago",
    applicationLink: "/apply/finance-corp"
  },
  {
    id: 3,
    title: "Central Texas Food Bank",
    hours: 4,
    description: "Helping distribute food, providing cheerful service to clients, and assisting with set-up and teardown at the distribution site",
    imageUrl: designImage,
    field: "Community",
    location: "Austin",
    applicationLink: "/apply/design-studio"
  },
  {
    id: 4,
    title: "The Animal Foundation",
    hours: 4,
    description: "Give abandoned animals food, shelter, medical care, exercise, socialization, mental stimulation, and training.",
    imageUrl: animalImage,
    field: "Wildlife",
    location: "Las Vegas",
    applicationLink: "https://animalfoundation.com/volunteer/about-volunteering",

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

  // Get previous and next organizations for side cards
  const prevOrganization = counter > 0 ? sortedOrganizations[counter - 1] : null;
  const nextOrganization = counter < sortedOrganizations.length - 1 ? sortedOrganizations[counter + 1] : null;

  return (
    <main className="mainContainer">
      <Header />
      <ContentSection
        organization={sortedOrganizations[counter]} // Display organization based on counter
        prevOrganization={prevOrganization}
        nextOrganization={nextOrganization}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        canGoNext={counter < sortedOrganizations.length - 1}
        canGoPrevious={counter > 0}
      />
    </main>
  );
}

function Header() {
  return (
    <header className="navBar">
      <h1 className="logo">Goal</h1>
      <div className="progressBar" />
      <p className="progressText">0/100</p>
      <MenuDropDown />
    </header>
  );
}

// Side card component to display a preview of prev/next organizations
function SideCard({ organization, onClick, isDisabled, cardClass }) {
  if (!organization || isDisabled) {
    return (
      <div 
        className={cardClass} 
        style={{ cursor: isDisabled ? 'default' : 'pointer', opacity: isDisabled ? 0.08 : 0.5 }}
      />
    );
  }

  return (
    <div 
      className={cardClass} 
      onClick={onClick}
      style={{ 
        cursor: 'pointer', 
        opacity: 0.7,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        position: 'absolute', 
        top: '10px', 
        left: '0',
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Gabarito, sans-serif',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '0 10px',
        zIndex: 2
      }}>
        {organization.title}
      </div>
      
      <div style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#00197d',
        opacity: 0.6,
        zIndex: 0
      }} />
      
      {organization.imageUrl && (
        <div style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${organization.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          zIndex: 1,
          opacity: 0.5
        }} />
      )}
    </div>
  );
}

function ContentSection({ organization, prevOrganization, nextOrganization, handleNext, handlePrevious, canGoNext, canGoPrevious }) {
  return (
    <section className="contentSection">
      <h2 className="matchPercentage">{organization ? `${organization.match_score}% Match` : "Loading..."}</h2>
      <div className="cardContainer">
        <SideCard 
          organization={prevOrganization}
          onClick={canGoPrevious ? handlePrevious : undefined}
          isDisabled={!canGoPrevious}
          cardClass="sideCardLeft"
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
        
        <SideCard 
          organization={nextOrganization}
          onClick={canGoNext ? handleNext : undefined}
          isDisabled={!canGoNext}
          cardClass="sideCardRight"
        />
      </div>
    </section>
  );
}

function OrganizationCard({ title, estimatedHours, description, imageUrl }) {
  const [isLiked, setIsLiked] = useState(false); // Add state for tracking liked status
  const navigate = useNavigate(); 
  // Function to toggle the liked state
  const toggleLike = () => {
    setIsLiked(!isLiked);
    navigate("/OrgPage"); 
  };

  return (
    <article className="mainCard">
      <div className="cardImage">       
        <img src={imageUrl}
          style={{ 
            width: '500px',
            height: '685px',
            objectFit: 'fill'
          }} /> 
      </div> 
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
          <button className="heartButton" onClick={toggleLike}>
            <svg
              width="45"
              height="42"
              viewBox="0 0 45 42"
              fill={isLiked ? "#1E1E1E" : "none"}
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