// Navigation component with goal tracking
import "./NavBar.css"; 
import profileIcon from './assets/profile-icon.png';
function NavBar() {
    return (
      <nav className="nav-bar">

<       div className="task-bar-nav">
          <div className="overlap-group-nav">
            <div className="rectangle-3-nav" />

            <div className="text-wrapper-4-nav">Goal</div>

            <div className="text-wrapper-5-nav">0/100</div>

            <div className="text-wrapper-6-nav">Menu</div>

          </div>

          <img
            className="profile"
            alt="profile"
            src={profileIcon}

          />
        </div>
      </nav>
    );
  };
  
  
export default NavBar;