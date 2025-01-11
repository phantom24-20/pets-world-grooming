import React from 'react';
import styled from 'styled-components';

// Styled Components for Layout and Cards
const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ImageWrapper = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-position: center;
`;

const InfoWrapper = styled.div`
  padding: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const DiscountText = styled.p`
  font-size: 14px;
  color: #ff6347;
  font-weight: bold;
`;

const TopBrandsTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-top: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;

// Data for Products
const productData = [
  {
    id: 1,
    name: 'Goodies Treats',
    image: 'https://via.placeholder.com/200x150?text=Treats+Image',
    discount: 30,
    price: 200,
    otherProducts: [
      { name: 'Dog Treat 1', image: 'https://via.placeholder.com/200x150?text=Dog+Treat+1' },
      { name: 'Dog Treat 2', image: 'https://via.placeholder.com/200x150?text=Dog+Treat+2' },
    ],
  },
  {
    id: 2,
    name: 'Shampoo Wahl',
    image: 'https://via.placeholder.com/200x150?text=Shampoo+Image',
    discount: 12,
    price: 500,
    otherProducts: [
      { name: 'Shampoo 1', image: 'https://via.placeholder.com/200x150?text=Shampoo+1' },
      { name: 'Shampoo 2', image: 'https://via.placeholder.com/200x150?text=Shampoo+2' },
    ],
  },
  // Add similar data for other products
];

// App Component
function BrandDetails() {
  const handleCardClick = (product) => {
    const newWindow = window.open('', '_blank');

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${product.name} Details</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 20px;
            margin: 0;
          }
          .container {
            text-align: center;
          }
          .product-image {
            width: 300px;
            height: 200px;
            border-radius: 10px;
          }
          .price {
            color: #333;
            font-size: 18px;
          }
          .discount {
            color: #ff6347;
            font-weight: bold;
          }
          .quantity-controls {
            margin: 20px 0;
          }
          .quantity-controls button {
            padding: 10px 20px;
            font-size: 16px;
            margin: 0 5px;
            cursor: pointer;
          }
          .other-products {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
          }
          .other-product-card {
            text-align: center;
          }
          .other-product-card img {
            width: 100px;
            height: 100px;
            border-radius: 8px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${product.name}</h1>
          <img src="${product.image}" alt="${product.name}" class="product-image" />
          <p class="price">Original Price: <s>$${product.price}</s></p>
          <p class="discount">Discount: ${product.discount}%</p>
          <p class="price">Discounted Price: $${(product.price - (product.price * product.discount) / 100).toFixed(
            2
          )}</p>

          <div class="quantity-controls">
            <button id="decrement">-</button>
            <span id="quantity">1</span>
            <button id="increment">+</button>
          </div>

          <div>
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
          </div>

          <h2>Other Products</h2>
          <div class="other-products">
            ${product.otherProducts
              .map(
                (p) =>
                  `<div class="other-product-card">
                    <img src="${p.image}" alt="${p.name}" />
                    <p>${p.name}</p>
                  </div>`
              )
              .join('')}
          </div>
        </div>
        <script>
          let quantity = 1;
          document.getElementById('increment').addEventListener('click', () => {
            quantity++;
            document.getElementById('quantity').textContent = quantity;
          });

          document.getElementById('decrement').addEventListener('click', () => {
            if (quantity > 1) quantity--;
            document.getElementById('quantity').textContent = quantity;
          });
        </script>
      </body>
      </html>
    `;

    newWindow.document.open();
    newWindow.document.write(htmlContent);
    newWindow.document.close();
  };

  return (
    <div>
      <TopBrandsTitle>TOP BRANDS</TopBrandsTitle>

      <HeroSection>
        {productData.map((product) => (
          <Card key={product.id} onClick={() => handleCardClick(product)}>
            <ImageWrapper imgUrl={product.image} />
            <InfoWrapper>
              <Title>{product.name}</Title>
              <DiscountText>Upto {product.discount}% OFF</DiscountText>
            </InfoWrapper>
          </Card>
        ))}
      </HeroSection>
    </div>
  );
}

export default BrandDetails;
