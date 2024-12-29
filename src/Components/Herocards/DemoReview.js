import React from "react";
import ReviewCard from "./ReviewCards";
import NGOCard from "./ngo";
// import NGOPage from "../NgoPage/MainNgo";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
const DemoReviews = () => {
    const reviews = [
      {
        image: 'https://via.placeholder.com/300x200?text=Review+1',
        review: 'Amazing experience! Highly recommend this service.',
      },
      {
        image: 'https://via.placeholder.com/300x200?text=Review+2',
        review: 'Fantastic team providing great value!',
      },
      {
        image: 'https://via.placeholder.com/300x200?text=Review+3',
        review: 'Exceeded my expectations with their professionalism.',
      },
    ];
  
    const ngo = {
      name: 'Paawvana',
      link: 'https://www.paawvana.org', // Replace with the actual NGO link
    };
  
    return (
      <Container>
        <ReviewCard reviews={reviews} />
        <NGOCard ngo={ngo} />
        {/* <NGOPage/> */}
      </Container>
    );
  };
  
  export default DemoReviews;