import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import react-router-dom for navigation
import { IoMenu } from "react-icons/io5";

const ToggleMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #2e3144;
  padding: 1.5rem;
  color: white;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  &.open {
    transform: translateX(0);
  }
`;

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 500;
`;

const ToggleButton = styled.button`
  top: 20px;
  left: 20px;
  background-color: #434190;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.1rem;

  &:hover {
    background-color: #3f4651;
  }
`;

const MenuLink = styled.a`
  display: block;
  font-size: 1.2rem;
  color: white;
  padding: 10px 15px;
  margin: 10px 0;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #434190;
  }

  &:active {
    background-color: #3f4651;
  }
`;

const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Use navigate for navigation

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigateTo = (path) => {
    navigate(path); // Navigate using react-router-dom
  };

  return (
    <>
      <IoMenu style={{cursor:"pointer",fontSize:"1.5rem"}} onClick={toggleMenu}>{isOpen ? "Close Menu" : "Open Menu"}</IoMenu>
      {isOpen && <MenuOverlay onClick={toggleMenu} />}
      <ToggleMenuContainer className={isOpen ? "open" : ""}>
        <MenuLink onClick={() => navigateTo("https://example.com/about-us")}>
          About Us
        </MenuLink>
        <MenuLink onClick={() => navigateTo("/vaccination")}> {/* Navigate to the Vaccination page */}
          Want to Get Your Pet Vaccinated?
        </MenuLink>
        <MenuLink onClick={() => navigateTo("https://example.com/notification-preferences")}>
          Notification Preferences
        </MenuLink>
        <MenuLink onClick={() => navigateTo("/BecomeInvestor")}>
          Become an Investor
        </MenuLink>
        <MenuLink onClick={() => navigateTo("/Merchandise")}>
          Merchandise
        </MenuLink>
        <MenuLink onClick={() => navigateTo("https://example.com/paawvana-donation")}>
          Paawvana Donation
        </MenuLink>
      </ToggleMenuContainer>
    </>
  );
};

export default ToggleMenu;
