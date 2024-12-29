import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components

const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
`;

const NavbarContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.section`
  background-image: url('https://via.placeholder.com/1500x800/0000FF/808080?text=Winter+Pets'); /* Replace with your winter background image */
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 0 20px;
  margin-top: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const HeroContent = styled.div`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding-bottom: 15px;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
`;

const HeroDescription = styled.p`
  font-size: 18px;
  margin: 20px 0;
  line-height: 1.5;
  color: #ddd;
`;

const ShopButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #45a049;
  }
`;

const Add = () => {
  // Initialize state for button text
  const [buttonText, setButtonText] = useState("Shop Now");

  // Handle button click and change text
  const handleClick = () => {
    setButtonText("Added to Cart");
  };

  return (
    <Container>
      {/* Navbar Section */}
      <NavbarContainer>
        <h1>Winter Essentials for Pets</h1>
      </NavbarContainer>

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>Shop Winter Essentials for Your Pets</HeroTitle>
          <HeroDescription>
            Keep your pets cozy and stylish with our range of winter clothing, accessories, and more!
          </HeroDescription>
          <ShopButton onClick={handleClick}>{buttonText}</ShopButton>
        </HeroContent>
      </HeroSection>
    </Container>
  );
};

export default Add;
