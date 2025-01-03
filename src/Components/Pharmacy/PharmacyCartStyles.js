import React from 'react';
import styled from 'styled-components';

const CartSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const CartItems = styled.div`
  margin-top: 20px;
`;

const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }
  div {
    flex: 1;
  }
`;

const CartFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const CartIcon = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export { CartSidebar, CartHeader, CartItems, CartItem, CartFooter, Total, CheckoutButton, CartIcon };
