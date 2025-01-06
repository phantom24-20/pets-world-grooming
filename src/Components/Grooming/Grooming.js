// // // import React, { useState } from 'react';
// // // import styled from 'styled-components';
// // // import { useNavigate } from 'react-router-dom'; // For page navigation

// // // // Styled Components
// // // const AppContainer = styled.div`
// // //   font-family: 'Roboto', sans-serif;
// // //   padding: 20px;
// // //   max-width: 1000px;
// // //   margin: auto;
// // //   background-color: #f8f9fa;
// // //   border-radius: 10px;
// // //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// // // `;

// // // const Header = styled.h1`
// // //   text-align: center;
// // //   color: #333;
// // //   margin-bottom: 30px;
// // // `;

// // // const Section = styled.div`
// // //   margin-bottom: 20px;
// // // `;

// // // const Button = styled.button`
// // //   padding: 10px 20px;
// // //   background-color: ${(props) => (props.primary ? '#28a745' : '#007bff')};
// // //   color: white;
// // //   font-weight: bold;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // //   border: none;
// // //   margin-top: 20px;
// // //   width: 100%;
// // //   &:hover {
// // //     background-color: ${(props) => (props.primary ? '#218838' : '#0056b3')};
// // //   }
// // // `;

// // // const InputField = styled.input`
// // //   width: 100%;
// // //   padding: 10px;
// // //   margin-bottom: 10px;
// // //   border-radius: 5px;
// // //   border: 1px solid #ccc;
// // // `;

// // // const Label = styled.label`
// // //   font-weight: bold;
// // //   display: block;
// // //   margin-bottom: 5px;
// // // `;

// // // const RadioButtonGroup = styled.div`
// // //   display: flex;
// // //   gap: 20px;
// // //   margin-top: 10px;
// // // `;

// // // const Slot = styled.div`
// // //   display: inline-block;
// // //   padding: 10px;
// // //   margin: 5px;
// // //   cursor: ${(props) => (props.isBooked ? 'not-allowed' : 'pointer')};
// // //   background-color: ${(props) =>
// // //     props.isBooked ? '#ccc' : props.selected ? '#007bff' : '#fff'};
// // //   border: 1px solid #ddd;
// // //   border-radius: 5px;
// // //   color: ${(props) => (props.selected ? '#fff' : '#000')};
// // //   &:hover {
// // //     background-color: ${(props) =>
// // //       props.isBooked ? '#ccc' : props.selected ? '#0056b3' : '#f0f0f0'};
// // //   }
// // // `;

// // // const SlotContainer = styled.div`
// // //   display: flex;
// // //   flex-wrap: wrap;
// // //   margin-top: 20px;
// // // `;

// // // const PaymentButton = styled.button`
// // //   padding: 10px 20px;
// // //   background-color: #ffc107;
// // //   color: white;
// // //   font-weight: bold;
// // //   border-radius: 5px;
// // //   cursor: pointer;
// // //   border: none;
// // //   width: 100%;
// // //   margin-top: 20px;
// // //   &:hover {
// // //     background-color: #e0a800;
// // //   }
// // // `;

// // // const ConfirmationMessage = styled.h3`
// // //   color: green;
// // //   text-align: center;
// // // `;

// // // const StepContainer = styled.div`
// // //   max-width: 600px;
// // //   margin: 0 auto;
// // // `;

// // // const GroomingBookingApp = () => {
// // //   const history = useNavigate();
// // //   const [step, setStep] = useState(1);
// // //   const [customerDetails, setCustomerDetails] = useState({
// // //     name: '',
// // //     contactNumber: '',
// // //     address: '',
// // //     email: ''
// // //   });
// // //   const [dogDetails, setDogDetails] = useState({
// // //     name: '',
// // //     age: '',
// // //     breed: '',
// // //     size: '',
// // //     isFerocious: null
// // //   });
// // //   const [selectedSlot, setSelectedSlot] = useState('');
// // //   const [paymentMethod, setPaymentMethod] = useState('');
// // //   const [bookedSlots, setBookedSlots] = useState(['12:00', '16:00']); // Example booked slots

// // //   const handleInputChange = (e, field, setState) => {
// // //     setState((prev) => ({ ...prev, [field]: e.target.value }));
// // //   };

// // //   const handleRadioChange = (e, field, setState) => {
// // //     setState((prev) => ({ ...prev, [field]: e.target.value }));
// // //   };

// // //   const handleSlotSelect = (slot) => {
// // //     if (bookedSlots.includes(slot)) return; // Can't select booked slots
// // //     setSelectedSlot(slot);
// // //   };

// // //   const validateCustomerDetails = () => {
// // //     const { name, contactNumber, email, address } = customerDetails;

// // //     const namePattern = /^[A-Za-z ]+$/; // Only alphabets and spaces
// // //     const contactPattern = /^\d{10}$/; // 10-digit number
// // //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Valid email format

// // //     if (!name.match(namePattern)) return false;
// // //     if (!contactNumber.match(contactPattern)) return false;
// // //     if (!email.match(emailPattern)) return false;
// // //     if (!address) return false;

