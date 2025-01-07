import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";  // Import useNavigate for programmatic navigation
import Add from "./Add";
import CarouselHero from "./Carousel";
import FlashSale from "./FlashSale";

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Ensure 6 categories per row */
  gap: 20px;
  padding: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr); /* Adjust to 4 items per row for medium screens */
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust to 2 items per row for small screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
  }
`;

const Image = styled.div`
  height: 150px;
  background-color: #f8f8f8;
  margin-bottom: 15px;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const Category = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const Discount = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
  color: green;
  margin-top: 10px;

  span {
    font-weight: bolder;
    font-size: 1.4rem;
    color: #ff4500;
  }
`;

const ProductCards = () => {
  const navigate = useNavigate(); // Hook to navigate to different pages
  
  const cards = [
    { category: "Dog food", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Dog+Food", page: "/dog-food" },
    { category: "Cat food", discount: "Upto 35% off", imageUrl: "https://via.placeholder.com/150?text=Cat+Food", page: "/cat-food" },
    { category: "Treats", discount: "Upto 25% off", imageUrl: "https://via.placeholder.com/150?text=Treats", page: "/treats" },
    { category: "Premium Foods", discount: "Upto 25% off", imageUrl: "https://via.placeholder.com/150?text=Premium+Foods", page: "/premium-foods" },
    { category: "Winter wear", discount: "Upto 45% off", imageUrl: "https://via.placeholder.com/150?text=Winter+Wear", page: "/winter-wear" },
    { category: "Toys", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Toys", page: "/toys" },
    { category: "Grooming", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Grooming", page: "/grooming" },
    { category: "Pharmacy", discount: "Upto 11% off", imageUrl: "https://via.placeholder.com/150?text=Pharmacy", page: "/pharmacy" },
    { category: "Litter Supplies", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Litter+Supplies", page: "/litter-supplies" },
    { category: "Walk Essentials", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Walk+Essentials", page: "/walk-essentials" },
    { category: "Beds & Mats", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Beds+%26+Mats", page: "/beds-mats" },
    { category: "Travel Supplies", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Travel+Supplies", page: "/travel-supplies" },
  ];

  const handleCardClick = (page) => {
    // Custom action before navigating (e.g., log the category click, update state, etc.)
    console.log(`Navigating to ${page}`); // Example action
    navigate(page); // Navigate to the respective category page
  };

  return (
    <>
      <Container>
        {cards.map((card, index) => (
          <Card key={index} onClick={() => handleCardClick(card.page)}>
            <Image bgImage={card.imageUrl} />
            <Category>{card.category}</Category>
            <Discount>
              {card.discount.split(" ")[0]} <span>{card.discount.split(" ")[1]}</span> {card.discount.split(" ")[2]}
            </Discount>
          </Card>
        ))}
      </Container>
      <Add />
      <CarouselHero />
      <FlashSale/>
    </>
  );
};

export default ProductCards;
