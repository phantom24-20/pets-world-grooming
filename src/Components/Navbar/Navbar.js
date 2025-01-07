import React, { useState } from 'react';
import PrimarySearchAppBar from "../Searchbar/Searchbar";
import PetStoreCategories from "./Navlinks";
import LoginPage from "../LoginPage/LoginPage";
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
// import { Confirmation } from '../Grooming/ConfirmationPage';
export const Navbar = () =>{
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
<Routes>
<Route path="/" element={<PrimarySearchAppBar />} />
<Route path="/login" element={<LoginPage />} />
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
        <Route path="/slots/:name" element={<GroomingFlow />} />
        <Route path="/consult-vet" element={<ConsultVet/>} />



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