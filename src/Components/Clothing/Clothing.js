import React, { useState } from "react";
import styled from "styled-components";

const products = [
  { id: 1, name: "Sakth Squad", price: "₹1,200", discountPrice: "₹700", image: "https://via.placeholder.com/150", category: "Dog" },
  { id: 2, name: "Professional Sleeveless", price: "₹1,500", discountPrice: "₹1,000", image: "https://via.placeholder.com/150", category: "Dog" },
  { id: 3, name: "Don't Take Tail", price: "₹1,300", discountPrice: "₹800", image: "https://via.placeholder.com/150", category: "Dog" },
  { id: 4, name: "Cat Queen Outfit", price: "₹1,100", discountPrice: "₹600", image: "https://via.placeholder.com/150", category: "Cat" },
  { id: 5, name: "Kitty Casual Wear", price: "₹1,400", discountPrice: "₹900", image: "https://via.placeholder.com/150", category: "Cat" },
];

const ClothingEssentials = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <Container>
      <Header>
        <Title>Pet Clothing Store</Title>
        <CategorySelector>
          <CategoryButton onClick={() => setSelectedCategory("All")} active={selectedCategory === "All"}>All</CategoryButton>
          <CategoryButton onClick={() => setSelectedCategory("Dog")} active={selectedCategory === "Dog"}>Dogs</CategoryButton>
          <CategoryButton onClick={() => setSelectedCategory("Cat")} active={selectedCategory === "Cat"}>Cats</CategoryButton>
        </CategorySelector>
      </Header>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                <OldPrice>{product.price}</OldPrice>
                <NewPrice>{product.discountPrice}</NewPrice>
              </ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ClothingEssentials;

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2rem;
  margin-bottom: 10px;
`;

const CategorySelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const CategoryButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.active ? "#007BFF" : "#ccc")};
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#888")};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const NewPrice = styled.span`
  color: #007BFF;
  font-weight: bold;
`;
