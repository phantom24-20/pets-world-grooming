import React from 'react';
import styled from 'styled-components';

const DialogWrapper = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 15px;
  border-radius: 8px;
  z-index: 1000;
  text-align: center;
`;

const Dialog = ({ type, productName }) => {
  return (
    <DialogWrapper>
      {type === 'cart' && <p>{productName} has been added to your Cart!</p>}
      {type === 'wishlist' && <p>{productName} has been added to your Wishlist!</p>}
    </DialogWrapper>
  );
};

export default Dialog;