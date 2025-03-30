import React, { useRef, useState } from "react";
import userIcon from "./assets/user_pref_icon.png";
import "./User.css";
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

function User() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const [isFieldDropdownOpen, setIsFieldDropdownOpen] = useState(false);
  const [isHoursDropdownOpen, setIsHoursDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [selectedField, setSelectedField] = useState("Select Field");
  const [selectedHours, setSelectedHours] = useState("Select Hours");

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
    // Close other dropdowns when opening this one
    setIsFieldDropdownOpen(false);
    setIsHoursDropdownOpen(false);
  };

  const toggleFieldDropdown = () => {
    setIsFieldDropdownOpen(!isFieldDropdownOpen);
    // Close other dropdowns when opening this one
    setIsLocationDropdownOpen(false);
    setIsHoursDropdownOpen(false);
  };

  const toggleHoursDropdown = () => {
    setIsHoursDropdownOpen(!isHoursDropdownOpen);
    // Close other dropdowns when opening this one
    setIsLocationDropdownOpen(false);
    setIsFieldDropdownOpen(false);
  };

  const handleLocationClick = (option) => {
    setSelectedLocation(option);
    setIsLocationDropdownOpen(false);
  };

  const handleFieldClick = (option) => {
    setSelectedField(option);
    setIsFieldDropdownOpen(false);
  };

  const handleHoursClick = (option) => {
    setSelectedHours(option);
    setIsHoursDropdownOpen(false);
  };

  const handleSave = () => {
    alert("Profile saved!");
  };

  return (
    <div className="user-profile-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />

          <Header />

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
              {/* Location Dropdown */}
              <div className="dropdown">
                <button onClick={toggleLocationDropdown} className="dropdown-btn">
                  {selectedLocation}
                </button>
                {isLocationDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleLocationClick("Chicago, IL")}>Chicago</a>
                    <a href="#" onClick={() => handleLocationClick("Austin, Texas")}>Austin</a>
                    <a href="#" onClick={() => handleLocationClick("New York, NY")}>New York</a>
                    <a href="#" onClick={() => handleLocationClick("Las Vegas, Nevada")}>Las Vegas, Nevada</a>
                  </div>
                )}
              </div>
              
              {/* Field Dropdown - NEW */}
              <div className="dropdown">
                <button onClick={toggleFieldDropdown} className="dropdown-btn">
                  {selectedField}
                </button>
                {isFieldDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleFieldClick("Hospitality")}>Hospitality</a>
                    <a href="#" onClick={() => handleFieldClick("Sports")}>Sports</a>
                    <a href="#" onClick={() => handleFieldClick("Community")}>Community</a>
                    <a href="#" onClick={() => handleFieldClick("Wildlife")}>Wildlife</a>
                  </div>
                )}
              </div>
              
              {/* Hours Dropdown - NEW */}
              <div className="dropdown">
                <button onClick={toggleHoursDropdown} className="dropdown-btn">
                  {selectedHours}
                </button>
                {isHoursDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="#" onClick={() => handleHoursClick("1 hours")}>1 hours</a>
                    <a href="#" onClick={() => handleHoursClick("2 hours")}>2 hours</a>
                    <a href="#" onClick={() => handleHoursClick("3 hours")}>3 hours</a>
                    <a href="#" onClick={() => handleHoursClick("4 hours")}>4 hours</a>
                  </div>
                )}
              </div>
              
              <button className="save-btn" onClick={handleSave}>Save</button>
            </div>

            <div className="text-wrapper-15">Preferences</div>

            <img className="img-2" alt="Img" src={userIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;