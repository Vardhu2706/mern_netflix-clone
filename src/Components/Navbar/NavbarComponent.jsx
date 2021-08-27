// Navbar Component

// Importing Helpers/Components/Styles
import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import "./NavbarStyles.scss";

const NavbarComponent = () => {
  // State Variables
  const [isScrolled, setIsScrolled] = useState(false);

  // Window On Scroll Listener
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);

    // Function Cleanup
    return () => (window.onscroll = null);
  };

  // Return
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix-logo"
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New &amp; Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>KIDS</span>
          <Notifications className="icon" />
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
            alt="profile_pic"
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;
