import React from "react";
import PrimarySearchAppBar from "../Searchbar/Searchbar";
import PetStoreCategories from "./Navlinks";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
export const Navbar = () =>{
    return (
        <>
        <PrimarySearchAppBar/>

        
        <PetStoreCategories/>
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