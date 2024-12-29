import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components for Layout and Cards
const HeroSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

const InfoWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const DiscountText = styled.p`
  font-size: 14px;
  color: #ff6347;
  font-weight: bold;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const TopBrandsTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

// App Component
function BrandCards() {
  // Image URLs for different products (you can replace these URLs with actual images)
  const productImages = {
    treats: 'https://via.placeholder.com/200x150?text=Treats+Image',
    shampoo: 'https://via.placeholder.com/200x150?text=Shampoo+Image',
    supercoat: 'https://via.placeholder.com/200x150?text=Supercoat+Image',
    bowlers: 'https://via.placeholder.com/200x150?text=Bowlers+Image',
    litter: 'https://via.placeholder.com/200x150?text=Litter+Image',
    medicines: 'https://via.placeholder.com/200x150?text=Medicines+Image',
  };

  return (
    <div>
      {/* TOP BRANDS Title */}
      <TopBrandsTitle>TOP BRANDS</TopBrandsTitle>

      <HeroSection>
        {/* Treats Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.treats} />
          <InfoWrapper>
            <Title>Goodies Treats</Title>
            <DiscountText>Upto 30% OFF</DiscountText>
          </InfoWrapper>
        </Card>

        {/* Shampoo Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.shampoo} />
          <InfoWrapper>
            <Title>Shampoo Wahl</Title>
            <DiscountText>Upto 12% OFF</DiscountText>
          </InfoWrapper>
        </Card>

        {/* Supercoat Food Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.supercoat} />
          <InfoWrapper>
            <Title>Supercoat Food</Title>
            <DiscountText>Upto 15% OFF</DiscountText>
          </InfoWrapper>
        </Card>

        {/* Bowlers Food Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.bowlers} />
          <InfoWrapper>
            <Title>Bowlers Food</Title>
            <DiscountText>Upto 10% OFF</DiscountText>
          </InfoWrapper>
        </Card>

        {/* Happy Cat Litter Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.litter} />
          <InfoWrapper>
            <Title>Happy Cat Litter</Title>
            <DiscountText>Upto 10% OFF</DiscountText>
          </InfoWrapper>
        </Card>

        {/* Mankind Medicines Card */}
        <Card>
          <ImageWrapper imgUrl={productImages.medicines} />
          <InfoWrapper>
            <Title>Mankind Medicines</Title>
            <DiscountText>Upto 10% OFF</DiscountText>
          </InfoWrapper>
        </Card>
      </HeroSection>

      {/* Hero Section Image */}
      <HeroImage src="https://via.placeholder.com/1920x600?text=Pet+Store+Promo" alt="Pet Store Promo" />
    </div>
  );
}

export default BrandCards;
