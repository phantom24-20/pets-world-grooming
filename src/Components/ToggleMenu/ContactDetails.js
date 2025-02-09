import React from "react";
import styled from "styled-components";

// Styled components
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
`;

const ContactCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
  text-align: center;
`;

const Title = styled.h2`
  color: #434190;
  font-size: 2rem;
  margin-bottom: 20px;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
`;

const EmailLink = styled.a`
  font-size: 1.2rem;
  color: #ff6f61;
  text-decoration: none;
  margin-top: 20px;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactDetails = () => {
  return (
    <ContactContainer>
      <ContactCard>
        <Title>Contact Us</Title>
        <InfoText>If you need help or have any questions, feel free to reach out!</InfoText>
        <InfoText>Our store is always here to assist you.</InfoText>
        <EmailLink href="mailto:contact@storeemail.com">Email Us: contact@storeemail.com</EmailLink>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactDetails;
