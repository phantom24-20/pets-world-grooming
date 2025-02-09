// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import styled from "styled-components";

// // Styled Components
// const PageContainer = styled.div`
//   display: flex;
//   padding: 20px;
// `;

// const Sidebar = styled.div`
//   width: 200px;
//   padding: 20px;
//   background-color: #f8f9fa;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   margin-right: 20px;
// `;

// const FilterSection = styled.div`
//   margin-bottom: 30px;
// `;

// const FilterTitle = styled.h3`
//   font-size: 16px;
//   margin-bottom: 10px;
// `;

// const FilterCheckbox = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-size: 14px;
// `;

// const DealsContainer = styled.div`
//   flex-grow: 1;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// const ProductCard = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 15px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   text-align: center;
// `;

// const ProductImage = styled.img`
//   max-width: 100%;
//   border-radius: 10px;
//   margin-bottom: 15px;
// `;

// const ProductName = styled.h4`
//   font-size: 16px;
//   color: #333;
//   margin-bottom: 10px;
// `;

// const PriceSection = styled.div`
//   margin-bottom: 15px;
// `;

// const OriginalPrice = styled.span`
//   text-decoration: line-through;
//   color: #aaa;
//   margin-right: 10px;
// `;

// const DealPrice = styled.span`
//   font-weight: bold;
//   color: #8B0000;
// `;

// const AddToCartButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.3s;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const CartModal = styled.div`
//   position: fixed;
//   top: 0;
//   right: 0;
//   width: 300px;
//   height: 100%;
//   background-color: white;
//   box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.1);
//   padding: 20px;
//   z-index: 1000;
//   overflow-y: auto;
//   display: ${(props) => (props.show ? "block" : "none")};
// `;

// const CartItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 15px;
// `;

// const CartImage = styled.img`
//   max-width: 50px;
//   border-radius: 10px;
//   margin-right: 10px;
// `;

// const CartCloseButton = styled.button`
//   background-color: transparent;
//   border: none;
//   font-size: 24px;
//   color: #333;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   cursor: pointer;

//   &:hover {
//     color: #ff5733;
//   }
// `;

// const Cart = ({ cartItems, onClose }) => {
//   return (
//     <CartModal show={cartItems.length > 0}>
//       <CartCloseButton onClick={onClose}>×</CartCloseButton>
//       <h3>Cart</h3>
//       {cartItems.length > 0 ? (
//         cartItems.map((item) => (
//           <CartItem key={item.id}>
//             <CartImage src={item.image} alt={item.name} />
//             <div>
//               <p>{item.name}</p>
//               <p>Quantity: {item.quantity}</p>
//               <p>Price: ₹{item.price}</p>
//             </div>
//           </CartItem>
//         ))
//       ) : (
//         <p>No items in the cart.</p>
//       )}
//     </CartModal>
//   );
// };

// const LightningDealsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [showCart, setShowCart] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/products", {
//         params: { category: "lightningDeals" }, // Ensure correct case
//       })
//       .then((response) => setProducts(response.data))
//       .catch((error) => console.error("Failed to fetch products", error));
//   }, []);
  

//   const handleAddToCart = (product, quantity) => {
//     setCart((prev) => [
//       ...prev,
//       { ...product, quantity, price: product.dealPrice * quantity },
//     ]);
//   };

//   const handleToggleCart = () => {
//     setShowCart(!showCart);
//   };

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const filteredProducts = products.filter((product) => product.type === "lightningDeals");


//   return (
//     <PageContainer>
//       {/* Sidebar with Category Filters */}
//       <Sidebar>
//         <FilterSection>
//           <FilterTitle>Categories</FilterTitle>
//           <FilterCheckbox>
//             <input
//               type="radio"
//               name="category"
//               value="All"
//               checked={selectedCategory === "All"}
//               onChange={() => handleCategoryChange("All")}
//             />
//             All
//           </FilterCheckbox>
//           <FilterCheckbox>
//             <input
//               type="radio"
//               name="category"
//               value="Dog"
//               checked={selectedCategory === "Dog"}
//               onChange={() => handleCategoryChange("Dog")}
//             />
//             Dog Products
//           </FilterCheckbox>
//           <FilterCheckbox>
//             <input
//               type="radio"
//               name="category"
//               value="Cat"
//               checked={selectedCategory === "Cat"}
//               onChange={() => handleCategoryChange("Cat")}
//             />
//             Cat Products
//           </FilterCheckbox>
//           <FilterCheckbox>
//             <input
//               type="radio"
//               name="category"
//               value="Lightning Deals"
//               checked={selectedCategory === "Lightning Deals"}
//               onChange={() => handleCategoryChange("Lightning Deals")}
//             />
//             Lightning Deals
//           </FilterCheckbox>
//         </FilterSection>
//       </Sidebar>

