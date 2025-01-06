// src/components/ProductCard.js
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  width: 230px;
  background-color: #fff;
  padding: 10px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Price = styled.div`
  font-size: 18px;
  margin: 10px 0;
`;

const AddToCartButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 10px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
`;

const ProductCard = ({ product }) => {
  const { image, brand, originalPrice, discount, discountedPrice } = product;
  return (
    <CardWrapper>
      <ProductImage src={image} alt={brand} />
      <h4>{brand}</h4>
      <Price>
        <del>{originalPrice}</del> {discountedPrice} ({discount}% OFF)
      </Price>
      <AddToCartButton>Add to Cart</AddToCartButton>
      <button>Wishlist</button>
    </CardWrapper>
  );
};

export default ProductCard;