// import React from "react";
// import { BrowserRouter as Link } from 'react-router-dom';

// const NGOPage = () => {
//     const [searchQuery, setSearchQuery] = useState('');
  
//     const handleSearch = () => {
//       alert(`You searched for: ${searchQuery}`);
//     };
  
//     return (
//       <Container>
//         <Header>
//           <Logo>Paawvana</Logo>
//           <NavBar>
//             <Link to="#about-us">About Us</Link>
//             <Link to="#how-to-help">How to Help</Link>
//             <Link to="#how-we-help">How We Help</Link>
//             <Link to="#adopt">Adopt</Link>
//             <Link to="#donate">Donate</Link>
//             <Link to="#contact-us">Contact Us</Link>
//           </NavBar>
//           <SearchBar>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//           </SearchBar>
//         </Header>
  
//         <Section id="about-us" bgColor="#fff">
//           <h2>About Us</h2>
//           <p>
//             Paawvana is an NGO dedicated to providing support and care for animals in need. 
//             Our mission is to create a better world for all living beings by promoting compassion and sustainability.
//           </p>
//         </Section>
  
//         <Section id="how-to-help">
//           <h2>How to Help</h2>
//           <p>
//             You can support Paawvana by donating, volunteering, or adopting animals in need. 
//             Every small contribution makes a big difference.
//           </p>
//           <Button to="/support-us">Support Us</Button> {/* Redirects to the Support Us page */}
//         </Section>
  
//         <Section id="how-we-help" bgColor="#f9f9f9">
//           <h2>How We Help</h2>
//           <p>
//             From rescue operations to providing medical care, we ensure every animal gets a second chance at life. 
//             Our programs focus on fostering, rehabilitation, and education.
//           </p>
//         </Section>
  
//         <Section id="adopt">
//           <h2>Adopt</h2>
//           <p>
//             Give a loving home to an animal in need. View our adoption gallery and find your furry friend today.
//           </p>
//         </Section>
  
//         <Section id="donate">
//           <h2>Donate</h2>
//           <p>
//             Your generous donations help us continue our mission. Every contribution goes toward improving the lives of animals.
//           </p>
//           <Button to="/support-us">Support Us</Button> {/* Redirects to the Support Us page */}
//         </Section>
  
//         <Section id="contact-us" bgColor="#fff">
//           <h2>Contact Us</h2>
//           <p>Email: support@paawvana.com</p>
//           <p>Phone: +91 98765 43210</p>
//           <p>Location: Bangalore, India</p>
//         </Section>
  
//         <Footer>
//           &copy; {new Date().getFullYear()} Paawvana NGO. All rights reserved.
//         </Footer>
//       </Container>
//     );
//   };
  
//   export default NGOPage;