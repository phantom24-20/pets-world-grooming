import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


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

              <SubCategoryItem>
              <StyledLink to="/slots/grooming-flow" target="_blank"
              rel="noopener noreferrer">BOOK YOUR SLOTS</StyledLink>
                </SubCategoryItem>
              {/* <SubCategoryItem>12:00 PM - 2:00 PM</SubCategoryItem>
              <SubCategoryItem>2:00 PM - 4:00 PM</SubCategoryItem>
              <SubCategoryItem>4:00 PM - 6:00 PM</SubCategoryItem> */}
            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowDogs(!showDogs)}>
            Dogs {showDogs ? '▲' : '▼'}
          </Category>
          {showDogs && (
            <SubCategoryList>
              <SubCategoryItem>
                <StyledLink to="/subcategory/food" target="_blank"
              rel="noopener noreferrer">Food</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
                <StyledLink to="/subcategory/treats">Treats</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/accessories">Accessories</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/toys">Toys</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/clothes">Clothing</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/collars">Collars & Leashes & Harness</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/leashes">Grooming Accessories</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/harness">Dog Beds</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/harness">Bowls</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/harness">Health</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/subcategory/harness">Hygiene & Training Supplies</StyledLink>
              </SubCategoryItem>
              {/* Add more subcategories here */}
            </SubCategoryList>
          )}
        </NavItem>
    

        <NavItem>
          <Category onClick={() => setShowCats(!showCats)}>
            Cats {showCats ? '▲' : '▼'}
          </Category>
          {showCats && (
            <SubCategoryList>
              <SubCategoryItem>
              <StyledLink to="/cat/food">Food</StyledLink>
              </SubCategoryItem>
              
              <SubCategoryItem>
              <StyledLink to="/cat/accessories">Accessories</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/cat/treats">Treats</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/cat/toys">Toys</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/cat/clothes">Clothes</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/cat/leashes">Leashes</StyledLink>
              </SubCategoryItem>
              <SubCategoryItem>
              <StyledLink to="/cat/harness">Harness</StyledLink>
              </SubCategoryItem>
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
              <SubCategoryItem >Available Vets</SubCategoryItem>
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
              <SubCategoryItem> <StyledLink to="/pharm/more">CLICK FOR MORE</StyledLink>
              </SubCategoryItem>
              {/* <SubCategoryItem>Supplements</SubCategoryItem>
              <SubCategoryItem>First Aid</SubCategoryItem> */}

            </SubCategoryList>
          )}
        </NavItem>

        <NavItem>
          <Category onClick={() => setShowLightningDeals(!showLightningDeals)}>
            Lightning Deals {showLightningDeals ? '▲' : '▼'}
          </Category>
          {showLightningDeals && (
            <SubCategoryList>
              <SubCategoryItem  >
              <StyledLink to="/deals/lightning">Current Deals</StyledLink>
              </SubCategoryItem>
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
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
export default PetStoreCategories;
