// src/components/ProductPage.js
import React, { useState, useEffect } from 'react';
import CategoryMenu from './CategoryMenu';
import FilterPanel from './FilterPanel';
import SortOptions from './SortOption';
import ProductList from './ProductList';

const categories = ['Food', 'Treats', 'Accessories', 'Grooming Essentials', 'Toys', 'Clothing', 'Harness/Collars/Leashes', 'Bowls', 'Dog Beds', 'Health & Hygiene'];

const subCategories = {
  Food: ['Dry Food', 'Wet Food', 'Treats'],
  Treats: ['Biscuits', 'Chews', 'Rawhide'],
  Accessories: ['Collars', 'Leashes', 'Harnesses'],
  GroomingEssentials: ['Shampoos', 'Brushes', 'Nail Clippers'],
  Toys: ['Chew Toys', 'Balls', 'Squeaky Toys'],
  Clothing: ['Shirts', 'Coats', 'Sweaters'],
  'Harness/Collars/Leashes': ['Collars', 'Leashes', 'Harnesses'],
  Bowls: ['Ceramic Bowls', 'Plastic Bowls', 'Elevated Bowls'],
  'Dog Beds': ['Memory Foam', 'Orthopedic', 'Cotton Beds'],
  'Health & Hygiene': ['Vitamins', 'Flea Treatments', 'Ear Care'],
};

const filterData = {
  size: ['Small', 'Medium', 'Large', 'Giant'],
  priceRange: ['0-50', '51-100', '101-200', '201+'],
  flavor: ['Chicken', 'Lamb', 'Fish', 'Vegetables', 'Rice'],
  petType: ['Dogs', 'Cats'],
  brand :['Royal Canin','Chip Chops','JerHigh','Pedigree','Farmina N&D','Drools','Gnawlers','SmartHeart','Fresh For Paws','Bark Out Loud','Dogsee','Henlo','Kennel Kitchen','Carniwel','Dogaholic','Farmina Vet Life','BLE','Goodies','First Bark','Purepet','Doggos','Basil','Drools VET PRO','Himalaya','Petstar','Signature','Vet-Pro','NPIC','Acana','Brunos', 'Wild Essentials']
};

const allProducts = [
  { name: 'Dog Food', category: 'Food', subCategory: 'Dry Food' },
  { name: 'Cat Food', category: 'Food', subCategory: 'Wet Food' },
  { name: 'Dog Collar', category: 'Accessories', subCategory: 'Collars' },
  { name: 'Dog Leash', category: 'Accessories', subCategory: 'Leashes' },
  { name: 'Chew Toy', category: 'Toys', subCategory: 'Chew Toys' },
  { name: 'Sweater', category: 'Clothing', subCategory: 'Sweaters' },
  // Add more products as needed
];

const ProductPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Food');
  const [selectedSubCategory, setSelectedSubCategory] = useState('Dry Food'); // Initially select a subcategory
  const [filters, setFilters] = useState({
    size: [],
    priceRange: [],
    flavor: [],
    petType: [],
    brand:[],
  });
  const [sortOrder, setSortOrder] = useState('relevance');
  const [products, setProducts] = useState(allProducts); // Start with all products

  // Update products whenever the selected category or subcategory changes
  useEffect(() => {
    const filteredProducts = allProducts.filter(
      (product) =>
        (product.category === selectedCategory || selectedCategory === 'All') &&
        (product.subCategory === selectedSubCategory || selectedSubCategory === 'All')
    );
    setProducts(filteredProducts);
  }, [selectedCategory, selectedSubCategory]);

  return (
    <div style={{ display: 'flex', padding: '20px' }}>
      <div style={{ width: '100%', rowGap: '2rem', display: 'flex', flexDirection: 'column' }}>
        <CategoryMenu
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          subCategories={subCategories}
          setSelectedSubCategory={setSelectedSubCategory} // Pass this function to handle subcategory clicks
          selectedCategory={selectedCategory} // Pass selectedCategory to CategoryMenu
        />
        <div style={{display:"flex"}}>
        <FilterPanel filters={filterData} setFilters={setFilters} />
        <ProductList products={products} />
        </div>
      </div>
      <div style={{ flex: 1, paddingLeft: '20px', marginTop: '3.30rem' }}>
        <SortOptions setSortOrder={setSortOrder} />
     
      </div>
      
    </div>
  );
};

export default ProductPage;
