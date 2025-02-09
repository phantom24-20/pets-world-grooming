import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// Styled-components for styling the layout
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

// Debounce function to reduce the number of API calls
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const SearchArea = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useNavigate();

  // Use debounced query to make API calls after the user stops typing for a short time
  const debouncedQuery = useDebounce(query, 500);

  // Fetch suggestions from API based on debounced query
  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setSuggestions([]); // Clear suggestions when input is empty
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://api.example.com/products?search=${debouncedQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setSuggestions(data.products || []);
      } catch (err) {
        setError('Error fetching products');
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [debouncedQuery]);

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle suggestion click (navigate to the product page)
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
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {suggestions.length > 0 && (
        <SuggestionsBox>
          {suggestions.map((suggestion) => (
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
