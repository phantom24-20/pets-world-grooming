import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PackageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`;

const PackageCard = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e7cbda;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(2px);
  }

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  p {
    font-size: 14px;
    color: #555;
    margin-bottom: 10px;
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    margin: 10px 0;
  }

  .services {
    font-size: 14px;
    color: #555;
    margin-top: 10px;
    list-style-type: none;
    padding-left: 0;
  }

  .services li {
    font-size: 1.25rem;
    margin-bottom: 5px;
  }
`;

const Select = styled.select`
  width: 20%;
  padding: 12px 15px;
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
  color: #333;
  background-color: #fafafa;
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    background-color: #f4f4f4;
  }

  & option {
    padding: 10px;
  }
`;

const AddOnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap: wrap;
  gap: 1rem;
`;

const AddOnCard = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  background: #97e2dc;

  p {
    font-weight: bold;
    font-size: 1.25rem;
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

const PackageAndAddOns = () => {
  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState('basic');
  // const [selectedSlots, setSelectedSlots] = useState(Array(sessions).fill(null));
  const [sessions, setSessions] = useState(1);
  const [coatType, setCoatType] = useState('short');
  const [dogSize, setDogSize] = useState('small');
  const [totalAmount, setTotalAmount] = useState(30);

  const [addOns, setAddOns] = useState({
    dematting: false,
    deshedding: false,
    antitickFlea: false,
    nailClipping: false,
    zeroCut: false,
    hypoAllergenic: false,
  });

  const packagePrices = {
    basic: { short: 799, long: 899 },
    standard: { short: 1199, long: 1499 },
    premium: { short: 2199, long: 2499 },
  };

  const sizeMultipliers = {
    small: 1,
    medium: 1.2,
    large: 1.5,
    giant: 2,
  };

  const discountPercentage = 0.12;

  
  const packageDetails = {
    basic: ['Bath', 'Shampoo and conditioning', 'Combing or brushing', 'Blow drying', 'Paw massage'],
    standard: ['Bath', 'Medicated Bath', 'Shampoo and conditioning', 'Combing or brushing', 'Blow drying', 'Paw massage', 'Nail clipping', 'Teeth cleaning', 'Ear and eye cleaning', 'Sanitary trimming', 'Face hair cut'],
    premium: ['Bath', 'Medicated Bath', 'Shampoo and conditioning', 'Combing or brushing', 'Blow drying', 'Paw massage', 'Nail clipping', 'Teeth cleaning', 'Ear and eye cleaning', 'Sanitary trimming', 'Face hair cut', 'De-shedding & de-matting', 'Full body trimming/hair cutting'],
  };

  const addOnPrices = {
    dematting: 150,
    deshedding: 200,
    antitickFlea: 100,
    nailClipping: 100,
    zeroCut: 150,
    hypoAllergenic: 150,
  };

  const handlePackageChange = (e) => setSelectedPackage(e.target.value);
  const handleSessionChange = (e) => setSessions(parseInt(e.target.value));
  const handleCoatTypeChange = (e) => setCoatType(e.target.value);
  const handleDogSizeChange = (e) => setDogSize(e.target.value);

  const handleAddOnChange = (e) => {
    const { name, checked } = e.target;
    setAddOns({
      ...addOns,
      [name]: checked,
    });
  };

  useEffect(() => {
    let packagePrice = packagePrices[selectedPackage][coatType];
    let sizeMultiplier = sizeMultipliers[dogSize];
    let discountedPrice = packagePrice * sizeMultiplier;

    if (sessions === 3) {
      discountedPrice = discountedPrice * (1 - discountPercentage);
    }

    const calculatedAmount = discountedPrice * sessions;
    setTotalAmount(Math.round(calculatedAmount));
  }, [selectedPackage, sessions, coatType, dogSize]);

  useEffect(() => {
    let addOnTotal = 0;
    if (addOns.dematting) addOnTotal += addOnPrices.dematting;
    if (addOns.deshedding) addOnTotal += addOnPrices.deshedding;
    if (addOns.nailClipping) addOnTotal += addOnPrices.nailClipping;
    if (addOns.antitickFlea) addOnTotal += addOnPrices.antitickFlea;
    if (addOns.zeroCut) addOnTotal += addOnPrices.zeroCut;
    if (addOns.hypoAllergenic) addOnTotal += addOnPrices.hypoAllergenic;

    setTotalAmount((prev) => prev + addOnTotal);
  }, [addOns]);

  const handleSubmit = () => {
    navigate('/grooming-slots', { state: { addOns, totalAmount, sessions, selectedPackage } });
  };
  

  return (
    <div>
      <h2>Select Package</h2>
      <PackageWrapper>
        {['basic', 'standard', 'premium'].map((pkg) => (
          <PackageCard key={pkg}>
            <h3>{pkg.charAt(0).toUpperCase() + pkg.slice(1)} Package</h3>
            <p className="price">₹{packagePrices[pkg].short} (Short Coat) | ₹{packagePrices[pkg].long} (Long Coat)</p>
            <ul className="services">
              {packageDetails[pkg].map((service, index) => <li key={index}>{service}</li>)}
            </ul>
          </PackageCard>
        ))}
      </PackageWrapper>

      <div>
        <Select onChange={handlePackageChange} value={selectedPackage}>
          <option value="basic">Basic</option>
          <option value="standard">Standard</option>
          <option value="premium">Premium</option>
        </Select>
        <Select onChange={handleSessionChange} value={sessions}>
          <option value={1}>1 Session</option>
          <option value={3}>3 Sessions (Discounted)</option>
        </Select>
        <Select onChange={handleCoatTypeChange} value={coatType}>
          <option value="short">Short Coat</option>
          <option value="long">Long Coat</option>
        </Select>
        <Select onChange={handleDogSizeChange} value={dogSize}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="giant">Giant</option>
        </Select>
      </div>

      <h2>Select Add-Ons</h2>
      <AddOnWrapper>
        {Object.keys(addOnPrices).map((addon) => (
          <AddOnCard key={addon}>
            <input
              type="checkbox"
              name={addon}
              checked={addOns[addon]}
              onChange={handleAddOnChange}
            />
            <p>{addon.charAt(0).toUpperCase() + addon.slice(1).replace(/([A-Z])/g, ' $1')} (₹{addOnPrices[addon]})</p>
          </AddOnCard>
        ))}
      </AddOnWrapper>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>

      <Button onClick={handleSubmit}>Go to Grooming Slots</Button>
    </div>
  );
};

export default PackageAndAddOns;
