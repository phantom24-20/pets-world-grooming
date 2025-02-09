// src/components/SortOptions.js
import React from 'react';
import styled from 'styled-components';

const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  // margin: 20px 0;
`;

const SortSelect = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SortOptions = ({ setSortOrder }) => {
  return (
    <SortWrapper>
      <SortSelect onChange={(e) => setSortOrder(e.target.value)}>
        <option value="relevance">Relevance</option>
        <option value="low-to-high">Price: Low to High</option>
        <option value="high-to-low">Price: High to Low</option>
        <option value="discounted">Discounted</option>
      </SortSelect>
    </SortWrapper>
  );
};

export default SortOptions;