import React, { useState } from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const CategoryButton = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;

const HeroCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100px;
  margin-right: 20px;
`;

const SubcategoriesContainer = styled.div`
  margin-top: 20px;
`;

const SubcategoryButton = styled.button`
  margin: 5px;
  padding: 10px;
  cursor: pointer;
`;

const ProductsContainer = styled.div`
  margin-top: 20px;
`;

const categories = {
  Pets: ['Dog Food', 'Treats', 'Toys', 'Accessories']
};

const products = {
  'Dog Food': [
    { id: 1, name: 'Brand A Dog Food', price: '$30', discount: '10%', image: 'path/to/image1.jpg' },
    { id: 2, name: 'Brand B Dog Food', price: '$40', discount: '15%', image: 'path/to/image2.jpg' },
  ],
  Treats: [
    { id: 3, name: 'Brand C Treats', price: '$10', discount: '5%', image: 'path/to/image3.jpg' },
  ],
};

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  return (
    <Container>
      <h1>Shop by Category</h1>
      {Object.keys(categories).map((category) => (
        <CategoryButton key={category} onClick={() => setSelectedCategory(category)}>
          {category}
        </CategoryButton>
      ))}
      
      {selectedCategory && (
        <SubcategoriesContainer>
          <h2>{selectedCategory}</h2>
          {categories[selectedCategory].map((sub) => (
            <SubcategoryButton key={sub} onClick={() => setSelectedSubcategory(sub)}>
              {sub}
            </SubcategoryButton>
          ))}
        </SubcategoriesContainer>
      )}

      {selectedSubcategory && (
        <ProductsContainer>
          <h2>{selectedSubcategory}</h2>
          {products[selectedSubcategory]?.map((product) => (
            <HeroCard key={product.id}>
              <Image src={product.image} alt={product.name} />
              <div>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <p>Discount: {product.discount}</p>
              </div>
            </HeroCard>
          ))}
        </ProductsContainer>
      )}
    </Container>
  );
};

export default Food;