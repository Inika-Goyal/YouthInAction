// MenuDropDown.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Internal styles - all included in the same file
const styles = {
    menuContainer: {
      position: 'fixed', // Fixes it to the viewport
      top: '10px', // Distance from the top of the page
      right: '70px', // Distance from the right edge of the page
      display: 'inline-block',
      zIndex: 1000 // Ensures it appears above other elements
    },
  menuButton: {
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: '"Gowun Batang-Regular", Helvetica',
    fontSize: '15px',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100px',
    height: '40px'
  },
  menuButtonHover: {
    backgroundColor: '#333333'
  },
  dropdownMenu: {
    position: 'absolute',
    top: '100%', // Position directly below the button
    left: 0,
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: '"Gowun Batang-Regular", Helvetica',
    fontSize: '15px',
    border: '1px solid #333',
    borderRadius: '4px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    minWidth: '180px',
    zIndex: 1001
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  menuItem: {
    padding: '10px 16px',
    cursor: 'pointer'
  },
  menuItemHover: {
    backgroundColor: '#333333'
  }
};

function MenuDropDown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const [hoveredItem, setHoveredItem] = useState(null); // Track hovered menu item
  const navigate = useNavigate(); // Navigate between pages
  
  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  
  // Handle navigation on item click
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };
  
  return (
    <div style={styles.menuContainer}>
      {/* Menu Button positioned on the left */}
      <button 
        style={styles.menuButton}
        onClick={toggleMenu}
      >
        Menu
      </button>
      
      {/* Dropdown Menu positioned below the button */}
      {isMenuOpen && (
        <div style={styles.dropdownMenu}>
          <ul style={styles.menuList}>
            <li 
              style={{
                ...styles.menuItem,
                ...(hoveredItem === 'profile' ? styles.menuItemHover : {})
              }}
              onClick={() => handleNavigation('/user')}
              onMouseEnter={() => setHoveredItem('profile')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              User Profile
            </li>
            <li 
              style={{
                ...styles.menuItem,
                ...(hoveredItem === 'saved' ? styles.menuItemHover : {})
              }}
              onClick={() => handleNavigation('/savedAppPage')}
              onMouseEnter={() => setHoveredItem('saved')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Saved Applications
            </li>
            <li 
              style={{
                ...styles.menuItem,
                ...(hoveredItem === 'logout' ? styles.menuItemHover : {})
              }}
              onClick={() => handleNavigation('/')}
              onMouseEnter={() => setHoveredItem('logout')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default MenuDropDown;