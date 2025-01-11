import React from 'react';
import styled from 'styled-components';

// Styled-components for layout and styling
const ShopContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  text-align: center;
  padding: 15px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 50%;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #34495e;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
`;

const products = [
  {
    name: 'Carniwel Salmon Meal',
    image: 'https://via.placeholder.com/100',
    price: '$35.00',
    id: 'salmon-meal',
  },
  {
    name: 'Carniwel Chicken Delight',
    image: 'https://via.placeholder.com/100',
    price: '$30.00',
    id: 'chicken-delight',
  },
  {
    name: 'Carniwel Tuna Feast',
    image: 'https://via.placeholder.com/100',
    price: '$25.00',
    id: 'tuna-feast',
  },
  {
    name: 'Carniwel Lamb & Rice',
    image: 'https://via.placeholder.com/100',
    price: '$28.00',
    id: 'lamb-rice',
  },
  // Add more products here
];

const ShopPage = () => {
  return (
    <ShopContainer>
      {products.map((product, index) => (
        <ProductCard key={index}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>{product.price}</ProductPrice>
        </ProductCard>
      ))}
    </ShopContainer>
  );
};

export default ShopPage;
