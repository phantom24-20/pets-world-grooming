
// src/components/ProductList.js
import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductList = ({ products }) => {
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList