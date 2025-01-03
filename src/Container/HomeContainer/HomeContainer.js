import React from "react";
import Mainhero from "../../Components/Mainhero/Mainhero"
import { Navbar } from "../../Components/Navbar/Navbar";
// import Cat from "../../Components/CatProp/Cat";
// import MainPharmacy from "../../Components/Pharmacy/MainPharmacy";
// import LightningDealsPage from "../../Components/LIghtningdeals/LigthningDeals";
// import SearchArea from "../../Components/SearchArea/SearchArea";
export const HomeContainer = () =>{
    return (
        <>
        <Navbar/>
        <Mainhero/>
        {/* <Cat/> */}
        {/* <MainPharmacy/> */}
        {/* <LightningDealsPage/> */}
        </>
    )
}