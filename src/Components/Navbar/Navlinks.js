import React, { useState } from 'react';
import styled from 'styled-components';

const PetStoreCategories = () => {
  // State for the dropdowns
  const [showGrooming, setShowGrooming] = useState(false);
  const [showDogs, setShowDogs] = useState(false);
  const [showCats, setShowCats] = useState(false);
  const [showPetStar, setShowPetStar] = useState(false);
  const [showVet, setShowVet] = useState(false);
  const [showPharmacy, setShowPharmacy] = useState(false);
  const [showLightningDeals, setShowLightningDeals] = useState(false);

  return (
    <Navbar>
      <NavContainer>
        <NavItem>
          <Category onClick={() => setShowGrooming(!showGrooming)}>
            Grooming {showGrooming ? '▲' : '▼'}
          </Category>
          {showGrooming && (
            <SubCategoryList>
              <SubCategoryItem>10:00 AM - 12:00 PM</SubCategoryItem>
              <SubCategoryItem>12:00 PM - 2:00 PM</SubCategoryItem>
              <SubCategoryItem>2:00 PM - 4:00 PM</SubCategoryItem>
              <SubCategoryItem>4:00 PM - 6:00 PM</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowDogs(!showDogs)}>
            Dogs {showDogs ? '▲' : '▼'}
          </Category>
          {showDogs && (
            <SubCategoryList>
              <SubCategoryItem>Food</SubCategoryItem>
              <SubCategoryItem>Accessories</SubCategoryItem>
              <SubCategoryItem>Treats</SubCategoryItem>
              <SubCategoryItem>Toys</SubCategoryItem>
              <SubCategoryItem>Clothes</SubCategoryItem>
              <SubCategoryItem>Collars</SubCategoryItem>
              <SubCategoryItem>Leashes</SubCategoryItem>
              <SubCategoryItem>Harness</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowCats(!showCats)}>
            Cats {showCats ? '▲' : '▼'}
          </Category>
          {showCats && (
            <SubCategoryList>
              <SubCategoryItem>Food</SubCategoryItem>
              <SubCategoryItem>Accessories</SubCategoryItem>
              <SubCategoryItem>Treats</SubCategoryItem>
              <SubCategoryItem>Toys</SubCategoryItem>
              <SubCategoryItem>Clothes</SubCategoryItem>
              <SubCategoryItem>Collars</SubCategoryItem>
              <SubCategoryItem>Leashes</SubCategoryItem>
              <SubCategoryItem>Harness</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowPetStar(!showPetStar)}>
            Pet Star {showPetStar ? '▲' : '▼'}
          </Category>
          {showPetStar && (
            <SubCategoryList>
              <SubCategoryItem>Special Offers</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowVet(!showVet)}>
            Consult a Vet {showVet ? '▲' : '▼'}
          </Category>
          {showVet && (
            <SubCategoryList>
              <SubCategoryItem>Available Vets</SubCategoryItem>
              <SubCategoryItem>Book Appointment</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowPharmacy(!showPharmacy)}>
            Pharmacy {showPharmacy ? '▲' : '▼'}
          </Category>
          {showPharmacy && (
            <SubCategoryList>
              <SubCategoryItem>Medications</SubCategoryItem>
              <SubCategoryItem>Supplements</SubCategoryItem>
              <SubCategoryItem>First Aid</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowLightningDeals(!showLightningDeals)}>
            Lightning Deals {showLightningDeals ? '▲' : '▼'}
          </Category>
          {showLightningDeals && (
            <SubCategoryList>
              <SubCategoryItem>Current Deals</SubCategoryItem>
              <SubCategoryItem>Upcoming Deals</SubCategoryItem>
            </SubCategoryList>
          )}
        </NavItem>
      </NavContainer>
    </Navbar>
  );
};

// Styled Components

const Navbar = styled.div`
  background-color: #2e3144;
  color: white;
  font-family: Arial, sans-serif;
  padding: 15px;
//   border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
//   margin: 20px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;  /* Align categories horizontally */
  justify-content: space-around; /* Evenly space categories */
  align-items: flex-start;
  width: 100%;
  overflow-x: auto;
`;

const NavItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const Category = styled.div`
  padding: 12px 20px;
  font-size: 18px;
  background-color: #3e4755;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-bottom: 10px;
  white-space: nowrap;

  &:hover {
    background-color: #444d67;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;

const SubCategoryList = styled.div`
  background-color: #3e4755;
  border-radius: 4px;
  padding: 10px 0;
  margin-top: 5px;
  width: 100%;
  display: block;  /* Make the subcategory list visible */
  position: relative;
`;

const SubCategoryItem = styled.div`
  padding: 8px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5a6276;
  }
`;

export default PetStoreCategories;
