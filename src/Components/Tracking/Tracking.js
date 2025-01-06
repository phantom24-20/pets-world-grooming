import React, { useState } from "react";
import styled from "styled-components";
import Map from "./Map"; // Placeholder for the map (replace with actual map implementation)

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 800px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background-color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const StageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const Stage = styled.div`
  text-align: center;
  flex: 1;
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 100%;
    height: 4px;
    background: ${(props) => (props.completed ? "#4caf50" : "#ddd")};
    z-index: 1;
  }
`;

const StageCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.completed ? "#4caf50" : "#ddd")};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  z-index: 2;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;

  &:hover {
    background-color: #45a049;
  }
`;

export default function OrderTracking({ orderId }) {
  const [stages] = useState([
    { id: 1, name: "Ordered", completed: true },
    { id: 2, name: "Packed", completed: true },
    { id: 3, name: "Shipped", completed: true },
    { id: 4, name: "Out for Delivery", completed: false },
    { id: 5, name: "Delivered", completed: false },
  ]);

  const trackLocation = () => {
    alert("Tracking GPS Location! (Replace with map API)");
  };

  return (
    <Container>
      <Title>Order Tracking for ID: {orderId}</Title>
      <StageContainer>
        {stages.map((stage, index) => (
          <Stage key={stage.id} completed={stage.completed}>
            <StageCircle completed={stage.completed}>{index + 1}</StageCircle>
            <div>{stage.name}</div>
          </Stage>
        ))}
      </StageContainer>
      <MapContainer>
        <Map />
      </MapContainer>
      <Button onClick={trackLocation}>Track Live GPS Location</Button>
    </Container>
  );
}
