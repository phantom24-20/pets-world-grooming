import React, { useState } from 'react';
import PrimarySearchAppBar from "../Searchbar/Searchbar";
import PetStoreCategories from "./Navlinks";
import LoginPage from "../LoginPage/LoginPage";
import Cart from "../Cart/Cart";
import SubCategoryPage from "../SubCategories/SubCategory";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Checkout from '../Cart/Checkout';
import Cat from '../CatProp/Cat';
export const Navbar = () =>{
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
<Routes>
<Route path="/" element={<PrimarySearchAppBar />} />
<Route path="/login" element={<LoginPage />} />
<Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
<Route path="/checkout" component={Checkout} />

</Routes>

        <Routes>
        
        <Route path="/" element={<PetStoreCategories/>} />
        <Route path="/subcategory/:name"  target="_blank" element={<SubCategoryPage />} />
        <Route path="/cat/:name"  target="_blank" element={<Cat/>} />

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