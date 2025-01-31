// MainFooter.js
import React from "react";
import { Routes, Route, Link } from "react-router-dom"; // Removed BrowserRouter import
import styled from "styled-components";

// Styled Components for styling
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  font-weight: bold;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const Section = styled.section`
  margin-bottom: 40px;
  text-align: center;
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 50px;
  font-size: 1rem;
  color: #888;
  padding: 20px;
`;

const Content = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

// About Us Component
const AboutUs = () => (
  <Content>
    <h2>About Us</h2>
    <p>We are Pets World Grooming, offering the best grooming services for your pets!</p>
  </Content>
);

// FAQ Component
const FAQ = () => (
  <Content>
    <h2>FAQ</h2>
    <ul>
      <li>Q: What services do you offer?</li>
      <li>A: We offer a variety of grooming services for pets, including baths, haircuts, and nail trimming.</li>
      <li>Q: How do I book an appointment?</li>
      <li>A: You can book an appointment through our website or by calling us directly.</li>
    </ul>
  </Content>
);

// Terms and Conditions Component
const Terms = () => (
  <Content>
    <h2>Terms and Conditions</h2>
    <p>Please read our terms and conditions carefully before using our services.</p>
  </Content>
);

// Privacy Policy Component
const PrivacyPolicy = () => (
  <Content>
    <h2>Privacy Policy</h2>
    <p>Your privacy is important to us. We will never share your personal information without your consent.</p>
  </Content>
);
const ReturnPolicy = () => (
  <Content>
    <h2>Exchange And Return Policy</h2>
    <p>Your privacy is important to us. We will never share your personal information without your consent.</p>
  </Content>
);

// Main Footer Component
const MainFooter = () => (
  <Container>
    <Header>Pets World Grooming</Header>
    <NavBar>
      <StyledLink to="/about-us">About Us</StyledLink>
      <ExternalLink href="/faq" target="_blank" rel="noopener noreferrer">
        FAQ
      </ExternalLink>
      <ExternalLink href="/terms" target="_blank" rel="noopener noreferrer">
        Terms and Conditions
      </ExternalLink>
      <StyledLink to="/privacy-policy">Privacy Policy</StyledLink>
      <ExternalLink href="/exchange" target="_blank" rel="noopener noreferrer">
        Exchange And Return Policy
      </ExternalLink>
    </NavBar>

    <Routes>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/exchange" element={<ReturnPolicy />} />

      <Route
        path="/"
        element={<h2>Welcome to Pets World Grooming! Please choose an option from the menu.</h2>}
      />
    </Routes>

    <Footer>
      <p>&copy; 2025 Pets World Grooming. All rights reserved.</p>
    </Footer>
  </Container>
);

export default MainFooter;
