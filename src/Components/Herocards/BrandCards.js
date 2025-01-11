import React from "react";
import styled from "styled-components";

// Styled Components for Layout and Cards
const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f8f8f8;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const productData = [
  {
    id: 1,
    brand: "Goodies",
    name: "Goodies Treats",
    image: "https://via.placeholder.com/200x150?text=Treats+Image",
    discount: 30,
    price: 200,
    relatedProducts: [
      {
        id: 7,
        name: "Goodies Biscuit",
        image: "https://via.placeholder.com/200x150?text=Goodies+Biscuit",
        discount: 20,
        price: 150,
      },
      {
        id: 8,
        name: "Goodies Snacks",
        image: "https://via.placeholder.com/200x150?text=Goodies+Snacks",
        discount: 15,
        price: 250,
      },
    ],
  },
  {
    id: 2,
    brand: "Wahl",
    name: "Shampoo Wahl",
    image: "https://via.placeholder.com/200x150?text=Shampoo+Image",
    discount: 12,
    price: 500,
    relatedProducts: [
      {
        id: 9,
        name: "Wahl Conditioner",
        image: "https://via.placeholder.com/200x150?text=Wahl+Conditioner",
        discount: 10,
        price: 400,
      },
      {
        id: 10,
        name: "Wahl Pet Comb",
        image: "https://via.placeholder.com/200x150?text=Wahl+Pet+Comb",
        discount: 8,
        price: 100,
      },
    ],
  },
  {
    id: 4,
    name: 'Bowlers Food',
    image: 'https://via.placeholder.com/200x150?text=Bowlers+Image',
    discount: 10,
    price: 250,
  },
  {
    id: 5,
    name: 'Happy Cat Litter',
    image: 'https://via.placeholder.com/200x150?text=Litter+Image',
    discount: 10,
    price: 150,
  },
  {
    id: 6,
    name: 'Mankind Medicines',
    image: 'https://via.placeholder.com/200x150?text=Medicines+Image',
    discount: 10,
    price: 400,
  },
  // Add more brand products as needed...
];

function BrandCards() {
  const handleCardClick = (product) => {
    const newWindow = window.open("", "_blank");

    const discountedPrice = (
      product.price -
      (product.price * product.discount) / 100
    ).toFixed(2);

    const relatedProductsHTML = product.relatedProducts
      .map(
        (related) => `
      <div class="related-product">
        <img src="${related.image}" alt="${related.name}" />
        <h4>${related.name}</h4>
        <p>
          Original: <s>$${related.price}</s> 
          Discount: ${related.discount}%
          <br />
          Price: <strong>$${(
            related.price -
            (related.price * related.discount) / 100
          ).toFixed(2)}</strong>
        </p>
      </div>
    `
      )
      .join("");



    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${product.name}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            text-align: center;
          }
          .product-details {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
          }
          img {
            width: 300px;
            height: auto;
            border-radius: 8px;
          }
          h1 {
            color: #333;
          }
          .price {
            font-size: 18px;
            margin: 10px 0;
          }
          .price s {
            color: gray;
          }
          .discount {
            color: #ff6347;
            font-weight: bold;
          }
          button {
            padding: 10px 20px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .add-to-cart {
            background-color: #28a745;
            color: white;
          }
          .wishlist {
            background-color: #ff6347;
            color: white;
          }
          .related-products {
            margin-top: 20px;
          }
          .related-product {
            display: inline-block;
            margin: 10px;
            text-align: center;
          }
          .related-product img {
            width: 150px;
            height: auto;
            margin-bottom: 5px;
          }
        </style>
      </head>
      <body>
        <div class="product-details">
          <h1>${product.name}</h1>
          <img src="${product.image}" alt="${product.name}" />
          <p class="price">
            Original Price: <s>$${product.price}</s> 
            <span class="discount">Discount: ${product.discount}%</span>
          </p>
          <p class="price">
            Discounted Price: <strong>$${discountedPrice}</strong>
          </p>
          <button class="add-to-cart">Add to Cart</button>
          <button class="wishlist">Add to Wishlist</button>
        </div>
        <div class="related-products">
          <h2>Other Products from ${product.brand}</h2>
          ${relatedProductsHTML}
        </div>
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

export default BrandCards;



// const productData = [
//   {
//     id: 1,
//     name: 'Goodies Treats',
//     image: 'https://via.placeholder.com/200x150?text=Treats+Image',
//     discount: 30,
//     price: 200,
//   },
//   {
//     id: 2,
//     name: 'Shampoo Wahl',
//     image: 'https://via.placeholder.com/200x150?text=Shampoo+Image',
//     discount: 12,
//     price: 500,
//   },
//   {
//     id: 3,
//     name: 'Supercoat Food',
//     image: 'https://via.placeholder.com/200x150?text=Supercoat+Image',
//     discount: 15,
//     price: 300,
//   },
  // {
  //   id: 4,
  //   name: 'Bowlers Food',
  //   image: 'https://via.placeholder.com/200x150?text=Bowlers+Image',
  //   discount: 10,
  //   price: 250,
  // },
  // {
  //   id: 5,
  //   name: 'Happy Cat Litter',
  //   image: 'https://via.placeholder.com/200x150?text=Litter+Image',
  //   discount: 10,
  //   price: 150,
  // },
  // {
  //   id: 6,
  //   name: 'Mankind Medicines',
  //   image: 'https://via.placeholder.com/200x150?text=Medicines+Image',
  //   discount: 10,
  //   price: 400,
  // },
// ];