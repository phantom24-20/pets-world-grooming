// src/components/CustomerDetails.js
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;  /* Limit the width for larger screens */
  margin: 40px auto;  /* Center the form with some space at the top */
  padding: 30px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 20px;  /* Add space between the form elements */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;  /* More padding for comfortable text input */
  margin: 8px 0;  /* Add margin for spacing between inputs */
  border-radius: 8px;  /* Round the corners of the input fields */
  border: 1px solid #ddd;
  font-size: 16px;  /* Increase font size for better readability */
  outline: none;
  transition: all 0.3s ease;

  /* Placeholder styling */
  &::placeholder {
    color: #aaa;  /* Lighter placeholder text color */
    font-style: italic;
  }

  /* Focus effect (highlight the input when it's active) */
  &:focus {
    border-color: #4CAF50;  /* Green border on focus */
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.2);  /* Soft green glow */
  }

  /* Disabled state */
  &:disabled {
    background-color: #f1f1f1;
    border-color: #ddd;
    cursor: not-allowed;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);  /* Lift effect */
  }

  &:active {
    background-color: #388E3C;
    transform: translateY(1px);  /* Press effect */
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


const ConsumerDeatils = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!/^[a-zA-Z]+$/.test(formData.name)) newErrors.name = 'Name should only contain letters.';
    if (!/^\+?[1-9]\d{1,14}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email.';
    if (!formData.address) newErrors.address = 'Address is required.';

    if (Object.keys(newErrors).length === 0) {
        // Navigate to the next page and pass customer details as state
        navigate('/reviews', { state: { customerData: formData } });
      } else {
        setErrors(newErrors);
      }
    
  };

  return (
    <FormWrapper>
      <h2>Customer Details</h2>
      <Input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="Name" />
      {errors.name && <p>{errors.name}</p>}

      <Input 
        type="text" 
        name="phone" 
        value={formData.phone} 
        onChange={handleChange} 
        placeholder="Phone Number" />
      {errors.phone && <p>{errors.phone}</p>}

      <Input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" />
      {errors.email && <p>{errors.email}</p>}

      <Input 
        type="text" 
        name="address" 
        value={formData.address} 
        onChange={handleChange} 
        placeholder="Address" />
      {errors.address && <p>{errors.address}</p>}

      <Button onClick={handleSubmit}>Go to Next Page</Button>
    </FormWrapper>
  );
};

export default ConsumerDeatils;
