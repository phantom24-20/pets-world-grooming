import React, { useState } from "react";
import styled from "styled-components";

const categories = {
  Food: ["Dry Food", "Wet Food", "Puppy Food"],
  Treats: ["Chewy Treats", "Biscuits", "Bones"],
  Toys: ["Chew Toys", "Balls", "Ropes"],
  Clothing: ["Winter Wear", "Raincoats", "Costumes"],
  "Grooming Essentials": ["Shampoos", "Brushes", "Nail Clippers"],
  "Harness, Collars & Leashes": ["Collars", "Leashes", "Harnesses"],
  "Dog Beds & Mats": ["Orthopedic Beds", "Mats", "Blankets"],
  Bowls: ["Steel Bowls", "Plastic Bowls", "Slow Feeders"],
  "Health & Hygiene Supplements": ["Vitamins", "Dental Care", "Flea Treatments"],
};

const products = {
  "Dry Food": {
    image: "https://via.placeholder.com/150",
    originalPrice: 500,
    discount: 20,
    description: "High-quality dry food for dogs of all ages.",
    flavors: ["Chicken", "Beef", "Lamb"],
  },
  "Wet Food": {
    image: "https://via.placeholder.com/150",
    originalPrice: 600,
    discount: 25,
    description: "Delicious wet food to keep your pet hydrated and nourished.",
    flavors: ["Salmon", "Turkey", "Duck"],
  },
  "Puppy Food": {
    image: "https://via.placeholder.com/150",
    originalPrice: 700,
    discount: 15,
    description: "Specially formulated food for growing puppies.",
    flavors: ["Milk", "Chicken", "Vegetable"],
  },
  // Other products without flavors
  "Steel Bowls": {
    image: "https://via.placeholder.com/150",
    originalPrice: 300,
    discount: 10,
    description: "Durable steel bowls for your dog.",
    flavors: [],
  },
  "Plastic Bowls": {
    image: "https://via.placeholder.com/150",
    originalPrice: 200,
    discount: 5,
    description: "Affordable plastic bowls for dogs.",
    flavors: [],
  },
  // Add more products here...
};

const AppContainer = styled.div`
  font-family: "Roboto", sans-serif;
  padding: 20px;
  max-width: 1000px;
  margin: auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

const CategoryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const CategoryButton = styled.button`
  padding: 15px;
  border: none;
  background-color: #2e3144;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const PriceDetails = styled.div`
  margin-top: 10px;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #aaa;
  margin-right: 10px;
`;

const DiscountedPrice = styled.span`
  color: #28a745;
  font-weight: bold;
`;

const DiscountPercent = styled.span`
  color: #ff5733;
  font-size: 14px;
  margin-left: 10px;
`;

const FullPageContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin: 30px auto;
  max-width: 800px;
`;

const FlavorList = styled.div`
  margin-top: 20px;
`;

