import React from "react";
// import axios from "axios";
// import React, { useEffect, useState } from 'react';
// import { getProducts } from '../../api';
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




// import { useState, useEffect } from "react";

// function HomeContainer() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:5000/api/products")
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div>
//       {products.map((product) => (
//         <div key={product._id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomeContainer;
