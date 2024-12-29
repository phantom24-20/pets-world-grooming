// App.js

import React, { useState } from 'react';
import styled from 'styled-components';

// You can replace this URL with a path to your own image
const pharmacyImage = 'https://via.placeholder.com/1500x800.png?text=Pharmacy+Image';

const Pharmacy = () => {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleContactClick = () => {
    setShowContactOptions(!showContactOptions);
  };

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <h1>Welcome to Your Trusted Pharmacy</h1>
          <p>Your health is our priority. We offer a wide range of medical supplies and prescriptions.</p>
          <ContactButton onClick={handleContactClick}>Contact Us</ContactButton>
        </HeroContent>

        {showContactOptions && (
          <ContactOptions>
            <Option>
              <h3>Call Us</h3>
              <p>+91 ***********</p>
            </Option>
            <Option>
              <h3>Email Us</h3>
              <p>support@pharmacy.com</p>
            </Option>
          </ContactOptions>
        )}
      </HeroSection>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const HeroSection = styled.section`
  background-image: url(${pharmacyImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100%;
  color:#357544;
  text-align: center;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const HeroContent = styled.div`
  z-index: 1;
  margin-bottom: 20px;

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const ContactButton = styled.button`
  background-color:#b8d853;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color:#357544;
  }
`;

const ContactOptions = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  gap: 20px;
  z-index: 1;
`;

const Option = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 15px 25px;
  border-radius: 8px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  
  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
  
  p {
    font-size: 1rem;
  }
`;

export default Pharmacy;
