import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const PaymentPageWrapper = styled.div`
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 30px auto;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #555;
  margin-bottom: 8px;
`;

const AmountSection = styled.div`
  background-color: #00A0D1;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00A0D1;
  color: white;
  padding: 15px 30px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 8px;
  margin-top: 20px;
  
  &:hover {
    background-color: #008C99;
  }
`;

const PaymentPage = () => {
  const location = useLocation();
  const { selectedPackage, sessions, addOns, totalAmount, selectedSlots } = location.state || {}; 

  const navigate = useNavigate();

  // Razorpay Payment Handler
  const handleRazorpayPayment = () => {
    fetch('/create-order', {
      method: 'POST',
      body: JSON.stringify({
        amount: totalAmount,
      }),
    })
    .then(res => res.json())
    .then(data => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY',
        amount: data.amount,
        currency: 'INR',
        name: 'Pet Grooming Service',
        description: 'Pet Grooming Session',
        order_id: data.order_id,
        handler: function (response) {
          console.log('Payment Successful:', response);
          navigate('/booking-confirmed');
        },
        prefill: {
          name: 'Customer', // Set default name
        },
        theme: {
          color: '#00A0D1',
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    });
  };

  // PayPal Payment Handler
  const handlePayPalPayment = () => {
    console.log("PayPal payment initiated");
  };

  // Handle the case where some data is missing
  const safePackage = selectedPackage && selectedPackage.trim() !== '' ? selectedPackage : 'Not Selected';
  const safeSessions = sessions || 'Not Available';
  const safeAddOns = addOns || {};
  const safeSlots = selectedSlots || [];
  const safeAmount = totalAmount || 0;

  // Load the PayPal script dynamically
  useEffect(() => {
    // Dynamically load PayPal script for the button
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: safeAmount.toString(),
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Payment Successful:", details);
            navigate('/booking-confirmed');
          });
        },
        onError: (err) => {
          console.error("PayPal Error:", err);
        },
      }).render('#paypal-button-container'); // Renders PayPal button inside the container
    }
  }, [safeAmount, navigate]);

  return (
    <PaymentPageWrapper>
      <Title>Payment Summary</Title>
      
      <Section>
        <SectionTitle>Selected Package</SectionTitle>
        <List>
          <ListItem><strong>{safePackage.charAt(0).toUpperCase() + safePackage.slice(1)} Package</strong></ListItem>
          {['basic', 'standard', 'premium'].includes(safePackage.toLowerCase()) && (
            <ListItem><strong>Sessions:</strong> {safeSessions} Sessions</ListItem>
          )}
        </List>
      </Section>

      <Section>
        <SectionTitle>Selected Add-Ons</SectionTitle>
        <List>
          {Object.keys(safeAddOns).length === 0 ? (
            <ListItem>No Add-Ons Selected</ListItem>
          ) : (
            Object.keys(safeAddOns).map((addon) => (
              safeAddOns[addon] && (
                <ListItem key={addon}>
                  <strong>{addon.charAt(0).toUpperCase() + addon.slice(1).replace(/([A-Z])/g, ' $1')}</strong>
                </ListItem>
              )
            ))
          )}
        </List>
      </Section>

      <Section>
        <SectionTitle>Selected Session Timings</SectionTitle>
        <List>
          {safeSlots.length === 0 ? (
            <ListItem>No Sessions Selected</ListItem>
          ) : (
            safeSlots.map((slot, index) => (
              slot && <ListItem key={index}>Session {index + 1}: {slot}</ListItem>
            ))
          )}
        </List>
      </Section>

      <AmountSection>
        Total Amount: ₹{safeAmount}
      </AmountSection>

      {/* Razorpay Button */}
      <Button onClick={handleRazorpayPayment}>Pay with Razorpay</Button>

      {/* PayPal Button Container */}
      <div id="paypal-button-container" style={{ marginTop: '20px',display:"flex",justifyContent:"space-around" }}>

      {/* PayPal Button (fallback) */}
      <Button onClick={handlePayPalPayment}>Pay with PayPal</Button>

      {/* UPI Payment Button using Razorpay */}
      <Button onClick={handleRazorpayPayment}>Pay with UPI (Razorpay)</Button>
      </div>

    </PaymentPageWrapper>
  );
};

export default PaymentPage;
