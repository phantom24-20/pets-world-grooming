import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import PropTypes from 'prop-types';

// Styled Components
const Card = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  overflow: hidden;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 20px;
  margin: 20px 0;
  font-family: "Arial", sans-serif;
  color: #333;
`;

const NGOContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 20px;
`;

const NGOButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background: #007bff;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const NGOCard = ({ ngo }) => {
  return (
    <Card>
      <NGOContent>
        <Title>{ngo.name}</Title>
        <p>Support our mission to make a difference in the world!</p>
        {/* Navigate to /support page when the button is clicked */}
        <Link to={`/support/${ngo.id}`}>
          <NGOButton>Support Us</NGOButton>
        </Link>
      </NGOContent>
    </Card>
  );
};

// Prop validation
NGOCard.propTypes = {
  ngo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default NGOCard;