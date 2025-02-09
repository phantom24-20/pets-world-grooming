import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

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

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 10px 0;
`;

const ProductDetail = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0;
`;

const Price = styled.p`
  font-size: 0.9rem;
  color: #666;

  span {
    text-decoration: line-through;
    color: #999;
    font-size: 0.9rem;
  }
`;

const DealPrice = styled.p`
  font-weight: bold;
  color: #e74c3c;
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

const DiscountBadge = ({ discount }) => (
  <span className="bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-lg shadow-md">
    🔥 {discount} OFF
  </span>
);

const PetStar = () => {
  const [products, setProducts] = useState([]);
  const [selectedVariety, setSelectedVariety] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(response => {
        const petStarProducts = response.data.filter(product =>
          product.brand.toLowerCase().includes("petstar")
        );
        setProducts(petStarProducts); 
      })
      .catch(error => {
        console.error("There was an error fetching the products:", error);
      });
  }, []);

  const filteredProducts = products
    .filter(
      (product) =>
        (!selectedVariety || product.variety === selectedVariety) &&
        (!selectedType || product.type === selectedType)
    )
    .sort((a, b) => {
      if (sortOption === "price-asc") return a.dealPrice - b.dealPrice;
      if (sortOption === "price-desc") return b.dealPrice - a.dealPrice;
      if (sortOption === "popularity") return b.popularity - a.popularity;
      return 0;
    });

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product._id);
    if (existingProduct) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product._id);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    } else {
      setCart(cart.filter((item) => item._id !== product._id));
    }
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.dealPrice, 0);

  return (
    <Container>
      <Header>Pet Star Supplies</Header>

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
          <ProductCard key={product._id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDetail>Brand: {product.brand}</ProductDetail>
            <ProductDetail>Weight: {product.weight}</ProductDetail>
            <Price>MRP: <span>₹{product.originalPrice}</span></Price>
            <DiscountBadge discount={product.discount} />
            <DealPrice>Deal Price: ₹{product.dealPrice}</DealPrice>

            <QuantityControls>
              <button onClick={() => removeFromCart(product)}>-</button>
              <span>{cart.find((item) => item._id === product._id)?.quantity || 0}</span>
              <button onClick={() => addToCart(product)}>+</button>
            </QuantityControls>
<div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
<Button onClick={() => addToCart(product)}>Add to Cart</Button>
<Button className="wishlist-btn">❤️</Button>
</div>
            
          </ProductCard>
        ))}
      </ProductContainer>

      {/* <CartContainer>
        <h3>Shopping Cart</h3>
        <div>
          {cart.map((item) => (
            <CartItem key={item._id}>
              <div>{item.name} (x{item.quantity})</div>
              <div>₹{item.dealPrice * item.quantity}</div>
            </CartItem>
          ))}
        </div>
        <div>
          <strong>Total Items: {totalItems}</strong>
        </div>
        <div>
          <strong>Total Cost: ₹{totalCost}</strong>
        </div>
        <CartButton>Proceed to Checkout</CartButton>
      </CartContainer> */}
    </Container>
  );
};

export default PetStar;