// // //     return true;
// // //   };

// // //   const validateDogDetails = () => {
// // //     const { name, age, breed, size, isFerocious } = dogDetails;

// // //     return name && age && breed && size && isFerocious !== null;
// // //   };

// // //   const goToNextStep = () => {
// // //     if (step === 1 && !validateCustomerDetails()) {
// // //       alert('Please fill in all fields correctly!');
// // //       return;
// // //     }
// // //     if (step === 2 && !validateDogDetails()) {
// // //       alert('Please fill in all dog details correctly!');
// // //       return;
// // //     }
// // //     if (step === 3 && !selectedSlot) {
// // //       alert('Please select a grooming slot!');
// // //       return;
// // //     }

// // //     setStep((prevStep) => prevStep + 1);
// // //   };

// // //   const handlePayment = (method) => {
// // //     setPaymentMethod(method);
// // //     if (method === 'razorpay') {
// // //       window.open('https://razorpay.com', '_blank'); // Open in new tab
// // //     } else if (method === 'paypal') {
// // //       window.open('https://www.paypal.com', '_blank'); // Open in new tab
// // //     } else if (method === 'upi') {
// // //       window.open('upi://pay?pa=your_upi_id&pn=YourName&mc=0000&tid=1234567890&tr=txn123&am=10.00&cu=INR', '_blank'); // Open in new tab
// // //     }
// // //   };

// // //   const steps = [
// // //     {
// // //       title: 'Customer Details',
// // //       content: (
// // //         <div>
// // //           <Label>Name:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={customerDetails.name}
// // //             onChange={(e) => handleInputChange(e, 'name', setCustomerDetails)}
// // //             placeholder="Enter your full name"
// // //           />
// // //           <Label>Contact Number:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={customerDetails.contactNumber}
// // //             onChange={(e) => handleInputChange(e, 'contactNumber', setCustomerDetails)}
// // //             placeholder="Enter contact number"
// // //           />
// // //           <Label>Email ID:</Label>
// // //           <InputField
// // //             type="email"
// // //             value={customerDetails.email}
// // //             onChange={(e) => handleInputChange(e, 'email', setCustomerDetails)}
// // //             placeholder="Enter email"
// // //           />
// // //           <Label>Address:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={customerDetails.address}
// // //             onChange={(e) => handleInputChange(e, 'address', setCustomerDetails)}
// // //             placeholder="Enter address"
// // //           />
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: 'Dog Details',
// // //       content: (
// // //         <div>
// // //           <Label>Dog Name:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={dogDetails.name}
// // //             onChange={(e) => handleInputChange(e, 'name', setDogDetails)}
// // //             placeholder="Enter dog name"
// // //           />
// // //           <Label>Age:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={dogDetails.age}
// // //             onChange={(e) => handleInputChange(e, 'age', setDogDetails)}
// // //             placeholder="Enter dog age"
// // //           />
// // //           <Label>Breed:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={dogDetails.breed}
// // //             onChange={(e) => handleInputChange(e, 'breed', setDogDetails)}
// // //             placeholder="Enter dog breed"
// // //           />
// // //           <Label>Size:</Label>
// // //           <InputField
// // //             type="text"
// // //             value={dogDetails.size}
// // //             onChange={(e) => handleInputChange(e, 'size', setDogDetails)}
// // //             placeholder="Enter dog size"
// // //           />
// // //           <Label>Is your dog ferocious?</Label>
// // //           <RadioButtonGroup>
// // //             <label>
// // //               <input
// // //                 type="radio"
// // //                 value="yes"
// // //                 checked={dogDetails.isFerocious === 'yes'}
// // //                 onChange={(e) => handleRadioChange(e, 'isFerocious', setDogDetails)}
// // //               />
// // //               Yes
// // //             </label>
// // //             <label>
// // //               <input
// // //                 type="radio"
// // //                 value="no"
// // //                 checked={dogDetails.isFerocious === 'no'}
// // //                 onChange={(e) => handleRadioChange(e, 'isFerocious', setDogDetails)}
// // //               />
// // //               No
// // //             </label>
// // //           </RadioButtonGroup>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: 'Select Grooming Slot',
// // //       content: (
// // //         <SlotContainer>
// // //           {['10:00', '12:00', '14:00', '16:00', '18:00'].map((slot) => (
// // //             <Slot
// // //               key={slot}
// // //               selected={selectedSlot === slot}
// // //               onClick={() => handleSlotSelect(slot)}
// // //               isBooked={bookedSlots.includes(slot)}
// // //             >
// // //               {slot}
// // //             </Slot>
// // //           ))}
// // //         </SlotContainer>
// // //       )
// // //     },
// // //     {
// // //       title: 'Payment Options',
// // //       content: (
// // //         <div>
// // //           <PaymentButton onClick={() => handlePayment('razorpay')}>Pay with Razorpay</PaymentButton>
// // //           <PaymentButton onClick={() => handlePayment('paypal')}>Pay with PayPal</PaymentButton>
// // //           <PaymentButton onClick={() => handlePayment('upi')}>Pay with UPI</PaymentButton>
// // //         </div>
// // //       )
// // //     },
// // //     {
// // //       title: 'Booking Confirmed',
// // //       content: (
// // //         <div>
// // //           <ConfirmationMessage>Your grooming slot has been confirmed!</ConfirmationMessage>
// // //           <Button primary onClick={() => history.push('/')}>
// // //             Go to Home Page
// // //           </Button>
// // //         </div>
// // //       )
// // //     }
// // //   ];

