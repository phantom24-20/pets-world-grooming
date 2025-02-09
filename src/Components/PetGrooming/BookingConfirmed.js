// src/components/BookingConfirmed.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ThankYouWrapper = styled.div`
  text-align: center;
  margin: 50px auto;
  padding: 50px;
  background-color: #f7f9fc;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  font-family: 'Roboto', sans-serif;
`;

const Heading = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
`;

const Subheading = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 30px;
  font-weight: 400;
`;

const Message = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: #00A0D1;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 18px;
  border-radius: 8px;
  margin-top: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background-color: #008C99;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

const BackButton = styled.button`
  background-color: #f1f1f1;
  color: #333;
  padding: 12px 25px;
  border: 1px solid #ddd;
  cursor: pointer;
  font-size: 16px;
  margin-top: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #e5e5e5;
  }

  &:active {
    transform: translateY(2px);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BookingConfirmed = () => {
  const history = useNavigate();
  
  const handleBack = () => {
    history.goBack();
  };
  
  const handleReturnHome = () => {
    // Redirect to the home page or main grooming page
    history.push('"/consumerDetails');
  };

  return (
    <ThankYouWrapper>
      <Heading>Your Booking is Confirmed!</Heading>
      <Subheading>Thank you for choosing our grooming services.</Subheading>
      <Message>Your pet's grooming session has been successfully booked! We look forward to serving you and your pet.</Message>
      
      <ButtonContainer>
        <Button onClick={handleReturnHome}>Return to Home</Button>
        <BackButton onClick={handleBack}>Back</BackButton>
      </ButtonContainer>
    </ThankYouWrapper>
  );
};

export default BookingConfirmed;
