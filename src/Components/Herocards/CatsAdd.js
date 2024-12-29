// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';

// Styled-components for styling
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://your-image-url.com/carniwel-food.jpg'); /* Replace with your image URL */
  background-size: cover;
  background-position: center;
  color: white;
  font-family: 'Arial', sans-serif;
  text-align: center;
  position: relative;
`;

const HeroContent = styled.div`
  z-index: 1;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background for readability */
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ff9900; /* Carniwel brand color */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e68900;
  }
`;

const Text = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const CatsAdd = () => {
  // State to manage the visibility of the extra text
  const [showText, setShowText] = useState(false);

  const toggleText = () => {
    setShowText(prevState => !prevState);
  };

  return (
    <HeroContainer>
      <HeroContent>
        <h1>Carniwel - Premium Cat Food</h1>
        {showText && <Text>Your cat deserves the best with Carniwel. Made with quality ingredients for a healthy life!</Text>}
        <Button onClick={toggleText}>
          {showText ? 'Hide Details' : 'Show Details'}
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default CatsAdd;
