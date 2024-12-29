import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for layout and styling
const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding: 40px 20px;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
`;

const BrandContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const BrandCard = styled.div`
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BrandImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 15px;
  border-radius: 50%;
`;

const BrandName = styled.h3`
  font-size: 1.2rem;
  color: #34495e;
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-top: 10px;
`;

// HeroCard functional component
const HeroLuxe = () => {
  // State for dynamic brand info (you can expand this with more dynamic data)
  const [brands] = useState([
    {
      name: 'Origin',
      image: 'https://via.placeholder.com/100',
      description: 'Premium dog and cat food brand.',
    },
    {
      name: 'N&D',
      image: 'https://via.placeholder.com/100',
      description: 'Veterinary recommended pet food brand.',
    },
    {
      name: 'Bark Out Loud',
      image: 'https://via.placeholder.com/100',
      description: 'Natural pet food with high-quality ingredients.',
    },
    {
      name: 'Taste Of Cold',
      image: 'https://via.placeholder.com/100',
      description: 'Holistic approach to pet food and treats.',
    },
    {
      name: 'Kong',
      image: 'https://via.placeholder.com/100',
      description: 'Biologically appropriate pet food with fresh ingredients.',
    },
  ]);

  return (
    <HeroContainer>
      <HeroTitle>Luxury Pet Brands</HeroTitle>
      <BrandContainer>
        {brands.map((brand, index) => (
          <BrandCard key={index}>
            <BrandImage src={brand.image} alt={brand.name} />
            <BrandName>{brand.name}</BrandName>
            <BrandDescription>{brand.description}</BrandDescription>
          </BrandCard>
        ))}
      </BrandContainer>
    </HeroContainer>
  );
};

export default HeroLuxe;