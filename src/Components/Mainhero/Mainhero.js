import React from 'react';
import styled from 'styled-components';
import ProductCards from '../Herocards/Herocards';
import HeroLuxe from '../Herocards/Luxue';
import AdImage from "../../assets/Banner.jpg";  // Ensure this is the correct path to your image
import Pharmacy from '../Herocards/Pharmacy';
import CatsAdd from '../Herocards/CatsAdd';
import BrandCards from '../Herocards/BrandCards';
import VetCare from '../Herocards/VetCare';
import DemoReviews from '../Herocards/DemoReview';
// Styled Components
const AdContainer = styled.div`
  width: 100%;
  margin-top: 20px; /* Space after navbar and search bar */
  background: url(${AdImage}) no-repeat center center;  /* Ensure the image is centered */
  padding: 80px 0;  /* Adjusted padding to ensure text is clear */
  color: white;
  background-size: cover;  /* Makes sure the image covers the entire container */
  background-position: center center; /* Centers the image */
  background-repeat: no-repeat;  /* Ensures the image doesn't repeat if it’s smaller than the container */
  height: 100vh;  /* Full viewport height to make it full-screen */
`;

const AdContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5); /* Transparent black background to improve text visibility */
  border-radius: 10px;
  padding: 20px;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #fff;
  font-family: 'Arial', sans-serif;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubHeading = styled.h2`
  font-size: 24px;
  color: #ddd;
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background-color: #ff9900;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e68900;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  padding: 20px;
  display: none; /* Hides this section, as the image is set as the background */
`;

const Mainhero = () => {
  return (
    <div>
    <AdContainer>
      <AdContent>
        <Heading>Pet Star Dog Food</Heading>
        <SubHeading>Give your dog the best with Pet Star – nutritious, tasty, and loved by dogs everywhere!</SubHeading>
        <Button>Shop Now</Button>
      </AdContent>
      <ImageSection>
        {/* ImageSection is hidden as the background image is set */}
      </ImageSection>
    </AdContainer>
    <ProductCards/>
    <HeroLuxe/>
    <Pharmacy/>
    <CatsAdd/>
    <BrandCards/>
    <VetCare/>
    <DemoReviews/>
    </div>
  );
};

export default Mainhero;
