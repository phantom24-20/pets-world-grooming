
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
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

const products = [
  { id: 1, name: 'Dog Food Brand A' },
  { id: 2, name: 'Cat Food Brand B' },
  { id: 3, name: 'Dog Treats Brand C' },
  { id: 4, name: 'Cat Accessories Brand D' },
  { id: 5, name: 'Dog Leashes Brand E' },
  { id: 6, name: 'Cat Toys Brand F' },
  // Add more products as needed
];

const SearchArea = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value) {
      setSuggestions(products.filter(product => product.name.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (productId) => {
    history.push(`/product/${productId}`);
  };

  return (
    <Container>
      <SearchInput 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Search for pet products..." 
      />
      {suggestions.length > 0 && (
        <SuggestionsBox>
          {suggestions.map(suggestion => (
            <Suggestion key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.id)}>
              {suggestion.name}
            </Suggestion>
          ))}
        </SuggestionsBox>
      )}
    </Container>
  );
};

export default SearchArea;





