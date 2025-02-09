// import React, { useState, useEffect } from "react";
// import CategoryMenu from "./CategoryMenu";
// import FilterPanel from "./FilterPanel";
// import SortOptions from "./SortOption";
// import ProductList from "./ProductList";

// const categories = ['Food', 'Treats', 'Accessories', 'Grooming Essentials', 'Toys', 'Clothing', 'Harness/Collars/Leashes', 'Bowls', 'Dog Beds', 'Health & Hygiene'];

// const subCategories = {
//   Food: ['Dry Food', 'Wet Food', 'Treats'],
//   Treats: ['Biscuits', 'Chews', 'Rawhide'],
//   Accessories: ['Collars', 'Leashes', 'Harnesses'],
//   GroomingEssentials: ['Shampoos', 'Brushes', 'Nail Clippers'],
//   Toys: ['Chew Toys', 'Balls', 'Squeaky Toys'],
//   Clothing: ['Shirts', 'Coats', 'Sweaters'],
//   'Harness/Collars/Leashes': ['Collars', 'Leashes', 'Harnesses'],
//   Bowls: ['Ceramic Bowls', 'Plastic Bowls', 'Elevated Bowls'],
//   'Dog Beds': ['Memory Foam', 'Orthopedic', 'Cotton Beds'],
//   'Health & Hygiene': ['Vitamins', 'Flea Treatments', 'Ear Care'],
// };

// const filterData = {
//   size: ['Small', 'Medium', 'Large', 'Giant'],
//   priceRange: ['0-50', '51-100', '101-200', '201+'],
//   flavor: ['Chicken', 'Lamb', 'Fish', 'Vegetables', 'Rice'],
//   petType: ['Dogs', 'Cats'],
//   brand :['Royal Canin','Chip Chops','JerHigh','Pedigree','Farmina N&D','Drools','Gnawlers','SmartHeart','Fresh For Paws','Bark Out Loud','Dogsee','Henlo','Kennel Kitchen','Carniwel','Dogaholic','Farmina Vet Life','BLE','Goodies','First Bark','Purepet','Doggos','Basil','Drools VET PRO','Himalaya','Petstar','Signature','Vet-Pro','NPIC','Acana','Brunos', 'Wild Essentials']
// };

// const allProducts = [
//   { name: 'Dog Food', category: 'Food', subCategory: 'Dry Food' },
//   { name: 'Cat Food', category: 'Food', subCategory: 'Wet Food' },
//   { name: 'Dog Collar', category: 'Accessories', subCategory: 'Collars' },
//   { name: 'Dog Leash', category: 'Accessories', subCategory: 'Leashes' },
//   { name: 'Chew Toy', category: 'Toys', subCategory: 'Chew Toys' },
//   { name: 'Sweater', category: 'Clothing', subCategory: 'Sweaters' },
//   // Add more products as needed
// ];

// const ProductPage = () => {
//   const [selectedCategory, setSelectedCategory] = useState('Food');
//   const [selectedSubCategory, setSelectedSubCategory] = useState('Dry Food'); // Initially select a subcategory
//   const [filters, setFilters] = useState({
//     size: [],
//     priceRange: [],
//     flavor: [],
//     petType: [],
//     brand:[],
//   });
//   const [sortOrder, setSortOrder] = useState('relevance');
//   const [products, setProducts] = useState(allProducts); // Start with all products

//   // Update products whenever the selected category or subcategory changes
//   useEffect(() => {
//     const filteredProducts = allProducts.filter(
//       (product) =>
//         (product.category === selectedCategory || selectedCategory === 'All') &&
//         (product.subCategory === selectedSubCategory || selectedSubCategory === 'All')
//     );
//     setProducts(filteredProducts);
//   }, [selectedCategory, selectedSubCategory]);