const FlavorButton = styled.button`
  padding: 10px 15px;
  margin-right: 10px;
  border: 1px solid #007bff;
  background-color: ${(props) => (props.selected ? "#007bff" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#007bff")};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & > button {
    padding: 5px 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 0 10px;
    transition: all 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  }

  & > input {
    width: 50px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const ActionButton = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  background-color: ${(props) => (props.secondary ? "#ffc107" : "#28a745")};
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? "#e0a800" : "#218838")};
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const SubCategoryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [flavor, setFlavor] = useState(null);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = () => {
    if (!selectedProduct) {
      alert("Please select a product.");
      return;
    }

    // Check if the product exists in the products object
    const product = products[selectedProduct];

    // If no product data is found, show an error and return
    if (!product) {
      alert("Product data is missing.");
      return;
    }

    // Check if the product requires a flavor and validate selection
    if (product.flavors.length > 0 && !flavor) {
      alert("Please select a flavor before adding to cart.");
      return;
    }

    const productToAdd = {
      name: selectedProduct,
      flavor: flavor || "No flavor selected", // If no flavor, set to a default value
      quantity,
      price: (
        product.originalPrice *
        (1 - product.discount / 100)
      ).toFixed(2),
    };

    setCart([...cart, productToAdd]);
    alert(`${quantity} ${selectedProduct} (${flavor || "No flavor selected"}) added to cart!`);
  };

  const handleAddToWishlist = () => {
    if (!selectedProduct) {
      alert("Please select a product.");
      return;
    }

    // Check if the product exists in the products object
    const product = products[selectedProduct];

    // If no product data is found, show an error and return
    if (!product) {
      alert("Product data is missing.");
      return;
    }

    // Check if the product requires a flavor and validate selection
    if (product.flavors.length > 0 && !flavor) {
      alert("Please select a flavor before adding to wishlist.");
      return;
    }

    const productToAdd = {
      name: selectedProduct,
      flavor: flavor || "No flavor selected",
      price: (
        product.originalPrice *
        (1 - product.discount / 100)
      ).toFixed(2),
    };

    setWishlist([...wishlist, productToAdd]);
    alert(`${selectedProduct} (${flavor || "No flavor selected"}) added to wishlist!`);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedProduct(null); // Reset selected product when category changes
    setFlavor(null); // Reset flavor selection
  };

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setFlavor(null); // Reset flavor selection
  };

  const handleFlavorSelect = (selectedFlavor) => {
    setFlavor(selectedFlavor);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Math.max(1, e.target.value));
  };

  const calculateDiscountedPrice = (product) => {
    return (
      (products[product]?.originalPrice *
        (1 - products[product]?.discount / 100)) ||
      0
    ).toFixed(2);
  };

  return (
    <AppContainer>
      <Header>Pet Store</Header>
      <CategoryList>
        {Object.keys(categories).map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryList>

      {selectedCategory && (
        <FullPageContainer>
          <h2>{selectedCategory}</h2>
          {categories[selectedCategory].map((product) => (
            <ProductCard
              key={product}
              onClick={() => handleProductSelect(product)}
            >
              <ProductImage
                src={products[product]?.image}
                alt={product}
              />
              <h3>{product}</h3>
              <p>{products[product]?.description}</p>
              <PriceDetails>
                <OriginalPrice>₹{products[product]?.originalPrice}</OriginalPrice>
                <DiscountedPrice>
                  ₹{calculateDiscountedPrice(product)}
                </DiscountedPrice>
                <DiscountPercent>
                  {products[product]?.discount}% off
                </DiscountPercent>
              </PriceDetails>
            </ProductCard>
          ))}
        </FullPageContainer>
      )}

      {selectedProduct && (
        <FullPageContainer>
          <h3>{selectedProduct}</h3>
          <p>{products[selectedProduct]?.description}</p>
          {products[selectedProduct]?.flavors.length > 0 && (
            <FlavorList>
              {products[selectedProduct]?.flavors.map((flavorOption) => (
                <FlavorButton
                  key={flavorOption}
                  selected={flavor === flavorOption}
                  onClick={() => handleFlavorSelect(flavorOption)}
                >
                  {flavorOption}
                </FlavorButton>
              ))}
            </FlavorList>
          )}
          <QuantityControls>
            <button onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 1}>-</button>
            <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </QuantityControls>
          <ActionButton onClick={handleAddToCart}>Add to Cart</ActionButton>
          <ActionButton secondary onClick={handleAddToWishlist}>
            Add to Wishlist
          </ActionButton>
        </FullPageContainer>
      )}

      {cart.length > 0 && (
        <div>
          <h3>Cart</h3>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} ({item.flavor}) - Quantity: {item.quantity}</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
        </div>
      )}

      {wishlist.length > 0 && (
        <div>
          <h3>Wishlist</h3>
          {wishlist.map((item, index) => (
            <div key={index}>
              <p>{item.name} ({item.flavor})</p>
              <p>Price: ₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </AppContainer>
  );
};

export default SubCategoryPage;
