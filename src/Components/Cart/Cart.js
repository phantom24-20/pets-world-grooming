import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CartBox = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Cart = ({ cartItems = [], setCartItems }) => {
  const navigate = useNavigate();

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <Container>
      <CartBox>
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is empty.</p>
            <Button onClick={() => navigate('/')}>Continue Shopping</Button>
          </>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div>
                  <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
                </div>
              </CartItem>
            ))}
            <Button onClick={handleCheckout}>Checkout</Button>
          </>
        )}
      </CartBox>
    </Container>
  );
};

export default Cart;