// // //   return (
// // //     <AppContainer>
// // //       <Header>Grooming Appointment Booking</Header>
// // //       <StepContainer>
// // //         <h2>{steps[step - 1].title}</h2>
// // //         {steps[step - 1].content}
// // //         {step < steps.length && <Button primary onClick={goToNextStep}>Go to Next Page</Button>}
// // //       </StepContainer>
// // //     </AppContainer>
// // //   );
// // // };

// // // export default GroomingBookingApp;



// // import React, { useState } from 'react';
// // import styled from 'styled-components';
// // import { useNavigate } from 'react-router-dom';

// // // Styled Components
// // const AppContainer = styled.div`
// //   font-family: 'Roboto', sans-serif;
// //   padding: 20px;
// //   max-width: 1000px;
// //   margin: auto;
// //   background-color: #f8f9fa;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// // `;

// // const Header = styled.h1`
// //   text-align: center;
// //   color: #333;
// //   margin-bottom: 30px;
// // `;

// // const Button = styled.button`
// //   padding: 10px 20px;
// //   background-color: ${(props) => (props.primary ? '#28a745' : '#007bff')};
// //   color: white;
// //   font-weight: bold;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   border: none;
// //   margin-top: 20px;
// //   width: 100%;
// //   &:hover {
// //     background-color: ${(props) => (props.primary ? '#218838' : '#0056b3')};
// //   }
// // `;

// // const Section = styled.div`
// //   margin-bottom: 20px;
// // `;

// // const InputField = styled.input`
// //   width: 100%;
// //   padding: 10px;
// //   margin-bottom: 10px;
// //   border-radius: 5px;
// //   border: 1px solid #ccc;
// // `;

// // const Label = styled.label`
// //   font-weight: bold;
// //   display: block;
// //   margin-bottom: 5px;
// // `;

// // const Container = styled.div`
// //   display: flex;
// //   flex-wrap: wrap;
// //   justify-content: space-around;
// // `;

// // const Card = styled.div`
// //   width: 300px;
// //   margin: 20px;
// //   background: #fff;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   padding: 20px;
// //   display: flex;
// //   flex-direction: column;
// //   cursor: pointer;
// //   border: ${(props) => (props.selected ? '2px solid #007bff' : '2px solid #ccc')};
// //   &:hover {
// //     border: 2px solid #007bff;
// //   }
// // `;

// // const Title = styled.h3`
// //   font-size: 20px;
// //   color: #333;
// //   margin-bottom: 10px;
// // `;

// // const Price = styled.p`
// //   font-size: 18px;
// //   color: #007bff;
// //   font-weight: bold;
// //   margin: 10px 0;
// // `;

// // const AddOnCheckbox = styled.div`
// //   margin: 5px 0;
// // `;

// // const AddToCartButton = styled.button`
// //   padding: 10px 15px;
// //   background: #007bff;
// //   color: #fff;
// //   border: none;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   margin-top: 15px;

// //   &:hover {
// //     background: #0056b3;
// //   }
// // `;

// // const PopupContainer = styled.div`
// //   position: fixed;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background-color: rgba(0, 0, 0, 0.5);
// //   display: ${(props) => (props.isVisible ? 'block' : 'none')};
// //   justify-content: center;
// //   align-items: center;
// // `;

// // const PopupContent = styled.div`
// //   background-color: white;
// //   padding: 20px;
// //   border-radius: 8px;
// //   width: 300px;
// //   text-align: center;
// // `;

// // const PopupButton = styled.button`
// //   padding: 10px 15px;
// //   background-color: #007bff;
// //   color: white;
// //   font-weight: bold;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   margin-top: 10px;
// // `;

// // const PopupTitle = styled.h3`
// //   color: #333;
// // `;

// // const CartContainer = styled.div`
// //   display: ${(props) => (props.isVisible ? 'block' : 'none')};
// //   position: absolute;
// //   top: 50px;
// //   right: 20px;
// //   background: #fff;
// //   border-radius: 8px;
// //   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// //   padding: 20px;
// //   width: 300px;
// // `;

// // const CartItem = styled.div`
// //   padding: 10px;
// //   margin-bottom: 10px;
// //   border-bottom: 1px solid #ccc;
// // `;

// // const CartButton = styled.button`
// //   padding: 10px;
// //   background: red;
// //   color: white;
// //   font-weight: bold;
// //   border-radius: 50%;
// //   cursor: pointer;
// //   position: absolute;
// //   top: 5px;
// //   right: 5px;
// // `;

// // const CartTitle = styled.h4`
// //   margin-bottom: 10px;
// // `;

