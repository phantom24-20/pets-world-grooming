import React, { useState } from "react";
import styled from "styled-components";

// Sample Product Data
const products = [
  { id: 1, name: "Dog Food - Chicken", brand: "Pet Star", variety: "Dry", price: 20, popularity: 5, type: "Dog" },
  { id: 2, name: "Cat Food - Tuna", brand: "Pet Star", variety: "Wet", price: 15, popularity: 4, type: "Cat" },
  { id: 3, name: "Dog Food - Beef", brand: "Pet Star", variety: "Wet", price: 25, popularity: 5, type: "Dog" },
  { id: 4, name: "Cat Food - Chicken", brand: "Pet Star", variety: "Dry", price: 18, popularity: 3, type: "Cat" },
];

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5dc;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 16px;
  text-align: center;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.div`
  height: 150px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #888;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin: 5px;
  width: 100%;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  button {
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f5f5f5;
    cursor: pointer;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  span {
    font-size: 16px;
    margin: 0 10px;
  }
`;

const WishlistContainer = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fdfdfd;
`;

const WishlistItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const PetStar= () => {
  const [selectedVariety, setSelectedVariety] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Filtering and Sorting Logic
  const filteredProducts = products
    .filter(
      (product) =>
        (!selectedVariety || product.variety === selectedVariety) &&
        (!selectedType || product.type === selectedType)
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.price - b.price;
      if (sortOption === "price-desc") return b.price - a.price;
      if (sortOption === "popularity") return b.popularity - a.popularity;
      return 0; // No sorting
    });

  // Cart and Wishlist Logic
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing && existing.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
    }
  };

  const addToWishlist = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <Container>
      <Header>Pet Star Supplies</Header>
      <Banner>
        <div>Total Items in Cart: {totalItems}</div>
        <div>Total Cost: ${totalCost.toFixed(2)}</div>
      </Banner>
      <FiltersContainer>
        <Filter>
          <label>Variety:</label>
          <select onChange={(e) => setSelectedVariety(e.target.value)}>
            <option value="">All</option>
            <option value="Dry">Dry</option>
            <option value="Wet">Wet</option>
          </select>
        </Filter>
        <Filter>
          <label>Type:</label>
          <select onChange={(e) => setSelectedType(e.target.value)}>
            <option value="">All</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </Filter>
        <Filter>
          <label>Sort By:</label>
          <select onChange={(e) => setSortOption(e.target.value)}>
            <option value="">None</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popularity">Popularity</option>
          </select>
        </Filter>
      </FiltersContainer>
      <ProductContainer>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>Image</ProductImage>
            <h3>{product.name}</h3>
            <p>Brand: {product.brand}</p>
            <p>Variety: {product.variety}</p>
            <p>Type: {product.type}</p>
            <p>Price: ${product.price}</p>
            <p>Popularity: {product.popularity}</p>
            <QuantityControls>
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>
                {cart.find((item) => item.id === product.id)?.quantity || 0}
              </span>
              <button onClick={() => addToCart(product)}>+</button>
            </QuantityControls>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            <Button onClick={() => addToWishlist(product)}>Add to Wishlist</Button>
          </ProductCard>
        ))}
      </ProductContainer>
      {wishlist.length > 0 && (
        <WishlistContainer>
          <h3>Wishlist</h3>
          {wishlist.map((item) => (
            <WishlistItem key={item.id}>
              <span>{item.name}</span>
              <span>${item.price}</span>
            </WishlistItem>
          ))}
        </WishlistContainer>
      )}
    </Container>
  );
};

export default PetStar;
