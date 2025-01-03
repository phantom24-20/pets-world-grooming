import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const LoginPage = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRequestOtp = () => {
    setOtpRequested(true);
    // Here you would normally call your OTP request API
  };

  return (
    <Container>
      <LoginBox>
        <h2>Login to Pets World Grooming</h2>
        <Input 
          type="text" 
          placeholder="Mobile Number" 
          value={mobileNumber} 
          onChange={(e) => setMobileNumber(e.target.value)} 
        />
        <Button onClick={handleRequestOtp}>
          {otpRequested ? 'OTP Requested' : 'Request OTP'}
        </Button>
        <CheckboxLabel>
          <Checkbox 
            type="checkbox" 
            checked={isNotRobot} 
            onChange={(e) => setIsNotRobot(e.target.checked)} 
          />
          I'm not a robot
        </CheckboxLabel>
        <CheckboxLabel>
          <Checkbox 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
          />
          I have read all terms and conditions
        </CheckboxLabel>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
