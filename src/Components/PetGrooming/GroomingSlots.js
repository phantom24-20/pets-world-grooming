import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const SlotWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 30px 0;
  flex-wrap: wrap;
`;

const SlotCard = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }

  h3 {
    font-size: 22px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }

  input[type="datetime-local"] {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 80%;
    margin-top: 10px;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: #4CAF50;
      background-color: #f9f9f9;
    }
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: auto;
  margin: 20px auto;
  display: block;
  
  &:focus {
    outline: none;
  }

  &:hover {
    background-color: #45a049;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  &:active {
    background-color: #3e8e41;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(2px);
  }
`;

const GroomingSlots = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedPackage, sessions, addOns, totalAmount } = location.state || {};

  const [selectedSlots, setSelectedSlots] = useState(Array(sessions).fill(null));

  const addOnPrices = {
    dematting: 150,
    deshedding: 200,
    antitickFlea: 100,
    nailClipping: 100,
    zeroCut: 150,
    hypoAllergenic: 150,
  };
  
  useEffect(() => {
    setSelectedSlots(Array(sessions).fill(null)); // Reset slots when sessions change
  }, [sessions]);

  const handleSlotChange = (index, value) => {
    const newSlots = [...selectedSlots];
    newSlots[index] = value;
    setSelectedSlots(newSlots);
  };

  const handleSubmit = () => {
    let updatedTotalAmount = totalAmount;

    Object.keys(addOns).forEach(addOn => {
      if (addOns[addOn]) {
        updatedTotalAmount += addOnPrices[addOn]; // Add actual prices
      }
    });

    navigate('/payment', { state: { selectedPackage, sessions, addOns, totalAmount, selectedSlots } });
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', fontSize: '24px', marginBottom: '30px' }}>
        Select Your Grooming Slots
      </h2>

      <SlotWrapper>
        {selectedSlots.map((slot, index) => (
          <SlotCard key={index}>
            <h3>Session {index + 1}</h3>
            <input
              type="datetime-local"
              value={slot || ''}
              onChange={(e) => handleSlotChange(index, e.target.value)}
            />
          </SlotCard>
        ))}
      </SlotWrapper>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <Button onClick={handleSubmit}>Go to Payment</Button>
      </div>
    </div>
  );
};

export default GroomingSlots;
