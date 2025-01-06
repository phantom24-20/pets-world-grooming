import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// Styled Components
const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 12px;
  background-color: #008CBA;
  color: white;
  border: none;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #005f73;
  }
`;

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState({
    customerName: '',
    customerEmail: '',
    serviceType: '',
    amount: 0,
  });
  const [orderStatus, setOrderStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Sending order details to backend to place the order and trigger email notifications
      const response = await axios.post('/api/place-order', orderDetails);
      
      if (response.data.success) {
        setOrderStatus('Order placed successfully! Confirmation emails sent.');
      } else {
        setOrderStatus('Failed to place the order. Please try again.');
      }
    } catch (error) {
      setOrderStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <Container>
      <Title>Place Order</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="customerName"
          placeholder="Your Name"
          value={orderDetails.customerName}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="customerEmail"
          placeholder="Your Email"
          value={orderDetails.customerEmail}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="serviceType"
          placeholder="Service Type"
          value={orderDetails.serviceType}
          onChange={handleChange}
        />
        <Input
          type="number"
          name="amount"
          placeholder="Amount"
          value={orderDetails.amount}
          onChange={handleChange}
        />
        <Button type="submit">Place Order</Button>
      </Form>
      {orderStatus && <p>{orderStatus}</p>}
    </Container>
  );
};

export default OrderConfirmation;
