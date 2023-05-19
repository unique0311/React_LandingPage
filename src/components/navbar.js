import React, {useState} from "react";
import '../CSS/navbar.css';

const Navbar = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const setSideHamburgerToggle = () => {
    setSideToggle(!sideToggle);
  }

  return (
    <nav className="navbar_container">
      <div className="latest_alert">
        We are currently working on slow proxy servers, click here for updates
      </div>
      <div className="navbar_maincontainer">
        <a href="/#home" className="logo_setting">Logo</a>
        <div className="main_navbarDetail">
          <a href="/#ourProducts" className="navbarDetail_link">Our Products</a>
          <a href="/#howWeCompare" className="navbarDetail_link">How We Compare</a>
          <a href="/#pricingPlans" className="navbarDetail_link">Pricing Plans</a>
          <a href="/#faq" className="navbarDetail_link">FAQ</a>
        </div>
        <div className="login_buttonSetting">
          <button className="login_setting">Log in</button>
          <button className="signup_setting">Sign Up</button>
        </div>
        <div className="hamburger_menu" onClick={() => setSideHamburgerToggle()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={`backdrop ${!sideToggle ? 'showmenu' : ''}`} onClick={() => setSideHamburgerToggle(false)}/>
      <div className={`dropDrawer ${sideToggle ? 'showmenu' : ''}`} onClick={() => setSideHamburgerToggle}>
        <div className="dropdownMenu_container">
          <a href="/#ourProducts" className="navbarDetail_link">Our Products</a>
          <a href="/#howWeCompare" className="navbarDetail_link">How We Compare</a>
          <a href="/#pricingPlans" className="navbarDetail_link">Pricing Plans</a>
          <a href="/#faq" className="navbarDetail_link">FAQ</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;