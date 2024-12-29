import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0;
  font-family: 'Arial', sans-serif;
  color: #333;
`;

const ReviewImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 2px solid #ddd;
`;

const ReviewText = styled.p`
  font-size: 16px;
  color: #555;
  padding: 15px;
  font-family: 'Arial', sans-serif;
`;

const NGOContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 20px;
`;

const NGOButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007BFF;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const ArrowButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  margin: 10px;
  position: relative;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

const ReviewCard = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <Card>
      <Title>Customer Reviews</Title>
      <ReviewImage
        src={reviews[currentIndex].image}
        alt={`Review ${currentIndex + 1}`}
      />
      <ReviewText>{reviews[currentIndex].review}</ReviewText>
      <div>
        <ArrowButton onClick={prevReview}>&lt;</ArrowButton>
        <ArrowButton onClick={nextReview}>&gt;</ArrowButton>
      </div>
    </Card>
  );
};

export default ReviewCard;

