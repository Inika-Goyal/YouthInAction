import React from "react";
import { organizationsData } from "./OrgData";
import "./OrgPage.css";
import MenuDropDown from "./MenuDropDown"; // Import the MenuDropDown component
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



function OrgPage() {
  // Always use the first organization
  const organization = organizationsData[0];

  if (!organization) {
    return <div className="organization-page">No organizations available</div>;
  }

  return (
    <div className="organization-page">
      <div className="div">
        <div className="overlap">
          <div className="overlap-group"></div>

          <div className="estimated-hours">
            Estimated <br />
            Hours: {organization.hours}
          </div>

          <p className="location-INSERT">
            Location: {organization.location}
            <br />
            <br />
            {organization.description}
            <br />
            <br />
            Requirements: INSERT REQUIREMENTS HERE
            <br />
            <br />
            Contact Phone #
            <br />
            <br /> Full Description: INSERT FULL DESCRIPTION
            <br />
            <br />
            More Information:{" "}
            <a href={organization.applicationLink} target="_blank" rel="noopener noreferrer">
              {organization.applicationLink}
            </a>
          </p>

          <div className="organization-title">{organization.title}</div>
          <div className="text-wrapper">{organization.completion}/100</div>
        </div>

        <div className="overlap-2">
          <img className="photo" src={organization.imageUrl} alt={organization.title} />
        </div>

        <Header />
      </div>
    </div>
  );
}

export default OrgPage;
