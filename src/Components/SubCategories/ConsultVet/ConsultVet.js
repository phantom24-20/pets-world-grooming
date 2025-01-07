// src/pages/ConsultVet.js

import React, { useState } from 'react';
import styled from 'styled-components';

const ConsultVet = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, ideally send it to backend to email admin
    alert("Your query has been sent!");
    // Logic to send the form data to the backend
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Consult a Vet</Title>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <Label>Phone Number</Label>
        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        <Label>Your Query</Label>
        <TextArea
          name="query"
          value={formData.query}
          onChange={handleChange}
          placeholder="Describe your query"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

// Styled Components

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fc;
`;

const Form = styled.form`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 400px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #555;

  &:focus {
    outline: none;
    border-color: #0057e7;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #555;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: #0057e7;
  }
`;

const SubmitButton = styled.button`
  padding: 12px;
  background-color: #0057e7;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0040c1;
  }
`;

export default ConsultVet;
