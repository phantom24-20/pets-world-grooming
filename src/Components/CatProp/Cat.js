import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryMenu from "../SubCategories/CategoryMenu";
import FilterPanel from "../SubCategories/FilterPanel";
import SortOptions from "../SubCategories/SortOption";
import ProductList from "../SubCategories/ProductList";

const Cat = () => {
  const [selectedCategory, setSelectedCategory] = useState("Cat Food"); // Default category
  const [selectedSubCategory, setSelectedSubCategory] = useState("Dry Food");
  const [filters, setFilters] = useState({
    size: [],
    priceRange: [],
    flavor: [],
    petType: ["Cats"], // Default filter for Cats
    brand: [],
  });
  const [sortOrder, setSortOrder] = useState("relevance");
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  // Available filter options for cat-related products
  const filterData = {
    size: ["Small", "Medium", "Large"],
    priceRange: ["0-50", "51-100", "101-200", "201+"],
    flavor: ["Fish", "Chicken", "Lamb", "Vegetables", "Rice"],
    petType: ["Cats"], // Fixed for Cats
    brand: ["Royal Canin", "Whiskas", "Sheba", "Drools", "Me-O", "Purina", "Farmina N&D"],
  };

  // Fetch products from the backend based on selected category & filters
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          params: {
            category: selectedCategory, // Ensures category is dynamic
            subCategory: selectedSubCategory,
            size: filters.size.length > 0 ? filters.size.join(",") : undefined,
            priceRange: filters.priceRange.length > 0 ? filters.priceRange.join(",") : undefined,
            flavor: filters.flavor.length > 0 ? filters.flavor.join(",") : undefined,
            petType: filters.petType.length > 0 ? filters.petType.join(",") : undefined,
            brand: filters.brand.length > 0 ? filters.brand.join(",") : undefined,
          },
        });

        console.log("Fetched products:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [selectedCategory, selectedSubCategory, filters]);

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
        return discountB - discountA;
      });
    }

    setSortedProducts(sorted);
  }, [sortOrder, products]);

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ width: "100%", rowGap: "2rem", display: "flex", flexDirection: "column" }}>
        {/* Category Selection Menu */}
        <CategoryMenu
          categories={["Cat Food", "Cat Treats", "Cat Accessories", "Cat Grooming", "Cat Toys", "Cat Clothing"]}
          setSelectedCategory={setSelectedCategory}
          subCategories={["Dry Food", "Wet Food"]}
          setSelectedSubCategory={setSelectedSubCategory}
          selectedCategory={selectedCategory}
        />
        <div style={{ display: "flex" }}>
          {/* Filters Panel */}
          <FilterPanel
            filters={filters}
            setFilters={setFilters}
            filterData={filterData} // Pass cat-specific filter data
          />
          {/* Product List */}
          <ProductList products={sortedProducts} />
        </div>
      </div>
      {/* Sort Options */}
      <div style={{ flex: 1, paddingLeft: "20px", marginTop: "3.30rem" }}>
        <SortOptions setSortOrder={setSortOrder} />
      </div>
    </div>
  );
};

export default Cat;
