
// // src/components/ProductList.js
// import React from 'react';
// // import styled from 'styled-components';
// // import ProductCard from './ProductCard';

// // const ProductListWrapper = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   justify-content: space-around;
// // `;

// // const ProductList = ({ products }) => {
// //   return (
// //     <ProductListWrapper>
// //       {products.map((product) => (
// //         <ProductCard key={product.id} product={product} />
// //       ))}
// //     </ProductListWrapper>
// //   );
// // };

// // export default ProductList

// const ProductList = ({ products }) => {
//   if (products.length === 0) {
//     return <p>No products found.</p>; // In case no products match the filter
//   }

//   return (
//     <div className="product-list">
//       {products.map((product) => (
//         <div key={product._id} className="product-item">
//           <img src={product.image} alt={product.name} />
//           <h3>{product.name}</h3>
//           <p>Brand: {product.brand}</p>
//           <p>Weight : {product.weight}</p>
//           <p>MRP: ₹{product.originalPrice} </p>
//           <p>Deal Price: ₹{product.dealPrice}</p>
//         </div>
//       ))}
//     </div>
//   );
// };
//  export default ProductList
import React, { useState } from "react";
import styled from "styled-components";

// Styled Components
const ProductListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  gap: 20px;
  padding: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr); /* Single column on smaller screens */
  }
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  height: 400px; /* Fixed height for consistency */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px; /* Ensure images are uniform */
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const ProductDetail = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 0.9rem;
  color: #666;

  span {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
  }
`;

const DealPrice = styled.p`
  font-weight: bold;
  color: #e74c3c;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &.add-to-cart {
    background: #27ae60;
    color: white;
    &:hover {
      background: #219150;
    }
  }

  &.wishlist-btn {
    background: #ff4757;
    color: white;
    &:hover {
      background: #e84118;
    }
  }

  &.quantity-btn {
    background: #3498db;
    color: white;
    padding: 5px 10px;
    &:hover {
      background: #2980b9;
    }
  }
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;
  font-weight: bold;
`;

// Component Logic
const ProductList = ({ products }) => {
  const [cart, setCart] = useState({}); // Track cart items

  const handleAddToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product._id]: (prev[product._id] || 0) + 1, // Increment count
    }));
  };

  const handleRemoveFromCart = (product) => {
    setCart((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[product._id] > 1) {
        updatedCart[product._id] -= 1; // Decrement count
      } else {
        delete updatedCart[product._id]; // Remove if 0
      }
      return updatedCart;
    });
  };

  if (products.length === 0) {
    return <p>No products found.</p>;
  }
  const DiscountBadge = ({ discount }) => {
    return (
      <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg shadow-md">
        🔥 {discount} OFF
      </span>
    );
  };
  
  
  return (
    <ProductListWrapper>
      {products.map((product) => (
        <ProductCard key={product._id}>
          <ProductImage src={product.image} alt={product.name} />
          <ProductName>{product.name}</ProductName>
          <ProductDetail>Brand: {product.brand}</ProductDetail>
          <ProductDetail>Weight: {product.weight}</ProductDetail>
          <Price>MRP: <span>₹{product.originalPrice}</span></Price>
          <DiscountBadge discount={product.discount} />
          <DealPrice>Deal Price: ₹{product.dealPrice}</DealPrice>

          {/* Buttons */}
          <ProductActions>
            {cart[product._id] ? (
              <QuantityWrapper>
                <Button className="quantity-btn" onClick={() => handleRemoveFromCart(product)}>-</Button>
                <span>{cart[product._id]}</span>
                <Button className="quantity-btn" onClick={() => handleAddToCart(product)}>+</Button>
              </QuantityWrapper>
            ) : (
              <Button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            )}
            <Button className="wishlist-btn">❤️</Button>
          </ProductActions>
        </ProductCard>
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
