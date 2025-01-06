import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f9f9f9;
  padding: 20px;
`;

const Header = styled.div`
  background-color: #2e3144;
  color: white;
  width: 100%;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h1 {
    margin: 0;
    font-size: 24px;
  }

  p {
    margin: 5px 0 0;
    font-size: 16px;
  }

  span {
    font-weight: bold;
    color: #ffd700;
  }
`;

const Form = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 500px;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #2e3144;
    box-shadow: 0 0 5px rgba(46, 49, 68, 0.5);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  resize: none;

  &:focus {
    outline: none;
    border-color: #2e3144;
    box-shadow: 0 0 5px rgba(46, 49, 68, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #2e3144;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a3d57;
  }
`;

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted!');
  };

  return (
    <Container>
      <Header>
        <h1>Contact Customer Care</h1>
        <p>
          Call us at: <span>*************</span>
        </p>
      </Header>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea
          rows="5"
          placeholder="Write your query here..."
          required
        ></Textarea>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactUs;
