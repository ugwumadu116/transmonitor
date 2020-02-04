import React, { useState } from "react";
import { Container, MobileNav } from "./elements";
import Burger from "../BurgerMenu";

var searchIcon = "assets/Search.svg";
var NotificationIcon = "assets/notification.svg";
var profilePhoto = "assets/profile-photo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  var number = 8;

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <nav className="navbar-container">
        <div className="container">
          <div className="navbar-content">
            <div className="column-one">
              <div className="brand">TransMonitor</div>
              <div className="searchbar">
                <div className="search-icon">
                  <img src={searchIcon} alt="" />
                </div>
                <div className="search-text">
                  <input
                    type="text"
                    name="search"
                    className="search"
                    placeholder="search..."
                  />
                </div>
              </div>
            </div>

            <div className="column-two">
              <div className="desktop-menu">
                <ul className="nav-items">
                  <li className="nav-links">Support</li>
                  <li className="nav-links">FAQ</li>
                  <li className="nav-links">
                    <div className="notification">
                      <img src={NotificationIcon} alt="" />
                      <div className="notification-number">{number}</div>
                    </div>
                  </li>
                  <li className="profile">
                    <div className="welcome">
                      <div className="hello">hello</div>
                      <div className="name">Oluwaleke Ojo</div>
                    </div>
                    <div className="profile-photo">
                      <img
                        src={profilePhoto}
                        alt=""
                        className="profile-photo"
                      />
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mobile-menu">
              
                <div onClick={toggleMenu} className="burger-menu">
                  <Burger clicked={toggle} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={(toggle && "box") || "box2"}>
        <MobileNav>
          <div className="m-Logo">
            <div onClick={toggleMenu} className="burger-menu">
              <Burger clicked={toggle}  />
            </div>
          </div>
          <div className="linkContainer">
            <div>
              <img src={NotificationIcon} alt="" />
              <div>{number}</div>
            </div>

            <div className="profile-photo">
              <img src={profilePhoto} alt="" className="profile-photo" />
            </div>

            <div className="mobile-menu-links">Support</div>
            <div className="mobile-menu-links">FAQ</div>
          </div>
        </MobileNav>
      </div>
    </Container>
  );
};

export default Navbar;
