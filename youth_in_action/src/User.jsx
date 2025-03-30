import React, { useRef, useState } from "react";
import userIcon from "./assets/user_pref_icon.png";
import "./User.css";

function User() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log("Uploaded File:", file.name);
    }
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleLocationClick = (option) => {
    setSelectedLocation(option);
    setIsLocationDropdownOpen(false);
  };

  const handleSave = () => {
    alert("Profile saved!");
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

              <div className="text-wrapper-6">Upload Resume/CV</div>

              <button className="upload-btn" onClick={handleFileUpload}>+</button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {selectedFile && <p className="file-name">{selectedFile.name}</p>}

              <div className="text-wrapper-7">Phone Number:</div>
              <div className="text-wrapper-8">School/Institution:</div>
              <div className="text-wrapper-9">Current Hours:</div>
              <div className="text-wrapper-10">Needed Hours:</div>
              <div className="text-wrapper-11">Age:</div>
              <div className="text-wrapper-31">
                <input className="text-wrapper-4" type="text" placeholder="Name" />
              </div>
              <div className="text-wrapper-32">
                <input className="text-wrapper-5" type="email" placeholder="Email" />
              </div>
              <div className="rectangle-5">
                <input className="rectangle-5" type="text" placeholder="+1| " />
              </div>
              <div className="rectangle-6">
                <input className="rectangle-6" type="text" placeholder="Age" />
              </div>
              <div className="rectangle-7">
                <input className="rectangle-7" type="text" placeholder="Education" />
              </div>
              <div className="rectangle-8">
                <input className="rectangle-8" type="number" placeholder="Current Hours" />
              </div>
              <div className="rectangle-9">
                <input className="rectangle-9" type="number" placeholder="Needed Hours" />
              </div>
            </div>

            <div className="div-wrapper">
              <button className="save-btn" onClick={handleSave}>Save</button>
            </div>

            <div className="text-wrapper-15">Preferences</div>

            {/* Location Dropdown below Preferences */}
            <div className="dropdown">
              <button onClick={toggleLocationDropdown} className="dropdown-btn">
                {selectedLocation}
              </button>
              {isLocationDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#" onClick={() => handleLocationClick("Chicago, IL")}>Chicago, IL</a>
                  <a href="#" onClick={() => handleLocationClick("West Hills, CA")}>West Hills, CA</a>
                  <a href="#" onClick={() => handleLocationClick("Cleveland, OH")}>Cleveland, OH</a>
                  <a href="#" onClick={() => handleLocationClick("Dallas, Texas")}>Dallas, Texas</a>
                  <a href="#" onClick={() => handleLocationClick("Austin, Texas")}>Austin, Texas</a>
                  <a href="#" onClick={() => handleLocationClick("New York, NY")}>New York, NY</a>
                  <a href="#" onClick={() => handleLocationClick("Kansas City, MO")}>Kansas City, MO</a>
                  <a href="#" onClick={() => handleLocationClick("White Hour, TN")}>White Hour, TN</a>
                  <a href="#" onClick={() => handleLocationClick("Las Vegas, Nevada")}>Las Vegas, Nevada</a>
                </div>
              )}
            </div>

            <img className="img-2" alt="Img" src={userIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;