// // const CartContent = styled.div``;

// // const GroomingPage = () => {
// //   const navigate = useNavigate();
// //   const [step, setStep] = useState(1);
// //   const [customerDetails, setCustomerDetails] = useState({
// //     name: '',
// //     contactNumber: '',
// //     address: '',
// //     email: '',
// //   });

// //   const [selectedPackage, setSelectedPackage] = useState(null);
// //   const [selectedSessions, setSelectedSessions] = useState(1); // 1 or 3 sessions
// //   const [addOns, setAddOns] = useState({
// //     dematting: false,
// //     deshedding: false,
// //     earHairTrimming: false,
// //     stylishHairCut: false,
// //     zeroHairCutting: false,
// //     teethBrushing: false,
// //   });

// //   const [dogSize, setDogSize] = useState('small');
// //   const [hairLength, setHairLength] = useState('short');
// //   const [showPopup, setShowPopup] = useState(false);
// //   const [showCart, setShowCart] = useState(false);
// //   const [cart, setCart] = useState([]);

// //   const packages = [
// //     {
// //       id: 1,
// //       name: 'Bath + Basic Grooming',
// //       basePrice: 1499,
// //       description: 'Basic Grooming Package',
// //       includedItems: [
// //         'Shampoo & Conditioning',
// //         'Nail trimming',
// //         'Ear cleaning',
// //         'Brushing',
// //       ],
// //     },
// //     {
// //       id: 2,
// //       name: 'Full Service',
// //       basePrice: 1999,
// //       description: 'Includes advanced services like De-shedding',
// //       includedItems: [
// //         'Full Body Grooming',
// //         'De-shedding Treatment',
// //         'Nail trimming',
// //         'Ear cleaning',
// //         'Teeth brushing',
// //       ],
// //     },
// //     {
// //       id: 3,
// //       name: 'Full Trim Package',
// //       basePrice: 1799,
// //       description: 'Full Trim for your pet',
// //       includedItems: [
// //         'Full Hair Trim',
// //         'Nail trimming',
// //         'Ear cleaning',
// //         'Brushing',
// //       ],
// //     },
// //   ];

// //   const addOnPrices = {
// //     dematting: { small: 300, medium: 400, large: 500, giant: 600 },
// //     deshedding: { small: 200, medium: 300, large: 400, giant: 500 },
// //     earHairTrimming: { small: 150, medium: 200, large: 250, giant: 300 },
// //     stylishHairCut: { small: 500, medium: 600, large: 700, giant: 800 },
// //     zeroHairCutting: { small: 600, medium: 700, large: 800, giant: 900 },
// //     teethBrushing: { small: 100, medium: 150, large: 200, giant: 250 },
// //   };

// //   const calculateAddOnPrice = () => {
// //     let total = 0;
// //     Object.keys(addOns).forEach((addon) => {
// //       if (addOns[addon]) {
// //         total += addOnPrices[addon][dogSize];
// //       }
// //     });
// //     return total;
// //   };

// //   const handlePackageSelection = (packageId) => {
// //     const selected = packages.find((pkg) => pkg.id === packageId);
// //     setSelectedPackage(selected);
// //   };

// //   const showPricePopup = () => {
// //     setShowPopup(true);
// //   };

// //   const addToCart = () => {
// //     const cartItem = {
// //       package: selectedPackage.name,
// //       price: selectedPackage.basePrice * selectedSessions + calculateAddOnPrice(),
// //       sessions: selectedSessions,
// //     };
// //     setCart([...cart, cartItem]);
// //     setShowPopup(false);
// //     setShowCart(true);
// //   };

// //   const removeFromCart = () => {
// //     setShowCart(false);
// //   };

// //   const goToNextPage = () => {
// //     if (step === 1) {
// //       setStep(2);
// //     }
// //   };

// //   return (
// //     <AppContainer>
// //       <Header>Grooming Appointment Booking</Header>
// //       <Section>
// //         <h2>Select a Package</h2>
// //         <Container>
// //           {packages.map((pkg) => (
// //             <Card
// //               key={pkg.id}
// //               selected={selectedPackage && selectedPackage.id === pkg.id}
// //               onClick={() => handlePackageSelection(pkg.id)}
// //             >
// //               <Title>{pkg.name}</Title>
// //               <Price>{`₹${pkg.basePrice}`}</Price>
// //               <p>{pkg.description}</p>
// //               <h4>Included:</h4>
// //               <ul>
// //                 {pkg.includedItems.map((item, index) => (
// //                   <li key={index}>{item}</li>
// //                 ))}
// //               </ul>
// //             </Card>
// //           ))}
// //         </Container>
// //         {selectedPackage && (
// //           <>
// //             <Button primary onClick={showPricePopup}>
// //               Select Sessions & Add to Cart
// //             </Button>
// //             <PopupContainer isVisible={showPopup}>
// //               <PopupContent>
// //                 <PopupTitle>{selectedPackage.name}</PopupTitle>
// //                 <div>
// //                   <Label>Sessions</Label>
// //                   <select
// //                     value={selectedSessions}
// //                     onChange={(e) => setSelectedSessions(Number(e.target.value))}
// //                   >
// //                     <option value={1}>1 Session</option>
// //                     <option value={3}>3 Sessions (Discounted)</option>
// //                   </select>
// //                 </div>
// //                 <h4>Selected Add-Ons:</h4>
// //                 <div>
// //                   {Object.keys(addOns).map((addon, index) => (
// //                     <AddOnCheckbox key={index}>
// //                       <input
// //                         type="checkbox"
// //                         checked={addOns[addon]}
// //                         onChange={() =>
// //                           setAddOns((prev) => ({ ...prev, [addon]: !prev[addon] }))
// //                         }
// //                       />
// //                       {addon}
// //                     </AddOnCheckbox>
// //                   ))}
// //                 </div>
// //                 <Price>{`Total Price: ₹${selectedPackage.basePrice * selectedSessions + calculateAddOnPrice()}`}</Price>
// //                 <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
// //                 <PopupButton onClick={() => setShowPopup(false)}>Close</PopupButton>
// //               </PopupContent>
// //             </PopupContainer>
// //           </>
// //         )}
// //       </Section>

