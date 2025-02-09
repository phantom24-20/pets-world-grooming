// import React, { useState } from 'react';
// import styled from 'styled-components';
// // import ProductList from './ProductList';
// // import { CartHeader, CartItems, CartItem, CartFooter, Total, CheckoutButton, CartIcon } from "./PharmacyCartStyles"

// // Sample product data
// const productData = [
//   {
//     id: 1,
//     name: 'Dog Pain Relief',
//     brand: 'PawMed',
//     originalPrice: 20.0,
//     discountedPrice: 15.0,
//     image: 'https://via.placeholder.com/150',
//     category: 'Medications',
//   },
//   {
//     id: 2,
//     name: 'Joint Supplement',
//     brand: 'JointEase',
//     originalPrice: 25.0,
//     discountedPrice: 18.0,
//     image: 'https://via.placeholder.com/150',
//     category: 'Supplements',
//   },
//   {
//     id: 3,
//     name: 'Dog Bandages',
//     brand: 'BandAid',
//     originalPrice: 10.0,
//     discountedPrice: 8.0,
//     image: 'https://via.placeholder.com/150',
//     category: 'First Aid',
//   },
//   // Add more products as needed
// ];

// const categories = ['Medications', 'Supplements', 'First Aid'];

// function MainPharmacy() {
//   const [category, setCategory] = useState('Medications');
//   const [cartItems, setCartItems] = useState([]);
//   const [showCart, setShowCart] = useState(false);

//   // Filter products based on category
//   const filteredProducts = productData.filter(product => product.category === category);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);
//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevItems, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   return (
//     <Container>
//       <Sidebar>
//         <CategoryMenu>
//           <h3>Pharmacy</h3>
//           <ul>
//             {categories.map((cat, index) => (
//               <li key={index} onClick={() => setCategory(cat)}>{cat}</li>
//             ))}
//           </ul>
//         </CategoryMenu>
//       </Sidebar>
      
//       <MainContent>
//         <ProductFilter>
//           <h3>Filter</h3>
//           <div>
//             <label>Price Range</label>
//             <PriceRange>
//               <input type="number" placeholder="Min" />
//               <input type="number" placeholder="Max" />
//             </PriceRange>
//           </div>
//         </ProductFilter>

//         <ProductGrid>
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id}>
//               <img src={product.image} alt={product.name} />
//               <h4>{product.name}</h4>
//               <p>{product.brand}</p>
//               <Price>
//                 <span className="original">${product.originalPrice}</span>
//                 <span className="discounted">${product.discountedPrice}</span>
//               </Price>
//               <QuantityControl>
//                 <button>-</button>
//                 <input type="text" value="1" readOnly />
//                 <button>+</button>
//               </QuantityControl>
//               <div>
//                 <Button onClick={() => addToCart(product)}>Add to Cart</Button>
//                 <Button>Add to Wishlist</Button>
//               </div>
//             </ProductCard>
//           ))}
//         </ProductGrid>
//       </MainContent>

//       <CartSidebar show={showCart}>
//         <CartHeader>
//           <h3>Cart</h3>
//           <button onClick={() => setShowCart(false)}>×</button>
//         </CartHeader>
//         <CartItems>
//           {cartItems.map(item => (
//             <CartItem key={item.id}>
//               <img src={item.image} alt={item.name} />
//               <div>
//                 <h4>{item.name}</h4>
//                 <p>Quantity: {item.quantity}</p>
//                 <button onClick={() => removeFromCart(item.id)}>Remove</button>
//               </div>
//             </CartItem>
//           ))}
//         </CartItems>
//         <CartFooter>
//           <Total>
//             Total: $
//             {cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)}
//           </Total>
//           <CheckoutButton>Checkout</CheckoutButton>
//         </CartFooter>
//       </CartSidebar>

//       <CartIcon onClick={() => setShowCart(true)}>
//         <span>Cart ({cartItems.length})</span>
//       </CartIcon>
//     </Container>
//   );
// }

// export default MainPharmacy ;

// // Styled components below
// const Container = styled.div`
//   display: flex;
//   font-family: Arial, sans-serif;
// `;

// const Sidebar = styled.div`
//   width: 250px;
//   padding: 20px;
//   background-color: #f5f5f5;
// `;

// const CategoryMenu = styled.div`
//   ul {
//     list-style-type: none;
//     padding: 0;
//   }

//   li {
//     padding: 10px 0;
//     cursor: pointer;
//     font-weight: bold;
//     &:hover {
//       color: #f44336;
//     }
//   }
// `;

// const MainContent = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

// const ProductFilter = styled.div`
//   margin-bottom: 20px;
//   h3 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }
// `;

// const PriceRange = styled.div`
//   display: flex;
//   gap: 10px;
//   input {
//     padding: 5px;
//     width: 80px;
//     border: 1px solid #ccc;
//     border-radius: 4px;
//   }
// `;

// const ProductGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;
// `;

