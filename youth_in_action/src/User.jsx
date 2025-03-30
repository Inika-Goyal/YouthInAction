import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import userIcon from "./assets/user_pref_icon.png";
import "./User.css";

function User  () {
  const navigate = useNavigate(); // Create navigate function

  // Function to handle the save button click event
  const handleSaveChanges = () => {
    // Navigate to a new page (for example, a "Profile Saved" page or another route)
    navigate("/HomePage"); // Change '/profile-saved' to your desired route
  };
  return (
    <div className="user-profile-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />

          <div className="task-bar">
            <div className="overlap-group">
              <div className="div" />
              <div className="text-wrapper">Goal</div>
              <div className="text-wrapper-2">0/100</div>
              <div className="text-wrapper-3">Menu</div>
            </div>
          </div>

          <img
            className="screenshot"
            alt="Screenshot"
          />

          <img
            className="img"
            alt="Screenshot"
          />

          <div className="group">
            <div className="overlap-2">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="rectangle-2" />
                  <div className="rectangle-3" />
                  <div className="rectangle-4" />

                  <div className="text-wrapper-4">Full Name:</div>

                  <div className="text-wrapper-5">Email:</div>
                </div>
              </div>

              <div className="rectangle-3" />

              <img
                className="screenshot-2"
                alt="Screenshot"
              />

              <div className="text-wrapper-6">Upload Resume/CV</div>

              <div className="text-wrapper-7">Phone Number:</div>

              <div className="text-wrapper-8">School/Institution:</div>

              <div className="text-wrapper-9">Current Hours:</div>

              <div className="text-wrapper-10">Needed Hours:</div>

              <div className="text-wrapper-11">Age:</div>

              <div className="rectangle-5" />

              <div className="rectangle-6" />

              <div className="rectangle-7" />

              <div className="rectangle-8" />

              <div className="rectangle-9" />
            </div>
          </div>

          <img
            className="application"
            alt="Application"
          />

          <div className="div-wrapper">
            <button className="text-wrapper-12" onClick={handleSaveChanges}>
              Save
            </button>
          </div>

          <div className="group-2">
            <div className="overlap-3">
              <div className="rectangle-10" />


              <div className="text-wrapper-13">Location</div>
            </div>
          </div>

          <div className="group-3">
            <div className="overlap-4">
              <div className="rectangle-10" />


              <div className="text-wrapper-14">Jobs/Category</div>
            </div>

            <div className="group-4">
              <div className="overlap-group-3">
                <div className="rectangle-10" />


                <div className="text-wrapper-14">Hours</div>
              </div>
            </div>

            <img className="img-2" alt="Img" src={userIcon} />
          </div>

          <div className="text-wrapper-15">Preferences</div>

          <img
            className="img-2"
            alt="Img"
            src={userIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default User;