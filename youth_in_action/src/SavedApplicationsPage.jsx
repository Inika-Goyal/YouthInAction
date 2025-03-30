import React, { useState } from "react";
import checkBox from "./assets/check_box.png";
import checkBoxBlank from "./assets/check_box_outline_blank.png";
import heart from "./assets/heart.png";
import heartBlank from "./assets/heart_blank.png";
import "./SavedApplicationsPage.css";
import { organizationsData, imageMap } from "./OrgData";


function SavedApplicationsPage() {
  const [organizations, setOrganizations] = useState(organizationsData);

  // Inverses org object's saved value 
  const toggleSaved = (id) => {
    setOrganizations((prevOrgs) =>
      prevOrgs.map((org) =>
        org.id === id ? { ...org, saved: org.saved === 0 ? 1 : 0 } : org
      )
    );
  };

  // Inverses org object's completion value
  const toggleCompletion = (id) => {
    setOrganizations((prevOrgs) =>
      prevOrgs.map((org) =>
        org.id === id ? { ...org, completion: org.completion === 0 ? 1 : 0 } : org
      )
    );
  };

  // Removes any unsaved orgs from org list and creates a new list
  const savedOrganizations = organizations.filter((org) => org.saved === 1);

  return (
    <div className="saved-applications">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="text-wrapper">Saved Applications</div>

          <div className="task-bar">
            <div className="overlap-group">
              <div className="div">Menu</div>
              <div className="rectangle-2" />
              <div className="text-wrapper-2">Goal</div>
              <div className="text-wrapper-3">{savedOrganizations.length}/100</div>
            </div>
          </div>

          {/* Dynamic Grid Rendering (3 organizations a row) */}
          <div className="organization-grid">
            {savedOrganizations.map((org, index) => (
              <div key={index} className="organization-card">
                <div className="overlap-2">
                  <div className="rectangle-3" />
                  <img className="screenshot-2" alt={org.title} src={imageMap[org.imageName]} />
                  <div className="organization-title">{org.title}</div>
                  <div className="application-status">Application Status: <br /> {org.status}</div>
                  <div className="buttons-wrapper">
                    <img
                      src={org.completion ? checkBox : checkBoxBlank}
                      alt="Toggle Completion"
                      onClick={() => toggleCompletion(org.id)}
                    />
                    <img
                      src={org.saved ? heart : heartBlank}
                      alt="Toggle Save"
                      onClick={() => toggleSaved(org.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedApplicationsPage;