//       {/* Main Content - Products Display */}
//       <div>
//         <h1>{selectedCategory === "All" ? "All Products" : selectedCategory}</h1>
//         <DealsContainer>
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id}>
//               <ProductImage src={product.image} alt={product.name} />
//               <ProductName>{product.brand}</ProductName>
//               <ProductName>{product.name}</ProductName>
//               <PriceSection>
//                 <OriginalPrice>₹{product.originalPrice}</OriginalPrice>
//                 <DealPrice>{product.dealPrice ? `₹${product.dealPrice}` : ""}</DealPrice>
//               </PriceSection>
//               {product.weight && <p>Weight: {product.weight}</p>}
//               <div>
//                 <label>Quantity:</label>
//                 <input type="number" defaultValue={1} min={1} max={3} />
//               </div>
//               <AddToCartButton onClick={() => handleAddToCart(product, 1)}>
//                 Add to Cart
//               </AddToCartButton>
//             </ProductCard>
//           ))}
//         </DealsContainer>

//         <Cart cartItems={cart} onClose={handleToggleCart} />
//         <button onClick={handleToggleCart}>Toggle Cart</button>
//       </div>
//     </PageContainer>
//   );
// };

// export default LightningDealsPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../SubCategories/ProductList";
import SortOptions from "../SubCategories/SortOption";
import FilterPanel from "../SubCategories/FilterPanel";

const LightningDealsPage = () => {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("relevance");
  const [filters, setFilters] = useState({
      size: [],
      priceRange: [],
      flavor: [],
      petType: [],
      brand: [],
    });

  useEffect(() => {
    const fetchLightningDeals = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          params: { category: "lightningDeals" },
        });

        console.log("Fetched Lightning Deals:", response.data);
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else if (response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Invalid response format, expected an array or { products: [] }");
        }
      } catch (error) {
        console.error("Error fetching lightning deals:", error);
      }
    };
    fetchLightningDeals();
  }, []);

  useEffect(() => {
    let sorted = [...products];
    if (sortOrder === "low-to-high") {
      sorted.sort((a, b) => a.dealPrice - b.dealPrice);
    } else if (sortOrder === "high-to-low") {
      sorted.sort((a, b) => b.dealPrice - a.dealPrice);
    } else if (sortOrder === "discounted") {
      sorted.sort((a, b) => {
        const discountA = a.originalPrice - a.dealPrice;
        const discountB = b.originalPrice - b.dealPrice;
        return discountB - discountA;
      });
    }
    setSortedProducts(sorted);
  }, [sortOrder, products]);

  // Filter data options (static, can be passed to the FilterPanel)
  const filterData = {
    size: ['Small', 'Medium', 'Large', 'Giant'],
    priceRange: ['0-50', '51-100', '101-200', '201+'],
    flavor: ['Chicken', 'Lamb', 'Fish', 'Vegetables', 'Rice'],
    petType: ['Dogs', 'Cats'],
    brand: ['Royal Canin', 'Chip Chops', 'JerHigh', 'Pedigree', 'Farmina N&D', 'Drools', 'Gnawlers', 'SmartHeart', 'Fresh For Paws', 'Bark Out Loud', 'Dogsee', 'Henlo', 'Kennel Kitchen', 'Carniwel', 'Dogaholic', 'Farmina Vet Life', 'BLE', 'Goodies', 'First Bark', 'Purepet', 'Doggos', 'Basil', 'Drools VET PRO', 'Himalaya', 'Petstar', 'Signature', 'Vet-Pro', 'NPIC', 'Acana', 'Brunos', 'Wild Essentials']
  };
  
  
  return (
    <div className="flex flex-col items-center px-6 py-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Lightning Deals</h2>
     
      <div style={{ display: "flex" }}>
      {/* <div style={{ flex: 1, paddingLeft: "20px", marginTop: "3.30rem" }}>
        <SortOptions setSortOrder={setSortOrder} />
      </div> */}
          {/* Pass filterData to FilterPanel */}
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            filterData={filterData} // Pass dynamic filter data from filterData object
          />
       
          <ProductList products={sortedProducts} /> {/* Show sorted products */}
          <div style={{ flex: 1,}}>
        <SortOptions setSortOrder={setSortOrder} />
      </div>
        </div>
      
      {/* <div style={{ flex: 1, paddingLeft: "20px", marginTop: "3.30rem" }}>
        <SortOptions setSortOrder={setSortOrder} />
      </div> */}
    </div>
  );
};

export default LightningDealsPage;