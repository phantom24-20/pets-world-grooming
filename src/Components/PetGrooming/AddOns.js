import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const AddOnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap:wrap;
  gap:1rem;
 
`;

const AddOnCard = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
   background:#97e2dc;

  p{
  font-weight:bold;
  font-size:1.25rem;
  }
`;

const Button = styled.button`
  padding: 15px;
  margin-top: 20px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

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

  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const AddOns = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalAmount: initialTotalAmount } = location.state || {}; // Get initial totalAmount

  // Define add-on prices
  const addOnPrices = {
    dematting: 150,
    deshedding: 150,
    antitickFlea:100,
    nailClipping: 100,
    zeroCut:150,
    hypoAllergenic:150,
  };

  const [addOns, setAddOns] = useState({
    dematting: false,
    deshedding: false,
    antitickFlea:false,
    nailClipping: false,
    zeroCut:false,
    hypoAllergenic:false,
  });

  const [totalAmount, setTotalAmount] = useState(initialTotalAmount); // Initialize total amount with the passed value

  // Calculate total add-on price
  useEffect(() => {
    let addOnTotal = 0;

    if (addOns.dematting) addOnTotal += addOnPrices.dematting;
    if (addOns.deshedding) addOnTotal += addOnPrices.deshedding;
    if (addOns.nailClipping) addOnTotal += addOnPrices.nailClipping;
    if (addOns. antitickFlea) addOnTotal += addOnPrices. antitickFlea;
    if (addOns. zeroCut) addOnTotal += addOnPrices.zeroCut;
    if (addOns.  hypoAllergenic) addOnTotal += addOnPrices. hypoAllergenic;




    // Update total amount by adding the add-ons price
    setTotalAmount(initialTotalAmount + addOnTotal);
  }, [addOns, initialTotalAmount]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setAddOns({
      ...addOns,
      [name]: checked
    });
  };

  const handleSubmit = () => {
    // Navigating to the GroomingSlots page and passing the selected add-ons and updated totalAmount
    navigate('/grooming-slots', { state: { addOns, totalAmount } });
  };

  return (
    <div>
      <h2>Select Add-Ons</h2>
      <AddOnWrapper>
        <AddOnCard>
          <input
            type="checkbox"
            name="dematting"
            checked={addOns.dematting}
            onChange={handleChange}
          />
          <p>Dematting (₹150)</p>
        </AddOnCard>
        <AddOnCard>
          <input
            type="checkbox"
            name="deshedding"
            checked={addOns.deshedding}
            onChange={handleChange}
          />
          <p>Deshedding (₹200)</p>
        </AddOnCard>
        <AddOnCard>
          <input
            type="checkbox"
            name="nailClipping"
            checked={addOns.nailClipping}
            onChange={handleChange}
          />
          <p>Nail Clipping (₹100)</p>
        </AddOnCard>
        <AddOnCard>
          <input
            type="checkbox"
            name="antitickFlea"
            checked={addOns.antitickFlea}
            onChange={handleChange}
          />
          <p>Anti Tick & Flea Treatment(₹150)</p>
        </AddOnCard>
        <AddOnCard>
          <input
            type="checkbox"
            name="zeroCut"
            checked={addOns.zeroCut}
            onChange={handleChange}
          />
          <p>Zero-Cut(₹150)</p>
        </AddOnCard>
        <AddOnCard>
          <input
            type="checkbox"
            name="hypoAllergenic"
            checked={addOns.hypoAllergenic}
            onChange={handleChange}
          />
          <p>Hypo-Allergenic Bath(₹150)</p>
        </AddOnCard>
      </AddOnWrapper>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Total Package Amount: ₹{totalAmount}</h3>
      </div>

      <Button onClick={handleSubmit}>Go to Next Page</Button>
    </div>
  );
};

export default AddOns;