// //       <CartContainer isVisible={showCart}>
// //         <CartTitle>Your Cart</CartTitle>
// //         <CartContent>
// //           {cart.map((item, index) => (
// //             <CartItem key={index}>
// //               <h5>{item.package}</h5>
// //               <p>Sessions: {item.sessions}</p>
// //               <Price>{`₹${item.price}`}</Price>
// //             </CartItem>
// //           ))}
// //         </CartContent>
// //         <CartButton onClick={removeFromCart}>X</CartButton>
// //       </CartContainer>

// //       <Button onClick={goToNextPage} disabled={!selectedPackage || !selectedSessions}>
// //         Go to Next Page
// //       </Button>
// //     </AppContainer>
// //   );
// // };

// // export default GroomingPage;


// // import React, { useState } from "react";
// // import styled from "styled-components";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate for routing

// // // Styled Components
// // const Container = styled.div`
// //   font-family: "Roboto", sans-serif;
// //   max-width: 1000px;
// //   margin: 50px auto;
// //   background-color: #f9f9f9;
// //   padding: 20px;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// // `;

// // const Header = styled.h1`
// //   text-align: center;
// //   color: #007bff;
// //   font-size: 2.5rem;
// //   margin-bottom: 40px;
// // `;

// // const GroomingCard = styled.div`
// //   background-color: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
// //   margin-bottom: 20px;
// //   padding: 20px;
// // `;

// // const Title = styled.h3`
// //   color: #007bff;
// //   font-size: 1.8rem;
// // `;

// // const Price = styled.p`
// //   font-size: 1.4rem;
// //   color: #333;
// //   font-weight: bold;
// // `;

// // const FeatureItem = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 10px;
// // `;

// // const Label = styled.label`
// //   font-size: 1.2rem;
// //   color: #555;
// // `;

// // const Checkbox = styled.input`
// //   width: 20px;
// //   height: 20px;
// //   margin-right: 10px;
// // `;

// // const AddonsCard = styled.div`
// //   background-color: #fff;
// //   border-radius: 10px;
// //   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// //   padding: 20px;
// //   margin-bottom: 20px;
// // `;

// // const AddonTitle = styled.h4`
// //   font-size: 1.6rem;
// //   color: #007bff;
// // `;

// // const AddonOption = styled.div`
// //   display: flex;
// //   align-items: center;
// //   gap: 10px;
// // `;

// // const Select = styled.select`
// //   padding: 8px;
// //   margin: 10px 0;
// //   border-radius: 5px;
// //   font-size: 1.2rem;
// //   width: 100%;
// // `;

// // const Option = styled.option``;

// // const Button = styled.button`
// //   padding: 12px 20px;
// //   background-color: #007bff;
// //   color: white;
// //   font-weight: bold;
// //   border-radius: 5px;
// //   cursor: pointer;
// //   border: none;
// //   width: 100%;
// //   font-size: 1.1rem;
// //   transition: background-color 0.3s;

// //   &:hover {
// //     background-color: #0056b3;
// //   }
// // `;

// // const GroomingPackages = () => {
// //   const [selectedServices, setSelectedServices] = useState({
// //     bathBasic: [],
// //     fullService: [],
// //     fullTrim: [],
// //   });

// //   const [selectedAddons, setSelectedAddons] = useState([]);
// //   const [dogSize, setDogSize] = useState("small");
// //   const [hairLength, setHairLength] = useState("short");

// //   const navigate = useNavigate(); // Initialize the navigate function