// const ProductCard = styled.div`
//   border: 1px solid #ddd;
//   padding: 15px;
//   text-align: center;
//   background: #fff;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
// `;

// const Price = styled.div`
//   .original {
//     text-decoration: line-through;
//     color: #888;
//   }
//   .discounted {
//     color: #f44336;
//     font-weight: bold;
//   }
// `;

// const QuantityControl = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 10px 0;
//   button {
//     padding: 5px 10px;
//     background-color: #f44336;
//     color: #fff;
//     border: none;
//     cursor: pointer;
//   }
//   input {
//     width: 30px;
//     text-align: center;
//     margin: 0 5px;
//     border: 1px solid #ddd;
//   }
// `;

// const Button = styled.button`
//   padding: 10px 15px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   cursor: pointer;
//   margin: 10px 0;
// `;

// const CartSidebar = styled.div`
//   position: fixed;
//   right: 0;
//   top: 0;
//   background: white;
//   width: 300px;
//   height: 100%;
//   padding: 20px;
//   box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//   transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
//   transition: transform 0.3s ease-in-out;
// `;

// const CartHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   font-weight: bold;
// `;

// const CartItems = styled.div`
//   margin-top: 20px;
// `;

// const CartItem = styled.div`
//   display: flex;
//   margin-bottom: 20px;
//   img {
//     width: 50px;
//     height: 50px;
//     object-fit: cover;
//     margin-right: 10px;
//   }
//   div {
//     flex: 1;
//   }
// `;

// const CartFooter = styled.div`
//   margin-top: 20px;
//   display: flex;
//   justify-content: space-between;
// `;

// const Total = styled.div`
//   font-size: 18px;
//   font-weight: bold;
// `;

// const CheckoutButton = styled.button`
//   padding: 10px 15px;
//   background-color: #4caf50;
//   color: white;
//   border: none;
//   cursor: pointer;
// `;

// const CartIcon = styled.div`
//   position: fixed;
//   right: 20px;
//   bottom: 20px;
//   background-color: #4caf50;
//   color: white;
//   padding: 10px 20px;
//   border-radius: 50%;
//   cursor: pointer;
// `;

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Main Pharmacy Component
function MainPharmacy() {
  const [category, setCategory] = useState('Medications');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch products and categories from the backend API
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data));

    fetch('http://localhost:5000/api/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []); // Empty array ensures the effect runs only once (componentDidMount)

  // Filter products based on selected category
  const filteredProducts = products.filter(product => product.category === category);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Container>
      <Sidebar>
        <CategoryMenu>
          <h3>Pharmacy</h3>
          <ul>
            {categories.map((cat, index) => (
              <li key={index} onClick={() => setCategory(cat)}>{cat}</li>
            ))}
          </ul>
        </CategoryMenu>
      </Sidebar>

      <MainContent>
        <ProductGrid>
          {filteredProducts.map(product => (
            <ProductCard key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.brand}</p>
              <Price>
                <span className="original">${product.originalPrice}</span>
                <span className="discounted">${product.discountedPrice}</span>
              </Price>
              <QuantityControl>
                <button>-</button>
                <input type="text" value="1" readOnly />
                <button>+</button>
              </QuantityControl>
              <div>
                <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                <Button>Add to Wishlist</Button>
              </div>
            </ProductCard>
          ))}
        </ProductGrid>
      </MainContent>

      <CartSidebar show={showCart}>
        <CartHeader>
          <h3>Cart</h3>
          <button onClick={() => setShowCart(false)}>×</button>
        </CartHeader>
        <CartItems>
          {cartItems.map(item => (
            <CartItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h4>{item.name}</h4>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </CartItem>
          ))}
        </CartItems>
        <CartFooter>
          <Total>
            Total: $
            {cartItems.reduce((total, item) => total + item.discountedPrice * item.quantity, 0)}
          </Total>
          <CheckoutButton>Checkout</CheckoutButton>
        </CartFooter>
      </CartSidebar>

      <CartIcon onClick={() => setShowCart(true)}>
        <span>Cart ({cartItems.length})</span>
      </CartIcon>
    </Container>
  );
}

export default MainPharmacy;

// Styled components (same as previous)
const Container = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const CategoryMenu = styled.div`
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    padding: 10px 0;
    cursor: pointer;
    font-weight: bold;
    &:hover {
      color: #f44336;
    }
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Price = styled.div`
  .original {
    text-decoration: line-through;
    color: #888;
  }
  .discounted {
    color: #f44336;
    font-weight: bold;
  }
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  button {
    padding: 5px 10px;
    background-color: #f44336;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  input {
    width: 30px;
    text-align: center;
    margin: 0 5px;
    border: 1px solid #ddd;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  margin: 10px 0;
`;

const CartSidebar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
`;

const CartItems = styled.div`
  margin-top: 20px;
`;

const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    margin-right: 10px;
  }
  div {
    flex: 1;
  }
`;

const CartFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const Total = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
`;

const CartIcon = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
`;
