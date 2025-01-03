import React, { useState } from 'react';
import styled from 'styled-components';

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Price = styled.div`
  .original {
    text-decoration: line-through;
    color: #888;
  }
  .discounted {
    color: #f44336;
    font-weight: bold;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  button {
    padding: 5px 10px;
    background-color: #f44336;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  input {
    width: 30px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #ddd;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px 0;
`;

const Product = ({ products, addToCart }) => {
  return (
    <ProductGrid>
      {products.map(product => (
        <ProductCard key={product.id}>
          <img src={product.image} alt={product.name} />
          <h4>{product.name}</h4>
          <p>{product.brand}</p>
          <Price>
            <span className="original">${product.originalPrice}</span>
            <span className="discounted">${product.discountedPrice}</span>
          </Price>
          <QuantityControl>
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </QuantityControl>
          <div>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button>Add to Wishlist</Button>
          </div>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default Product;
