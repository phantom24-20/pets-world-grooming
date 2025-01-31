import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS

const CarouselWrapper = styled.div`
  margin: 30px auto; /* Center the wrapper with margin */
  max-width: 1200px; /* Limit max width for large screens */
  padding: 20px;
  background-color: #f9f9f9; /* Subtle background color */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Softer, deeper shadow */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background-color: #00A0D1;
  color: white;
  padding: 14px 30px;
  font-size: 18px;  /* Slightly larger font size for better readability */
  font-weight: bold;  /* Make the text bold for emphasis */
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;  /* Smooth transition for hover effects */
  outline: none;

  /* Hover Effect */
  &:hover {
    background-color: #008C99;
    transform: translateY(-3px);  /* Lift effect on hover */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);  /* Light shadow effect on hover */
  }

  /* Focus Effect */
  &:focus {
    background-color: #006F85;
    box-shadow: 0 0 10px rgba(0, 160, 209, 0.6);  /* Highlight border and shadow on focus */
  }

  /* Active State (when clicked) */
  &:active {
    background-color: #007A8C;
    transform: translateY(2px);  /* Press effect */
    box-shadow: none;  /* Remove shadow on active */
  }

  /* Disabled Button */
  &:disabled {
    background-color: #C0C0C0;  /* Light gray */
    cursor: not-allowed;
    box-shadow: none;
  }
`;

const ReviewsCarousel = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const customerData = location.state?.customerData;

  const reviews = [
    { name: 'Alice', rating: 5, review: 'Amazing grooming service!' },
    { name: 'Bob', rating: 4, review: 'Good service, but a little expensive.' },
    { name: 'Charlie', rating: 5, review: 'My dog looks great!' },
  ];

  const handleNext = () => {
    // Navigate to the next page (adjust the route as per your requirements)
    navigate('/pet-details'); // Replace '/next-page' with the desired route
  };

  return (
    <CarouselWrapper>
      <h2>Customer Info</h2>
      {customerData && (
        <div>
          <p><strong>Name:</strong> {customerData.name}</p>
          <p><strong>Email:</strong> {customerData.email}</p>
          <p><strong>Phone:</strong> {customerData.phone}</p>
          <p><strong>Address:</strong> {customerData.address}</p>
        </div>
      )}

      <h3>Customer Reviews</h3>
      <Carousel showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
        {reviews.map((review, index) => (
          <div key={index}>
            <h3>{review.name}</h3>
            <p>Rating: {review.rating} stars</p>
            <p>{review.review}</p>
          </div>
        ))}
      </Carousel>

      <Button onClick={handleNext}>Go to Next Page</Button> {/* Next Button */}
    </CarouselWrapper>
  );
};

export default ReviewsCarousel;
