import React, { useState } from "react";
import styled from "styled-components";

// Sample Data for Products
const products = [
  {
    id: 1,
    name: "Dog Food - Chicken",
    brand: "Brand A",
    type: "Food",
    petType: "Dog",
    weight: "5kg",
    originalPrice: 500,
    dealPrice: 400,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Cat Toy - Ball",
    brand: "Brand B",
    type: "Toys",
    petType: "Cat",
    weight: null,
    originalPrice: 200,
    dealPrice: 150,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Dog Collar - Leather",
    brand: "Brand C",
    type: "Accessories",
    petType: "Dog",
    weight: null,
    originalPrice: 350,
    dealPrice: 250,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Wet Cat Food - Tuna",
    brand: "Brand D",
    type: "Food",
    petType: "Cat",
    weight: "1kg",
    originalPrice: 300,
    dealPrice: 230,
    image: "https://via.placeholder.com/150",
  },
  // More products can be added here...
];

// Styled Components
const PageContainer = styled.div`
  display: flex;
  padding: 20px;
`;

const Sidebar = styled.div`
  width: 200px;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 20px;
`;

const FilterSection = styled.div`
  margin-bottom: 30px;
`;

const FilterTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

const FilterCheckbox = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
`;

const DealsContainer = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const ProductName = styled.h4`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;

const PriceSection = styled.div`
  margin-bottom: 15px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #aaa;
  margin-right: 10px;
`;

const DealPrice = styled.span`
  font-weight: bold;
  color: #28a745;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const CartModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  box-shadow: -4px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  z-index: 1000;
  overflow-y: auto;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const CartImage = styled.img`
  max-width: 50px;
  border-radius: 10px;
  margin-right: 10px;
`;

const CartCloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 24px;
  color: #333;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    color: #ff5733;
  }
`;

const Cart = ({ cartItems, onClose }) => {
  return (
    <CartModal show={cartItems.length > 0}>
      <CartCloseButton onClick={onClose}>×</CartCloseButton>
      <h3>Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem key={item.id}>
            <CartImage src={item.image} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          </CartItem>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}
    </CartModal>
  );
};

const LightningDealsPage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [filter, setFilter] = useState({
    brand: [],
    type: [],
    petType: [],
  });

  const handleFilterChange = (category, value) => {
    setFilter((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleAddToCart = (product, quantity) => {
    setCart((prev) => [
      ...prev,
      { ...product, quantity, price: product.dealPrice * quantity },
    ]);
  };

  const handleToggleCart = () => {
    setShowCart(!showCart);
  };

  const filteredProducts = products.filter(
    (product) =>
      (filter.brand.length === 0 || filter.brand.includes(product.brand)) &&
      (filter.type.length === 0 || filter.type.includes(product.type)) &&
      (filter.petType.length === 0 || filter.petType.includes(product.petType))
  );

  return (
    <PageContainer>
      <Sidebar>
        <FilterSection>
          <FilterTitle>Filter by Brand</FilterTitle>
          <FilterCheckbox>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("brand", "Brand A")}
            />
            Brand A
          </FilterCheckbox>
          <FilterCheckbox>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("brand", "Brand B")}
            />
            Brand B
          </FilterCheckbox>
          {/* More brand options */}
        </FilterSection>

        <FilterSection>
          <FilterTitle>Filter by Pet Type</FilterTitle>
          <FilterCheckbox>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("petType", "Dog")}
            />
            Dog
          </FilterCheckbox>
          <FilterCheckbox>
            <input
              type="checkbox"
              onChange={() => handleFilterChange("petType", "Cat")}
            />
            Cat
          </FilterCheckbox>
          {/* More pet type options */}
        </FilterSection>
      </Sidebar>

      <div>
        <h1>Lightning Deals</h1>
        <DealsContainer>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <PriceSection>
                <OriginalPrice>₹{product.originalPrice}</OriginalPrice>
                <DealPrice>₹{product.dealPrice}</DealPrice>
              </PriceSection>
              {product.weight && <p>Weight: {product.weight}</p>}
              <div>
                <label>Quantity:</label>
                <input type="number" defaultValue={1} min={1} max={3} />
              </div>
              <AddToCartButton
                onClick={() =>
                  handleAddToCart(product, 1) // Add logic to handle quantity selection
                }
              >
                Add to Cart
              </AddToCartButton>
            </ProductCard>
          ))}
        </DealsContainer>

        <Cart cartItems={cart} onClose={handleToggleCart} />
        <button onClick={handleToggleCart}>Toggle Cart</button>
      </div>
    </PageContainer>
  );
};

export default LightningDealsPage;
