import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Data for the carousel slides (dog & cat foods, toys, essentials)
const items = [
  { id: 1, type: 'Food', name: 'Premium Dog Food', image: '/images/dog-food.jpg' },
  { id: 2, type: 'Food', name: 'Cat Wet Food', image: '/images/cat-food.jpg' },
  { id: 3, type: 'Toy', name: 'Interactive Dog Toy', image: '/images/dog-toy.jpg' },
  { id: 4, type: 'Toy', name: 'Catnip Toy for Cats', image: '/images/cat-toy.jpg' },
  { id: 5, type: 'Essential', name: 'Dog Leash', image: '/images/dog-leash.jpg' },
  { id: 6, type: 'Essential', name: 'Cat Litter Box', image: '/images/cat-litter.jpg' },
];
const products = [
    {
      id: 1,
      name: "Pet Star Chicken Flavour",
      category: "Dog Food",
      image: "https://via.placeholder.com/150",
      discount: 27, // 27% off
    },
    {
      id: 2,
      name: "Pet chicken & egg Flavour",
      category: "Dog Food",
      image: "https://via.placeholder.com/150",
      discount: 15, // 15% off
    },
    {
      id: 3,
      name: "Pet Star Chewy Treats",
      category: "Treats",
      image: "https://via.placeholder.com/150",
      discount: 30, // 30% off
    },
    {
      id: 4,
      name: "Pet Star Salmon Flavour",
      category: "Dog Food",
      image: "https://via.placeholder.com/150",
      discount: 10, // 10% off
    },
    {
      id: 5,
      name: "Pet Star Veggie Treats",
      category: "Treats",
      image: "https://via.placeholder.com/150",
      discount: 25, // 25% off
    },
    {
      id: 6,
      name: "Pet Star Health Mix",
      category: "Other Products",
      image: "https://via.placeholder.com/150",
      discount: 30, // 30% off
    },
  ];
  

const CarouselHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  // Function to change the slide
  const changeSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Change slide automatically every 10 seconds
  useEffect(() => {
    const interval = setInterval(changeSlide, 10000); // 10000 ms = 10 seconds
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
    <Container>
      <HeroCard>
        <h1>Welcome to Pet Essentials</h1>
        <p>Your one-stop shop for dog and cat food, toys, and essentials</p>
      </HeroCard>
      
      <CarouselContainer>
        <CarouselSlide>
          <img src={items[currentIndex].image} alt={items[currentIndex].name} />
          <Info>
            <h3>{items[currentIndex].name}</h3>
            <p>{items[currentIndex].type}</p>
          </Info>
        </CarouselSlide>
      </CarouselContainer>
    </Container>

    <ContainerLux>
      <Header>
        <h1>Welcome to Pet Star Store</h1>
        <CategorySelector>
          <button onClick={() => setSelectedCategory('All')}>All</button>
          <button onClick={() => setSelectedCategory('Dog Food')}>Dog Food</button>
          <button onClick={() => setSelectedCategory('Treats')}>Treats</button>
          <button onClick={() => setSelectedCategory('Other Products')}>Other Products</button>
        </CategorySelector>
      </Header>

      <ProductsGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductCategory>{product.category}</ProductCategory>
            <Discount>
              <span>UPTO   <strong>{product.discount}%</strong></span>
            </Discount>
            <BuyButton>Buy Now</BuyButton>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ContainerLux>

    </>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const HeroCard = styled.div`
  background: #f4f4f4;
  padding: 20px;
  text-align: center;
  margin: 20px 0;
  border-radius: 8px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

const CarouselSlide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transition: all 1s ease-in-out;

  img {
    width: 80%;
    height: auto;
    border-radius: 8px;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 8px;
  
  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0 0;
  }
`;
const ContainerLux = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CategorySelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  button {
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
    background-color: #fff;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #007bff;
      color: white;
    }
  }
`;

const ProductsGrid = styled.div`
 display:flex;

  gap: 20px;
  justify-items: center;
  margin-top: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
  text-align: center;
  padding: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductCategory = styled.p`
  font-size: 14px;
  color: #777;
`;

const Discount = styled.div`
  font-size: 16px;
  margin: 10px 0;
  color: #ff6347;

  strong {
    font-size: 18px;
    font-weight: bold;
  }
`;

const BuyButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default CarouselHero;
