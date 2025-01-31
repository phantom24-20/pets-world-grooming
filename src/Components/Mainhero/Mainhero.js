import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';  // Import useLocation and useNavigate
import { Routes, Route } from 'react-router-dom';  // Import Routes and Route
import AdImage from "../../assets/Banner.jpg";  // Ensure this is the correct path to your image
import ProductCards from '../Herocards/Herocards';
import DogFoodPage from '../PetComponents/DogFood';
import CatFoodPage from '../PetComponents/CatFood';
import HeroLuxe from '../Herocards/Luxue';
import Pharmacy from '../Herocards/Pharmacy';
import CatsAdd from '../Herocards/CatsAdd';
import BrandCards from '../Herocards/BrandCards';
import VetCare from '../Herocards/VetCare';
import DemoReviews from '../Herocards/DemoReview';
import PetStar from '../PetStar/PetStar';  // Import the PetStar component
import Add from '../Herocards/Add';
import ClothingEssentials from '../Clothing/Clothing';
import BrandDetails from './BrandDetails';
import ShopPage from '../Herocards/CatsAdPage';
import MainFooter from '../Footer/Footer';
import SocialMedia from '../SocialMedia/SocialMedia';

// Styled Components
const AdContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  background: url(${AdImage}) no-repeat center center;
  padding: 80px 0;
  color: white;
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

const AdContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5);
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

const Mainhero = () => {
  const location = useLocation();
  const [showAd, setShowAd] = useState(true);
  const navigate = useNavigate();  // Hook to navigate programmatically

  // Hide the ad on any route other than the main page '/'
  useEffect(() => {
    if (location.pathname !== '/') {
      setShowAd(false);
    } else {
      setShowAd(true);
    }
  }, [location]);

  // Function to handle "Shop Now" button click
  const handleShopNow = () => {
    navigate("/PetStar");  // Navigate to the PetStar component
  };

  return (
    <div>
      {/* Conditionally render the AdContainer */}
      {showAd && (
        <AdContainer>
          <AdContent>
            <Heading>Pet Star Dog Food</Heading>
            <SubHeading>Give your dog the best with Pet Star – nutritious, tasty, and loved by dogs everywhere!</SubHeading>
            <Button onClick={handleShopNow}>Shop Now</Button> {/* Trigger navigation on click */}
          </AdContent>
        </AdContainer>
      )}

      <Routes>
        {/* Main routes */}
        <Route path="/" element={<ProductCards />} />  {/* Main product list */}
        <Route path="/add" element={<Add />} />
        <Route path="/clothing" element={<ClothingEssentials />} />
        <Route path="/dog-food" element={<DogFoodPage />} />  {/* Dog Food page */}
        <Route path="/cat-food" element={<CatFoodPage />} />  {/* Cat Food page */}

        {/* Other category routes */}
        <Route path="/luxury " element={<HeroLuxe />} />
        <Route path="/pharmacy" element={<Pharmacy />} />
        <Route path="/cats-add" element={<CatsAdd />} />
        <Route path="/brands" element={<BrandCards />} />
        <Route path="/vet-care" element={<VetCare />} />
        <Route path="/reviews" element={<DemoReviews />} />
        
        {/* PetStar component route */}
        <Route path="/PetStar" element={<PetStar />} />
        <Route path="/" element={<HeroLuxe/>} />  {/* Main page with the brand cards */}
        <Route path="/brand/:brandId" element={<BrandDetails />}/> {/* PetStar page */}
        <Route path="/" element={<CatsAdd />} />  {/* Main page with hero section */}
        <Route path="/shop" element={<ShopPage />} />  {/* Shop page to display product cards */}
      </Routes>
      <HeroLuxe /> 
     
      <Pharmacy />
      <CatsAdd />
      <BrandCards />
      <VetCare />
      <DemoReviews />
      <SocialMedia/>
      <MainFooter/>
 
    </div>
  );
};

export default Mainhero;
