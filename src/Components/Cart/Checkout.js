import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CheckoutBox = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const Checkout = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const handlePayment = () => {
    // Implement your payment integration here
    if (paymentMethod === 'razorpay') {
      // Redirect to Razorpay
      window.location.href = 'https://www.razorpay.com';
    } else if (paymentMethod === 'paypal') {
      // Redirect to PayPal
      window.location.href = 'https://www.paypal.com';
    }
  };

  return (
    <Container>
      <CheckoutBox>
        <h2>Checkout</h2>
        <Input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email Address" 
        />
        <Input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder="Delivery Address" 
        />
        <div>
          <label>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="razorpay" 
              checked={paymentMethod === 'razorpay'} 
              onChange={() => setPaymentMethod('razorpay')}
            /> 
            Razorpay
          </label>
          <label>
            <input 
              type="radio" 
              name="paymentMethod" 
              value="paypal" 
              checked={paymentMethod === 'paypal'} 
              onChange={() => setPaymentMethod('paypal')}
            /> 
            PayPal
          </label>
        </div>
        <Button onClick={handlePayment}>Pay Now</Button>
      </CheckoutBox>
    </Container>
  );
};

export default Checkout;