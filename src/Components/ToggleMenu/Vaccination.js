import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const QuestionWrapper = styled.div`
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 15px 30px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }
`;

const InputWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 300px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;

  &:focus {
    border-color: #4CAF50;
    outline: none;
  }
`;

const Vaccination = () => {
  const [hasVaccinated, setHasVaccinated] = useState(null);
  const [contactDetails, setContactDetails] = useState({
    phone: '',
    email: '',
  });

  const handleVaccinationAnswer = (answer) => {
    setHasVaccinated(answer);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({
      ...contactDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (contactDetails.phone && contactDetails.email) {
      alert('Thank you! Your details have been submitted.');
    } else {
      alert('Please fill in both phone number and email address.');
    }
  };

  return (
    <Container>
      <Title>Has your pet been vaccinated?</Title>
      <QuestionWrapper>
        <Button onClick={() => handleVaccinationAnswer(true)}>Yes</Button>
        <Button onClick={() => handleVaccinationAnswer(false)}>No</Button>
      </QuestionWrapper>

      {hasVaccinated !== null && (
        <InputWrapper>
          <h3>Enter your contact details</h3>
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={contactDetails.phone}
            onChange={handleInputChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={contactDetails.email}
            onChange={handleInputChange}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </InputWrapper>
      )}
    </Container>
  );
};

export default Vaccination;
