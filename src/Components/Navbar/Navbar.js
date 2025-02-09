import React, { useState } from 'react';
import PrimarySearchAppBar from "../Searchbar/Searchbar";
import PetStoreCategories from "./Navlinks";
import LoginPage from "../LoginPage/LoginPage";
import AccountsPage from '../AccountsPage/AccountsPage';
import Cart from "../Cart/Cart";
import SubCategoryPage from "../SubCategories/SubCategory";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from '../Cart/Checkout';
import Cat from '../CatProp/Cat';
import LightningDealsPage from '../LIghtningdeals/LigthningDeals';
import MainPharmacy from '../Pharmacy/MainPharmacy';
import ContactUs from '../CustomerCare/CustomerCare';
import OrderTracking from '../Tracking/Tracking';
import GroomingPackages from '../Grooming/Grooming';
import CustomerDetails from '../Grooming/CustomerDetails';
import GroomingFlow from '../Grooming/Grooming';
import ConsultVet from '../SubCategories/ConsultVet/ConsultVet';
import PetStar from '../PetStar/PetStar';
import ConsumerDeatils from '../PetGrooming/ConsumerDetails';
import PetDetails from '../PetGrooming/PetDetails';
import Vaccination from "../ToggleMenu/Vaccination";
// import PackageSelection from '../PetGrooming/PackageSelection';
import PackageAndAddOns from '../PetGrooming/PackageSelection';
import AddOns from '../PetGrooming/AddOns';
import GroomingSlots from '../PetGrooming/GroomingSlots';
import PaymentPage from '../PetGrooming/PaymentPage';
import ReviewsCarousel from '../PetGrooming/ReviewsCarousel';
import BookingConfirmed from '../PetGrooming/BookingConfirmed';
import BecomeInvestor from '../ToggleMenu/BecomeInvestor';
import Merchandise from '../ToggleMenu/Merchandise';
// import { Confirmation } from '../Grooming/ConfirmationPage';
export const Navbar = () =>{
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
<Routes>
<Route path="/" element={<PrimarySearchAppBar />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/account" element={<AccountsPage/>} />
<Route path="/cart"  target="_blank" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
<Route path="/checkout" component={Checkout} />
<Route path="/contact-us" element={<ContactUs />} />
<Route path="/order-tracking" element={<OrderTracking orderId="12345" />} />

</Routes>

        <Routes>
        
        <Route path="/" element={<PetStoreCategories/>} />
        <Route path="/subcategory/:name"  target="_blank" element={<SubCategoryPage />} />
        <Route path="/cat/:name"  target="_blank" element={<Cat/>} />
        <Route path="/deals/:name"  target="_blank" element={<LightningDealsPage/>} />
        <Route path="/pharm/:name"  target="_blank" element={<MainPharmacy/>} />
        {/* <Route path="/slots/:name"  target="_blank" element={<GroomingPage/>} /> */}

        {/* <Route path="/slots/:name" element={<CustomerDetails />} />
        <Route path="/grooming-packages" element={<GroomingPackages />} />
        <Route path="/confirmation" element={<ConfirmationPage />} /> */}
         {/* <Route path="slots/:name" element={<CustomerDetails />} />
        <Route path="slots/grooming-packages" element={<GroomingPackages />} /> */}
        {/* <Route path="/confirmation" element={Confirmation} /> */}
        <Route path="/pet-star" element={<PetStar />} /> 
        <Route path="/consumerDetails" element={<ConsumerDeatils/>} />
        <Route path="/reviews" element={<ReviewsCarousel/>} />
        <Route path="/pet-details" element={<PetDetails/>} />
        <Route path="/package-selection" element={<PackageAndAddOns/>} />
        <Route path="/add-ons" element={<AddOns/>} />
        <Route path="/grooming-slots" element={<GroomingSlots/>} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path ="/booking-confirmed" element={<BookingConfirmed/>}/>
        {/* <Route path="/slots/:name" element={<GroomingFlow />} /> */}
        <Route path="/consult-vet" element={<ConsultVet/>} />

        
{/*     
      <Routes> */}
       <Route path="/vaccination" element={<Vaccination/>} /> {/* Add route for Vaccination */}
       <Route path="/BecomeInvestor" element={<BecomeInvestor/>} /> {/* Add route for Vaccination */}
        <Route path="/Merchandise" element={<Merchandise/>} /> {/* Add route for Vaccination */}
       
        
        {/* You can add other routes here */}
      {/* </Routes> */}
   
      </Routes>
  
        {/* <Router>
        
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/events"
                    element={<Events />}
                />
                <Route
                    path="/causes"
                    element={<Causes/>}
                />
                <Route path="/team" element={<Teams />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />}
                />
            </Routes>
        </Router> */}
        </>
    )
}