// //   // Grooming service packages
// //   const servicePackages = [
// //     {
// //       id: "bathBasic",
// //       title: "Bath + Basic Grooming",
// //       price: "₹1499",
// //       features: [
// //         "Bath With Shampoo & Conditioner",
// //         "Blow Dry",
// //         "Face Haircutting",
// //         "Sanitary Trim",
// //         "Nail Clipping",
// //         "Ear Cleaning",
// //         "Eye Cleaning",
// //         "Teeth/Mouth Cleaning",
// //         "Paw Massage",
// //         "Combing/Brushing",
// //       ],
// //     },
// //     {
// //       id: "fullService",
// //       title: "Full Service",
// //       price: "₹1999",
// //       features: [
// //         "Bath With Shampoo & Conditioner",
// //         "Hair Styling/Trimming",
// //         "Body Massage",
// //         "Sanitary Trim",
// //         "Nail Clipping",
// //         "Ear & Eye Cleaning",
// //         "Paw Massage",
// //         "Combing/Brushing",
// //         "De-shedding Treatment",
// //         "Anti-Tick Treatment",
// //       ],
// //     },
// //     {
// //       id: "fullTrim",
// //       title: "Full Trim Package",
// //       price: "₹1499",
// //       features: [
// //         "Full Body Trimming",
// //         "Ear Cleaning",
// //         "Eye Cleaning",
// //         "Nail Clipping",
// //       ],
// //     },
// //   ];

// //   // Available add-ons with price change based on dog size and hair length
// //   const availableAddons = [
// //     {
// //       name: "De-matting",
// //       basePrice: { small: 200, medium: 300, large: 400, giant: 500 },
// //       lengthFactor: { short: 1, medium: 1.2, long: 1.5 },
// //     },
// //     {
// //       name: "Stylish Hair Cut",
// //       basePrice: { small: 300, medium: 400, large: 500, giant: 600 },
// //       lengthFactor: { short: 1, medium: 1.2, long: 1.5 },
// //     },
// //     {
// //       name: "Teeth Brushing",
// //       basePrice: { small: 100, medium: 150, large: 200, giant: 250 },
// //       lengthFactor: { short: 1, medium: 1.1, long: 1.3 },
// //     },
// //   ];

// //   // Calculate add-on price based on dog size and hair length
// //   const calculateAddonPrice = (addon) => {
// //     const basePrice = addon.basePrice[dogSize];
// //     const lengthMultiplier = addon.lengthFactor[hairLength];
// //     return basePrice * lengthMultiplier;
// //   };

// //   // Handle service selection
// //   const handleServiceChange = (packageId, feature) => {
// //     setSelectedServices((prev) => {
// //       const updated = { ...prev };
// //       if (updated[packageId].includes(feature)) {
// //         updated[packageId] = updated[packageId].filter((item) => item !== feature);
// //       } else {
// //         updated[packageId].push(feature);
// //       }
// //       return updated;
// //     });
// //   };

// //   // Handle add-on selection
// //   const handleAddonChange = (addon) => {
// //     setSelectedAddons((prev) => {
// //       if (prev.includes(addon)) {
// //         return prev.filter((item) => item !== addon);
// //       } else {
// //         return [...prev, addon];
// //       }
// //     });
// //   };

// //   // Proceed to the next page
// //   const handleNextPage = () => {
// //     navigate("/confirmation"); // Navigate to the confirmation page
// //   };

// //   return (
// //     <Container>
// //       <Header>Select Grooming Packages</Header>

// //       <div>
// //         {servicePackages.map((pkg) => (
// //           <GroomingCard key={pkg.id}>
// //             <Title>{pkg.title}</Title>
// //             <Price>{pkg.price}</Price>
// //             {pkg.features.map((feature, index) => (
// //               <FeatureItem key={index}>
// //                 <Checkbox
// //                   type="checkbox"
// //                   checked={selectedServices[pkg.id]?.includes(feature)}
// //                   onChange={() => handleServiceChange(pkg.id, feature)}
// //                 />
// //                 <Label>{feature}</Label>
// //               </FeatureItem>
// //             ))}
// //           </GroomingCard>
// //         ))}
// //       </div>

// //       <AddonsCard>
// //         <AddonTitle>Choose Add-ons</AddonTitle>
// //         {availableAddons.map((addon, index) => (
// //           <AddonOption key={index}>
// //             <Checkbox
// //               type="checkbox"
// //               checked={selectedAddons.includes(addon.name)}
// //               onChange={() => handleAddonChange(addon.name)}
// //             />
// //             <Label>
// //               {addon.name} - ₹{calculateAddonPrice(addon)}
// //             </Label>
// //           </AddonOption>
// //         ))}

// //         <div>
// //           <Select onChange={(e) => setDogSize(e.target.value)} value={dogSize}>
// //             <Option value="small">Small</Option>
// //             <Option value="medium">Medium</Option>
// //             <Option value="large">Large</Option>
// //             <Option value="giant">Giant</Option>
// //           </Select>

// //           <Select onChange={(e) => setHairLength(e.target.value)} value={hairLength}>
// //             <Option value="short">Short</Option>
// //             <Option value="medium">Medium</Option>
// //             <Option value="long">Long</Option>
// //           </Select>
// //         </div>
// //       </AddonsCard>

// //       <Button onClick={handleNextPage}>Proceed to Next Step</Button>
// //     </Container>
// //   );
// // };

