import React from "react";
import styled from "styled-components";

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #666;
`;

export default function Map() {
  return <MapWrapper>Map Placeholder (Integrate Google Maps or similar)</MapWrapper>;
}