//   return (
//     <div style={{ display: 'flex', padding: '20px' }}>
//       <div style={{ width: '100%', rowGap: '2rem', display: 'flex', flexDirection: 'column' }}>
//         <CategoryMenu
//           categories={categories}
//           setSelectedCategory={setSelectedCategory}
//           subCategories={subCategories}
//           setSelectedSubCategory={setSelectedSubCategory} // Pass this function to handle subcategory clicks
//           selectedCategory={selectedCategory} // Pass selectedCategory to CategoryMenu
//         />
//         <div style={{display:"flex"}}>
//         <FilterPanel filters={filterData} setFilters={setFilters} />
//         <ProductList products={products} />
//         </div>
//       </div>
//       <div style={{ flex: 1, paddingLeft: '20px', marginTop: '3.30rem' }}>
//         <SortOptions setSortOrder={setSortOrder} />
     
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryMenu from "./CategoryMenu";
import FilterPanel from "./FilterPanel";
import SortOptions from "./SortOption";
import ProductList from "./ProductList";

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [selectedSubCategory, setSelectedSubCategory] = useState("Dry Food");
  const [filters, setFilters] = useState({
    size: [],
    priceRange: [],
    flavor: [],
    petType: [],
    brand: [],
  });
  const [sortOrder, setSortOrder] = useState("relevance");
  const [products, setProducts] = useState([]); // Initialize with empty array
  const [sortedProducts, setSortedProducts] = useState([]); // Store sorted products

  // Filter data options (static, can be passed to the FilterPanel)
  const filterData = {
    size: ['Small', 'Medium', 'Large', 'Giant'],
    priceRange: ['0-50', '51-100', '101-200', '201+'],
    flavor: ['Chicken', 'Lamb', 'Fish', 'Vegetables', 'Rice'],
    petType: ['Dogs', 'Cats'],
    brand: ['Royal Canin', 'Chip Chops', 'JerHigh', 'Pedigree', 'Farmina N&D', 'Drools', 'Gnawlers', 'SmartHeart', 'Fresh For Paws', 'Bark Out Loud', 'Dogsee', 'Henlo', 'Kennel Kitchen', 'Carniwel', 'Dogaholic', 'Farmina Vet Life', 'BLE', 'Goodies', 'First Bark', 'Purepet', 'Doggos', 'Basil', 'Drools VET PRO', 'Himalaya', 'Petstar', 'Signature', 'Vet-Pro', 'NPIC', 'Acana', 'Brunos', 'Wild Essentials']
  };

  // Fetch products from the backend (MongoDB)
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          params: {
            category: selectedCategory === "Food" ? "Dog Food" : selectedCategory,
            subCategory: selectedSubCategory,
            size: filters.size.join(","),
            priceRange: filters.priceRange.join(","),
            flavor: filters.flavor.join(","),
            petType: filters.petType.join(","),
            brand: filters.brand.join(","),
          },
        });

        console.log("Fetched products:", response.data); // Log response data for debugging
        if (Array.isArray(response.data)) {
          setProducts(response.data); // Directly set if it's an array
        } else if (response.data.products && Array.isArray(response.data.products)) {
          setProducts(response.data.products); // Set products if it's in a 'products' field
        } else {
          console.error("Invalid response format, expected an array or { products: [] }");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedSubCategory, filters]); // Re-fetch products when category or filters change

  // Sorting logic
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
        return discountB - discountA; // Higher discount first
      });
    }

    setSortedProducts(sorted);
  }, [sortOrder, products]); // Re-sort when sort order or products change

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ width: "100%", rowGap: "2rem", display: "flex", flexDirection: "column" }}>
        <CategoryMenu
          categories={["Food", "Treats", "Accessories", "Grooming Essentials", "Toys", "Clothing"]}
          setSelectedCategory={setSelectedCategory}
          subCategories={["Dry Food", "Wet Food"]}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedCategory={selectedCategory}
        />
        <div style={{ display: "flex" }}>
          {/* Pass filterData to FilterPanel */}
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            filterData={filterData} // Pass dynamic filter data from filterData object
          />
          <ProductList products={sortedProducts} /> {/* Show sorted products */}
        </div>
      </div>
      <div style={{ flex: 1, paddingLeft: "20px", marginTop: "3.30rem" }}>
        <SortOptions setSortOrder={setSortOrder} />
      </div>
    </div>
  );
};

export default ProductPage;
