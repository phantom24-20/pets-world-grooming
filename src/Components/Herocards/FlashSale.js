import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown';

// // Sample images for items (replace with actual paths)
import dogTreatsImg from '../../assets/Flash sale/goodies/chknlvr.webp';
import milkybone  from '../../assets/Flash sale/goodies/milkybone.webp';
// import petAccessoriesImg from './assets/pet-accessories.jpg';
// import dogToyImg from './assets/dog-toy.jpg';

// Styled components
const FlashSaleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  // padding: 20px;
`;

const FlashSaleHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #f56b00;
  text-align: center;
`;

const CountdownText = styled.div`
  font-size: 1.5rem;
  color: #ff4d4d;
  margin-bottom: 20px;
`;

const CarouselContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  width: 80%;
  height: auto;
  margin-bottom: 30px;
  padding: 10px;
  overflow-y: auto;
`;

const ItemCard = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  padding: 15px;
  text-align: center;
`;

const ItemName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const ItemPrice = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #f56b00;
`;

const ItemDiscount = styled.p`
  font-size: 1rem;
  text-decoration: line-through;
  color: #999;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #f56b00;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff7b42;
  }
`;

const CartContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 1000;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CartButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

const MoreButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState(3600000); // 1 hour in milliseconds
  const [cart, setCart] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(4); // Start by showing 4 items

  // Countdown logic
  useEffect(() => {
    const countdownTime = new Date().getTime() + timeLeft;
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(countdownTime - now);

      if (timeLeft <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Items data
  const items = [
    { id: 1, name: 'Goodies Treat Chicken Liver', image: dogTreatsImg,quantity:'500gm', price: '₹375', originalPrice: '₹625', discount: '50% OFF' },
    { id: 2, name: 'Goodies Milky Bone', image: milkybone,quantity:'228gm', price: '₹280', originalPrice: '₹350', discount: '15% OFF' },
    { id: 3, name: 'Pet Accessories', image: "petAccessoriesImg", price: '$19.99', originalPrice: '$24.99', discount: '20% OFF' },
    { id: 4, name: 'Dog Toy', image: "dogToyImg", price: '$11.99', originalPrice: '$15.99', discount: '25% OFF' },
    { id: 5, name: 'Cat Food', image: "dogTreatsImg", price: '$15.99', originalPrice: '$19.99', discount: '20% OFF' },
    { id: 6, name: 'Dog Leash', image: "catToysImg", price: '$8.99', originalPrice: '$12.99', discount: '30% OFF' },
    { id: 7, name: 'Bird Cage', image: "petAccessoriesImg", price: '$49.99', originalPrice: '$59.99', discount: '17% OFF' },
    { id: 8, name: 'Pet Bed', image: "dogToyImg", price: '$25.99', originalPrice: '$35.99', discount: '30% OFF' },
  ];

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Show more items function
  const showMoreItems = () => {
    setItemsToShow(itemsToShow + 4); // Load more items in chunks of 4
  };

  const totalItems = cart.length;

  return (
    <FlashSaleContainer>
      <FlashSaleHeader>Flash Sale - Pet Essentials</FlashSaleHeader>
      <CountdownText>
        Flash Sale ends in: <Countdown date={Date.now() + timeLeft} daysInHours={true} />
      </CountdownText>

      {/* Items Grid - Display Cards in Multiple Rows and Columns */}
      <CarouselContainer>
        {items.slice(0, itemsToShow).map((item) => (
          <ItemCard key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              
              <ItemName>{item.name}</ItemName>
              <div style={{fontWeight:"bold"}}>{item.quantity}</div>
              <ItemPrice>{item.price}</ItemPrice>
              <ItemDiscount>{item.originalPrice}</ItemDiscount>
              <p>{item.discount}</p>
              <AddToCartButton onClick={(e) => { e.stopPropagation(); addToCart(item); }}>
                Add to Cart
              </AddToCartButton>
            </ItemDetails>
          </ItemCard>
        ))}
      </CarouselContainer>

      {/* Click for More Button */}
      {itemsToShow < items.length && (
        <MoreButton onClick={showMoreItems}>Click for More</MoreButton>
      )}

      {/* Cart Sidebar */}
      {cart.length > 0 && (
        <CartContainer>
          <h3>Cart ({totalItems})</h3>
          {cart.map((item, index) => (
            <CartItem key={index}>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </CartItem>
          ))}
          <CartButton onClick={() => alert('Proceed to checkout')}>Proceed to Checkout</CartButton>
        </CartContainer>
      )}
    </FlashSaleContainer>
  );
};

export default FlashSale;
