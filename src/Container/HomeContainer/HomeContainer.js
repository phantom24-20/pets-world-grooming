import React from "react";
import Mainhero from "../../Components/Mainhero/Mainhero"
import { Navbar } from "../../Components/Navbar/Navbar";
// import PetStar from "../../Components/PetStar/PetStar";
// import ClothingEssentials from "../../Components/Clothing/Clothing";
// import FlashSale from "../../Components/Herocards/FlashSale";
// import BrandDetails from "../../Components/Mainhero/BrandDetails";
// import Cat from "../../Components/CatProp/Cat";
// import MainPharmacy from "../../Components/Pharmacy/MainPharmacy";
// import LightningDealsPage from "../../Components/LIghtningdeals/LigthningDeals";
// import SearchArea from "../../Components/SearchArea/SearchArea";
// import GroomingBookingApp from "../../Components/Grooming/Grooming";
export const HomeContainer = () =>{
    return (
        <>
        <Navbar/>

        <Mainhero/>
        {/* <BrandDetails/> */}

 {/* <ClothingEssentials/> */}

{/* <FlashSale/> */}

        {/* <PetStar/> */}
        {/* <Cat/> */}
        {/* <MainPharmacy/> */}
        {/* <LightningDealsPage/> */}
        {/* <GroomingBookingApp/> */}
        </>
    )
}