// // export default GroomingPackages;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// // Styled Components for Grooming Flow
// const AppContainer = styled.div`
//   font-family: 'Roboto', sans-serif;
//   padding: 20px;
//   max-width: 1000px;
//   margin: auto;
//   background-color: #f8f9fa;
//   border-radius: 10px;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// `;

// const Header = styled.h1`
//   text-align: center;
//   color: #333;
//   margin-bottom: 30px;
// `;

// const Section = styled.div`
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: ${(props) => (props.primary ? '#28a745' : '#007bff')};
//   color: white;
//   font-weight: bold;
//   border-radius: 5px;
//   cursor: pointer;
//   border: none;
//   margin-top: 20px;
//   width: 100%;
//   &:hover {
//     background-color: ${(props) => (props.primary ? '#218838' : '#0056b3')};
//   }
// `;

// const InputField = styled.input`
//   width: 100%;
//   padding: 10px;
//   margin-bottom: 10px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const Label = styled.label`
//   font-weight: bold;
//   display: block;
//   margin-bottom: 5px;
// `;

// const SlotContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 20px;
// `;

// const Slot = styled.div`
//   display: inline-block;
//   padding: 10px;
//   margin: 5px;
//   cursor: ${(props) => (props.isBooked ? 'not-allowed' : 'pointer')};
//   background-color: ${(props) =>
//     props.isBooked ? '#ccc' : props.selected ? '#007bff' : '#fff'};
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   color: ${(props) => (props.selected ? '#fff' : '#000')};
//   &:hover {
//     background-color: ${(props) =>
//       props.isBooked ? '#ccc' : props.selected ? '#0056b3' : '#f0f0f0'};
//   }
// `;

// const ConfirmationMessage = styled.h3`
//   color: green;
//   text-align: center;
// `;

// const StepContainer = styled.div`
//   max-width: 600px;
//   margin: 0 auto;
// `;

// // Unified Grooming Flow Component
// const GroomingFlow = () => {
//   const navigate = useNavigate();
//   const [step, setStep] = useState(1);

//   // State for Customer Details
//   const [customerDetails, setCustomerDetails] = useState({
//     name: '',
//     contactNumber: '',
//     email: '',
//     address: '',
//   });

//   // State for Dog Details
//   const [dogDetails, setDogDetails] = useState({
//     name: '',
//     age: '',
//     breed: '',
//     size: '',
//     hairLength: '',
//     isFerocious: null,
//   });

//   // State for Grooming Slot
//   const [selectedSlot, setSelectedSlot] = useState('');

//   // State for Selected Add-Ons
//   const [selectedAddOns, setSelectedAddOns] = useState([]);

//   // State for Payment
//   const [paymentMethod, setPaymentMethod] = useState('');

//   const [bookedSlots, setBookedSlots] = useState(['12:00', '16:00']); // Example booked slots

//   // Handlers for form fields and changes
//   const handleInputChange = (e, field, setState) => {
//     setState((prev) => ({ ...prev, [field]: e.target.value }));
//   };

//   const handleRadioChange = (e, field, setState) => {
//     setState((prev) => ({ ...prev, [field]: e.target.value }));
//   };

//   const handleSlotSelect = (slot) => {
//     if (bookedSlots.includes(slot)) return;
//     setSelectedSlot(slot);
//   };

//   const handleAddonSelect = (addon) => {
//     setSelectedAddOns((prev) =>
//       prev.includes(addon) ? prev.filter((item) => item !== addon) : [...prev, addon]
//     );
//   };

//   const validateCustomerDetails = () => {
//     const { name, contactNumber, email, address } = customerDetails;
//     const namePattern = /^[A-Za-z ]+$/;
//     const contactPattern = /^\d{10}$/;
//     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!name.match(namePattern)) return false;
//     if (!contactNumber.match(contactPattern)) return false;
//     if (!email.match(emailPattern)) return false;
//     if (!address) return false;
//     return true;
//   };

//   const validateDogDetails = () => {
//     const { name, age, breed, size, hairLength, isFerocious } = dogDetails;
//     return name && age && breed && size && hairLength && isFerocious !== null;
//   };

//   const goToNextStep = () => {
//     if (step === 1 && !validateCustomerDetails()) {
//       alert('Please fill in all fields correctly!');
//       return;
//     }
//     if (step === 2 && !validateDogDetails()) {
//       alert('Please fill in all dog details correctly!');
//       return;
//     }
//     if (step === 3 && !selectedSlot) {
//       alert('Please select a grooming slot!');
//       return;
//     }

//     setStep((prevStep) => prevStep + 1);
//   };

//   const handlePayment = (method) => {
//     setPaymentMethod(method);
//     if (method === 'razorpay') {
//       window.open('https://razorpay.com', '_blank');
//     } else if (method === 'paypal') {
//       window.open('https://www.paypal.com', '_blank');
//     } else if (method === 'upi') {
//       window.open('upi://pay?pa=your_upi_id&pn=YourName&mc=0000&tid=1234567890&tr=txn123&am=10.00&cu=INR', '_blank');
//     }
//   };

