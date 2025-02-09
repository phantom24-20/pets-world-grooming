import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #2e3144;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const ProductName = styled.h3`
  font-size: 1.3rem;
  color: #2e3144;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.2rem;
  color: #434190;
  margin-bottom: 15px;
`;

const BuyButton = styled.button`
  padding: 12px 20px;
  background-color: #434190;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #3f4651;
    transform: translateY(-2px);
  }

  &:active {
    background-color: #3b415c;
    transform: translateY(2px);
  }
`;

const products = [
  {
    id: 1,
    name: "Pet Leash",
    price: "$15.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Pet Collar",
    price: "$9.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Pet Bed",
    price: "$49.99",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    name: "Pet Toy",
    price: "$5.99",
    image: "https://via.placeholder.com/300x200",
  },
];

const Merchandise = () => {
  const handleBuyNow = (productName) => {
    alert(`You have selected ${productName}. Proceeding to checkout!`);
  };

  return (
    <Container>
      <Title>Our Merchandise</Title>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
            <BuyButton onClick={() => handleBuyNow(product.name)}>Buy Now</BuyButton>
          </ProductCard>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default Merchandise;
