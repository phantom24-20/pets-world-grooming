import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

const SuggestionsBox = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  max-height: 200px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Suggestion = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const PincodeSearch = () => {
  const [pincode, setPincode] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [locationGranted, setLocationGranted] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Call your API to get pincode based on latitude and longitude
          // For demo purposes, we'll use a static pincode
          const detectedPincode = '560001'; // Replace with API result
          setPincode(detectedPincode);
          setLocationGranted(true);
        },
        () => {
          setLocationGranted(false);
        }
      );
    }
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPincode(value);
    if (value) {
      // Call your API to get pincode suggestions
      // For demo purposes, we'll use static suggestions
      setSuggestions(['560001', '560060', '560026'].filter(code => code.includes(value)));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (code) => {
    setPincode(code);
    setSuggestions([]);
    // Call your API to get products based on the selected pincode
    console.log(`Selected pincode: ${code}`);
    // Display products accordingly
  };

  return (
    <Container>
      <SearchInput 
        type="text" 
        value={pincode} 
        onChange={handleInputChange} 
        placeholder="Enter or detect pincode" 
      />
      {suggestions.length > 0 && (
        <SuggestionsBox>
          {suggestions.map(suggestion => (
            <Suggestion key={suggestion} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </Suggestion>
          ))}
        </SuggestionsBox>
      )}
      {!locationGranted && <p>Please enter your pincode manually.</p>}
    </Container>
  );
};

export default PincodeSearch;