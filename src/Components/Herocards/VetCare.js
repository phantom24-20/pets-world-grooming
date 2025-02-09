import React, { useState } from 'react';
import styled from 'styled-components';

const VetCare = () => {
  const [prescription, setPrescription] = useState(null);
  
  // Separate states to track the upload success message for each card
  const [uploadStatusCard1, setUploadStatusCard1] = useState('');
  const [uploadStatusCard2, setUploadStatusCard2] = useState('');

  // State to track the visibility of the contact info for each card
  const [showContactInfo, setShowContactInfo] = useState({
    card1: false,
    card2: false,
  });

  const handlePrescriptionUpload = (event, card) => {
    const file = event.target.files[0];
    setPrescription(file);

    // Set upload success message based on the card
    if (file) {
      if (card === 'card1') {
        setUploadStatusCard1('Upload Successful for Get Your Pet Supplies Delivered!');
      } else if (card === 'card2') {
        setUploadStatusCard2('Upload Successful for Get Instant Advice!');
      }
    }
  };

  const toggleContactInfo = (card) => {
    setShowContactInfo((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };

  return (
    <CardContainer>
      <Card>
        <CardSection bgColor="#81b8cc">
          <Title>Get Your Pet Supplies Delivered</Title>
          <UploadSection>
            <InputLabel htmlFor="upload-prescription-card1">Upload Prescription</InputLabel>
            <InputFile
              id="upload-prescription-card1"
              type="file"
              onChange={(e) => handlePrescriptionUpload(e, 'card1')}
            />
            {prescription && <FileName>{prescription.name}</FileName>}
            {uploadStatusCard1 && <SuccessMessage>{uploadStatusCard1}</SuccessMessage>} {/* Display success for card1 */}
          </UploadSection>
          <ContactButton onClick={() => toggleContactInfo('card1')}>Contact Us</ContactButton>
          {showContactInfo.card1 && (
            <ContactInfo>
              <p>Phone: <strong>(123) 456-7890</strong></p>
              <p>Email: <strong>contact@petsupplies.com</strong></p>
            </ContactInfo>
          )}
        </CardSection>

        <CardSection bgColor="#81b8cc">
          <Title>Get Instant Advice</Title>
          <UploadSection>
            <InputLabel htmlFor="upload-prescription-card2">Upload Prescription</InputLabel>
            <InputFile
              id="upload-prescription-card2"
              type="file"
              onChange={(e) => handlePrescriptionUpload(e, 'card2')}
            />
            {prescription && <FileName>{prescription.name}</FileName>}
            {uploadStatusCard2 && <SuccessMessage>{uploadStatusCard2}</SuccessMessage>} {/* Display success for card2 */}
          </UploadSection>
          <ContactButton onClick={() => toggleContactInfo('card2')}>Contact Us</ContactButton>
          {showContactInfo.card2 && (
            <ContactInfo>
              <p>Phone: <strong>(123) 456-7890</strong></p>
              <p>Email: <strong>contact@petsupplies.com</strong></p>
            </ContactInfo>
          )}
        </CardSection>
      </Card>
    </CardContainer>
  );
};

// Styled Components
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const Card = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
  justify-content: space-between;
`;

const CardSection = styled.div`
  width: 48%;
  padding: 2rem;
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const UploadSection = styled.div`
  margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const InputFile = styled.input`
  display: block;
  margin: 0 auto;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 80%;
  cursor: pointer;
`;

const FileName = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: bold;
`;

const ContactButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: #333;
  text-align: left;

  p {
    margin: 0.5rem 0;
  }
`;

export default VetCare;
