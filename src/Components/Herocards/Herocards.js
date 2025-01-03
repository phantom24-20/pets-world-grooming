// import React from "react";
// export const Herocard = () =>{
//     return (
//         <>
        
//         </>
//     )
// }import React from "react";
import styled from "styled-components";
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
    background-color: #f9f9f9; /* Slight background change on hover */
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

  /* Highlighted part for the discount percentage */
  span {
    font-weight: bolder;
    font-size: 1.4rem;  /* Make the percentage part larger */
    color: #ff4500;  /* Make the discount percentage stand out */
  }
`;

const ProductCards = () => {
  const cards = [
    { category: "Dog food", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Dog+Food" },
    { category: "Cat food", discount: "Upto 35% off", imageUrl: "https://via.placeholder.com/150?text=Cat+Food" },
    { category: "Treats", discount: "Upto 25% off", imageUrl: "https://via.placeholder.com/150?text=Treats" },
    { category: "Premium Foods", discount: "Upto 25% off", imageUrl: "https://via.placeholder.com/150?text=Premium+Foods" },
    { category: "Winter wear", discount: "Upto 45% off", imageUrl: "https://via.placeholder.com/150?text=Winter+Wear" },
    { category: "Toys", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Toys" },
    { category: "Grooming", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Grooming" },
    { category: "Pharmacy", discount: "Upto 11% off", imageUrl: "https://via.placeholder.com/150?text=Pharmacy" },
    { category: "Litter Supplies", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Litter+Supplies" },
    { category: "Walk Essentials", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Walk+Essentials" },
    { category: "Beds & Mats", discount: "Upto 50% off", imageUrl: "https://via.placeholder.com/150?text=Beds+%26+Mats" },
    { category: "Travel Supplies", discount: "Upto 40% off", imageUrl: "https://via.placeholder.com/150?text=Travel+Supplies" },
  ];

  return (
    <>
    <Container>
      {cards.map((card, index) => (
        <Card key={index}>
          <Image bgImage={card.imageUrl} />
          <Category>{card.category}</Category>
          <Discount>
            {card.discount.split(" ")[0]} <span>{card.discount.split(" ")[1]}</span> {card.discount.split(" ")[2]}
          </Discount>
        </Card>
      ))}
    </Container>
    <Add/>
    <CarouselHero/>
    <FlashSale/>
   </>
    
  );
};

export default ProductCards;