//   const steps = [
//     {
//       title: 'Customer Details',
//       content: (
//         <div>
//           <Label>Name:</Label>
//           <InputField
//             type="text"
//             value={customerDetails.name}
//             onChange={(e) => handleInputChange(e, 'name', setCustomerDetails)}
//             placeholder="Enter your full name"
//           />
//           <Label>Contact Number:</Label>
//           <InputField
//             type="text"
//             value={customerDetails.contactNumber}
//             onChange={(e) => handleInputChange(e, 'contactNumber', setCustomerDetails)}
//             placeholder="Enter contact number"
//           />
//           <Label>Email ID:</Label>
//           <InputField
//             type="email"
//             value={customerDetails.email}
//             onChange={(e) => handleInputChange(e, 'email', setCustomerDetails)}
//             placeholder="Enter email"
//           />
//           <Label>Address:</Label>
//           <InputField
//             type="text"
//             value={customerDetails.address}
//             onChange={(e) => handleInputChange(e, 'address', setCustomerDetails)}
//             placeholder="Enter address"
//           />
//         </div>
//       )
//     },
//     {
//       title: 'Dog Details',
//       content: (
//         <div>
//           <Label>Dog Name:</Label>
//           <InputField
//             type="text"
//             value={dogDetails.name}
//             onChange={(e) => handleInputChange(e, 'name', setDogDetails)}
//             placeholder="Enter dog name"
//           />
//           <Label>Age:</Label>
//           <InputField
//             type="text"
//             value={dogDetails.age}
//             onChange={(e) => handleInputChange(e, 'age', setDogDetails)}
//             placeholder="Enter dog age"
//           />
//           <Label>Breed:</Label>
//           <InputField
//             type="text"
//             value={dogDetails.breed}
//             onChange={(e) => handleInputChange(e, 'breed', setDogDetails)}
//             placeholder="Enter dog breed"
//           />
//           <Label>Size:</Label>
//           <select
//             value={dogDetails.size}
//             onChange={(e) => handleInputChange(e, 'size', setDogDetails)}
//           >
//             <option value="">Select Size</option>
//             <option value="small">Small</option>
//             <option value="medium">Medium</option>
//             <option value="large">Large</option>
//             <option value="giant">Giant</option>
//           </select>
//           <Label>Hair Length:</Label>
//           <select
//             value={dogDetails.hairLength}
//             onChange={(e) => handleInputChange(e, 'hairLength', setDogDetails)}
//           >
//             <option value="">Select Hair Length</option>
//             <option value="short">Short</option>
//             <option value="medium">Medium</option>
//             <option value="long">Long</option>
//           </select>
//           <Label>Ferocious:</Label>
//           <div>
//             <label>
//               <input
//                 type="radio"
//                 value="true"
//                 checked={dogDetails.isFerocious === 'true'}
//                 onChange={(e) => handleRadioChange(e, 'isFerocious', setDogDetails)}
//               />
//               Yes
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="false"
//                 checked={dogDetails.isFerocious === 'false'}
//                 onChange={(e) => handleRadioChange(e, 'isFerocious', setDogDetails)}
//               />
//               No
//             </label>
//           </div>
//         </div>
//       )
//     },
//     {
//       title: 'Select Grooming Slot',
//       content: (
//         <div>
//           <Label>Select Slot:</Label>
//           <SlotContainer>
//             {['10:00', '12:00', '14:00', '16:00', '18:00'].map((slot) => (
//               <Slot
//                 key={slot}
//                 isBooked={bookedSlots.includes(slot)}
//                 selected={selectedSlot === slot}
//                 onClick={() => handleSlotSelect(slot)}
//               >
//                 {slot}
//               </Slot>
//             ))}
//           </SlotContainer>
//         </div>
//       )
//     },
//     {
//       title: 'Add-Ons',
//       content: (
//         <div>
//           <Label>Choose Add-ons:</Label>
//           <div>
//             {['De-matting', 'Stylish Hair Cut', 'Teeth Brushing'].map((addon) => (
//               <div key={addon}>
//                 <input
//                   type="checkbox"
//                   checked={selectedAddOns.includes(addon)}
//                   onChange={() => handleAddonSelect(addon)}
//                 />
//                 {addon}
//               </div>
//             ))}
//           </div>
//         </div>
//       )
//     },
//     {
//       title: 'Confirmation & Payment',
//       content: (
//         <div>
//           <Label>Payment Method:</Label>
//           <div>
//             <Button onClick={() => handlePayment('razorpay')}>Pay with Razorpay</Button>
//             <Button onClick={() => handlePayment('paypal')}>Pay with PayPal</Button>
//             <Button onClick={() => handlePayment('upi')}>Pay with UPI</Button>
//           </div>
//         </div>
//       )
//     }
//   ];

//   return (
//     <AppContainer>
//       <Header>Pet Grooming Appointment</Header>
//       <StepContainer>
//         <h2>{steps[step - 1].title}</h2>
//         {steps[step - 1].content}
//         <Button primary onClick={goToNextStep}>
//           {step === 5 ? 'Submit' : 'Next'}
//         </Button>
//       </StepContainer>
//     </AppContainer>
//   );
// };

// export default GroomingFlow;
