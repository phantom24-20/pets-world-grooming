// FlashSale.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

// Image paths (placeholders, replace with actual images)
// import dogTreats from './assets/dog-treats.jpg';
// import catToys from './assets/cat-toys.jpg';
// import petAccessories from './assets/pet-accessories.jpg';
// import dogToy from './assets/dog-toy.jpg';

// Styled components
const FlashSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  width: 100%;
`;

const FlashSaleHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f56b00;
  text-align: center;
`;

const CountdownText = styled.div`
  font-size: 1.5rem;
  color: #ff4d4d;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 80%;
  margin-bottom: 30px;
  padding: 10px;
  scrollbar-width: thin;
  scrollbar-color: #f56b00 transparent;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f56b00;
    border-radius: 4px;
  }
`;

const ItemCard = styled.div`
  width: 300px;
  margin-right: 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  padding: 15px;
  text-align: center;
`;

const ItemName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #f56b00;
`;

const ItemDiscount = styled.p`
  font-size: 1rem;
  text-decoration: line-through;
  color: #999;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #f56b00;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7b42;
  }
`;

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const countdownTime = new Date().getTime() + 3600000; // 1 hour from now
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(countdownTime - now);

      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const items = [
    { name: 'Dog Treats', image: "dog treats", price: '$9.99', originalPrice: '$14.99', discount: '30% OFF' },
    { name: 'Cat Toys', image: "catToys", price: '$5.99', originalPrice: '$8.99', discount: '33% OFF' },
    { name: 'Pet Accessories', image: "petAccessories", price: '$19.99', originalPrice: '$24.99', discount: '20% OFF' },
    { name: 'Dog Toy', image: "dogToy", price: '$11.99', originalPrice: '$15.99', discount: '25% OFF' },
  ];

  return (
    <FlashSaleContainer>
      <FlashSaleHeader>Flash Sale - Pets Essentials</FlashSaleHeader>
      <CountdownText>
        Flash Sale ends in: <Countdown date={Date.now() + timeLeft} daysInHours={true} />
      </CountdownText>
      
      <CarouselContainer>
        {items.map((item, index) => (
          <ItemCard key={index}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemName>{item.name}</ItemName>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemDiscount>{item.originalPrice}</ItemDiscount>
              <p>{item.discount}</p>
              <AddToCartButton>Add to Cart</AddToCartButton>
            </ItemDetails>
          </ItemCard>
        ))}
      </CarouselContainer>
    </FlashSaleContainer>
  );
};

export default FlashSale;
