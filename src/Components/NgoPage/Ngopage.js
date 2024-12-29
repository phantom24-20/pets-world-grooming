// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// // Styled Components
// const Container = styled.div`
//   font-family: Arial, sans-serif;
//   color: #333;
// `;

// const Header = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 20px;
//   background-color: #007bff;
//   color: white;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const NavBar = styled.nav`
//   display: flex;
//   gap: 15px;

//   a {
//     text-decoration: none;
//     color: white;
//     font-weight: bold;
//     font-size: 16px;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const SearchBar = styled.div`
//   display: flex;
//   align-items: center;

//   input {
//     padding: 5px 10px;
//     font-size: 16px;
//     border: none;
//     border-radius: 5px;
//     margin-right: 5px;
//   }

//   button {
//     padding: 5px 10px;
//     font-size: 16px;
//     color: white;
//     background-color: #0056b3;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;

//     &:hover {
//       background-color: #003d80;
//     }
//   }
// `;

// const Section = styled.section`
//   padding: 40px 20px;
//   background-color: ${(props) => (props.bgColor ? props.bgColor : '#f9f9f9')};
//   text-align: center;

//   h2 {
//     font-size: 28px;
//     margin-bottom: 20px;
//   }

//   p {
//     font-size: 16px;
//     line-height: 1.6;
//     margin-bottom: 20px;
//   }
// `;

// const Button = styled(Link)`
//   display: inline-block;
//   padding: 10px 20px;
//   background: #007bff;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   font-size: 16px;

//   &:hover {
//     background: #0056b3;
//   }
// `;

// const Footer = styled.footer`
//   background-color: #333;
//   color: white;
//   padding: 20px;
//   text-align: center;
// `;

// // Support Us Page Component
// const SupportUs = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>Paawvana</Logo>
//         <NavBar>
//           <Link to="/">Home</Link>
//           <Link to="/support-us">Support Us</Link>
//         </NavBar>
//       </Header>

//       <Section>
//         <h2>Support Us</h2>
//         <p>
//           Thank you for your interest in supporting us. Your donations and efforts make a huge difference.
//           We are working towards the welfare of animals, and every contribution counts.
//         </p>
//       </Section>

//       <Footer>
//         &copy; {new Date().getFullYear()} Paawvana NGO. All rights reserved.
//       </Footer>
//     </Container>
//   );
// };

// // Main Page Component
// const NGOPage = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = () => {
//     alert(`You searched for: ${searchQuery}`);
//   };

//   return (
//     <Container>
//       <Header>
//         <Logo>Paawvana</Logo>
//         <NavBar>
//           <Link to="#about-us">About Us</Link>
//           <Link to="#how-to-help">How to Help</Link>
//           <Link to="#how-we-help">How We Help</Link>
//           <Link to="#adopt">Adopt</Link>
//           <Link to="#donate">Donate</Link>
//           <Link to="#contact-us">Contact Us</Link>
//         </NavBar>
//         <SearchBar>
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <button onClick={handleSearch}>Search</button>
//         </SearchBar>
//       </Header>

//       <Section id="about-us" bgColor="#fff">
//         <h2>About Us</h2>
//         <p>
//           Paawvana is an NGO dedicated to providing support and care for animals in need. 
//           Our mission is to create a better world for all living beings by promoting compassion and sustainability.
//         </p>
//       </Section>

//       <Section id="how-to-help">
//         <h2>How to Help</h2>
//         <p>
//           You can support Paawvana by donating, volunteering, or adopting animals in need. 
//           Every small contribution makes a big difference.
//         </p>
//         <Button to="/support-us">Support Us</Button> {/* Redirects to the Support Us page */}
//       </Section>

//       <Section id="how-we-help" bgColor="#f9f9f9">
//         <h2>How We Help</h2>
//         <p>
//           From rescue operations to providing medical care, we ensure every animal gets a second chance at life. 
//           Our programs focus on fostering, rehabilitation, and education.
//         </p>
//       </Section>

//       <Section id="adopt">
//         <h2>Adopt</h2>
//         <p>
//           Give a loving home to an animal in need. View our adoption gallery and find your furry friend today.
//         </p>
//       </Section>

//       <Section id="donate">
//         <h2>Donate</h2>
//         <p>
//           Your generous donations help us continue our mission. Every contribution goes toward improving the lives of animals.
//         </p>
//         <Button to="/support-us">Support Us</Button> {/* Redirects to the Support Us page */}
//       </Section>

//       <Section id="contact-us" bgColor="#fff">
//         <h2>Contact Us</h2>
//         <p>Email: support@paawvana.com</p>
//         <p>Phone: +91 98765 43210</p>
//         <p>Location: Bangalore, India</p>
//       </Section>

//       <Footer>
//         &copy; {new Date().getFullYear()} Paawvana NGO. All rights reserved.
//       </Footer>
//     </Container>
//   );
// };

// // Main App Component with Router
// const NGOPage = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={NGOPage} />
//         <Route path="/support-us" component={SupportUs} />
//       </Switch>
//     </Router>
//   );
// };

// export default NGOPage;
