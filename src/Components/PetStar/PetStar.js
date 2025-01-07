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
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  min-height: 100vh;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 30px;
`;

const Banner = styled.div`
  background-color: #f5f5dc;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

const Filter = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 20px;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding-top: 20px;
`;

const ProductCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.div`
  height: 150px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ccc;
`;

const ProductDetails = styled.div`
  margin-bottom: 20px;
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  margin: 10px 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #007bff;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

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
    padding: 5px 12px;
    margin: 0 5px;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #e0e0e0;
    }
  }

  span {
    font-size: 1.2rem;
    margin: 0 10px;
  }
`;

const CartContainer = styled.div`
  position: fixed;
  top: 100px;
  right: 30px;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 250px;
  max-height: 60vh;
  overflow-y: auto;
  z-index: 1000;
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const CartButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;

const PetStar = () => {
  const [selectedVariety, setSelectedVariety] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState([]);

  // Filter products based on selected variety and type
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
      return 0;
    });

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter((item) => item.id !== product.id));
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
            <ProductDetails>
              <ProductName>{product.name}</ProductName>
              <p>Brand: {product.brand}</p>
              <p>Variety: {product.variety}</p>
              <p>Type: {product.type}</p>
              <ProductPrice>${product.price}</ProductPrice>
            </ProductDetails>
            <QuantityControls>
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>{cart.find((item) => item.id === product.id)?.quantity || 0}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </QuantityControls>
            <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          </ProductCard>
        ))}
      </ProductContainer>

      {cart.length > 0 && (
        <CartContainer>
          <h3>Cart</h3>
          {cart.map((item) => (
            <CartItem key={item.id}>
              <span>{item.name} x{item.quantity}</span>
              <span>${(item.quantity * item.price).toFixed(2)}</span>
            </CartItem>
          ))}
          <CartButton onClick={() => alert("Proceed to Checkout")}>Checkout</CartButton>
        </CartContainer>
      )}
    </Container>
  );
};

export default PetStar;
