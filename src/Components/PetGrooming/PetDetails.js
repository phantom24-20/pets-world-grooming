import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 60%; /* Reduced width for better readability */
  margin: 40px auto; /* Space on top and bottom */
  padding: 30px;
  background-color: #fff;
  border-radius: 12px; /* Slightly rounder corners */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); /* Deeper shadow */
  max-width: 900px; /* Limit max width on large screens */
  text-align: center; /* Center the text and elements inside */
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333; /* Darker text color for better contrast */
  background-color: #fafafa; /* Light background for input */
  transition: border-color 0.3s ease; /* Smooth transition on focus */

  &:focus {
    border-color: #4CAF50; /* Green border on focus */
    outline: none;
    background-color: #f4f4f4; /* Slight background change on focus */
  }

  &::placeholder {
    color: #aaa; /* Lighter color for placeholder text */
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
  background-color: #fafafa;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    background-color: #f4f4f4;
  }
`;

const Button = styled.button`
  padding: 16px 30px;
  margin-top: 25px;
  background-color: #4CAF50; /* Primary green color */
  color: white;
  font-size: 18px; /* Larger font size for readability */
  font-weight: bold;
  border: none;
  border-radius: 12px; /* Rounded corners for the button */
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%; /* Full width for button */
  
  /* Box shadow for a soft 3D effect */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  /* Hover effect */
  &:hover {
    background-color: #45a049;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px); /* Subtle lift effect */
  }

  /* Active state */
  &:active {
    background-color: #3e8e41;
    transform: translateY(1px); /* Slight downward effect when clicked */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  /* Disabled state */
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  /* Focus effect for accessibility */
  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(0, 160, 209, 0.6); /* Blue glow on focus */
  }
`;



const PetDetails = () => {
  const navigate = useNavigate(); // Using useNavigate hook
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    breed: '',
    size: 'small',
    hairLength: 'short',
    isFerocious: 'no',
    isVaccinated: 'no'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({
      ...petData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Validation can be added here if necessary
    navigate('/package-selection', { state: { petData } }); // Pass pet data to next page
  };

  return (
    <FormWrapper>
      <h2>Pet Details</h2>
      <Input 
        type="text" 
        name="name" 
        value={petData.name} 
        onChange={handleChange} 
        placeholder="Pet's Name" 
      />
      <Input 
        type="number" 
        name="age" 
        value={petData.age} 
        onChange={handleChange} 
        placeholder="Pet's Age" 
      />
      <Input 
        type="text" 
        name="breed" 
        value={petData.breed} 
        onChange={handleChange} 
        placeholder="Breed" 
      />
      <Select name="size" value={petData.size} onChange={handleChange}>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        <option value="giant">Giant</option>
      </Select>
      <Select name="hairLength" value={petData.hairLength} onChange={handleChange}>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
      </Select>
      <p>Is Your Pet  Ferocious?</p>
      <Select name="isFerocious" value={petData.isFerocious} onChange={handleChange}>
        
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </Select>
      <p>Is Your Pet Vaccinated?</p>
      <Select name="isVaccinated" value={petData.isVaccinated} onChange={handleChange}>
        <option value="no">No</option>
        <option value="yes">Yes</option>
      </Select>

      <Button onClick={handleSubmit}>Go to Next Page</Button>
    </FormWrapper>
  );
};

export default PetDetails;
