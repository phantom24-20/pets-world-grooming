import React, { useState } from "react";
import styled from "styled-components";

const GlobalContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  min-height: 100vh;
  background-color: #f4f5f7;
`;

const Sidebar = styled.div`
  background-color: #2e3144;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);

  a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #3f4651;
    }
  }

  .active {
    background-color: #434190;
  }
`;

const MainContent = styled.div`
  margin-left: 240px;
  padding: 2rem;
  flex-grow: 1;
`;

const SectionContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #434190;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 5px;
  font-size: 1rem;

  &:hover {
    background-color: #3f4651;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const QuantityButton = styled(Button)`
  background-color: #ff5722;

  &:hover {
    background-color: #e64a19;
  }
`;

const AccountsPage = () => {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [cart, setCart] = useState([]);
  const [password, setPassword] = useState({ current: "", new: "", confirm: "" });
  const [addresses, setAddresses] = useState([
    { id: 1, street: "123 Main St", city: "Bangalore", country: "India", zip: "560001", phone: "9876543210" },
  ]);
  const [newAddress, setNewAddress] = useState({
    street: "",
    city: "",
    country: "",
    zip: "",
    phone: "",
    type: "Home", // Default type is "Home"
    otherType: "", // For the "Other" address type description
  });

  const [giftCardRecipient, setGiftCardRecipient] = useState({
    contact: "", // Can be email or phone
    type: "email", // Can be either "email" or "phone"
    amount: 0, // Gift card amount
  });

  const orders = [
    { id: 1, product: "Pet Food - Chicken Flavor", price: "₹1,199", status: "Delivered" },
    { id: 2, product: "Dog Leash - 5ft", price: "₹499", status: "Shipped" },
    { id: 3, product: "Cat Litter Box", price: "₹899", status: "In Transit" },
    { id: 4, product: "Dog Bed - Large", price: "₹2,499", status: "Delivered" },
    { id: 5, product: "Interactive Feather Cat Toy", price: "₹299", status: "Shipped" },
    { id: 6, product: "Pet Carrier Bag", price: "₹1,799", status: "Delivered" },
    { id: 7, product: "Pet Water Fountain", price: "₹1,499", status: "In Transit" },
    { id: 8, product: "Dog Collar with Name Tag", price: "₹599", status: "Delivered" }
  ];

  const wishlist = [
    { id: 1, product: "Pet Food - Chicken Flavor", price: "₹1,199", quantity: 1 },
    { id: 2, product: "Dog Leash - 5ft", price: "₹499", quantity: 1 },
    { id: 3, product: "Cat Litter Box", price: "₹899", quantity: 1 },
    { id: 4, product: "Dog Bed - Large", price: "₹2,499", quantity: 1 },
    { id: 5, product: "Interactive Feather Cat Toy", price: "₹299", quantity: 1 },
    { id: 6, product: "Pet Carrier Bag", price: "₹1,799", quantity: 1 },
    { id: 7, product: "Pet Water Fountain", price: "₹1,499", quantity: 1 },
    { id: 8, product: "Dog Collar with Name Tag", price: "₹599", quantity: 1 }
  ];

  const billingAddress = {
    street: "456 Market St",
    city: "Bangalore",
    country: "India",
    zip: "560001",
    phone: "987-654-3210",
  };

  const accountInfo = {
    name: "Prajwal Gowda",
    email: "prajwal@example.com",
    phone: "9876543210",
  };

  const handleBuyNow = (item) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    alert(`${item.product} added to cart!`);
  };

  const handleBuyAgain = (item) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    alert(`${item.product} added to cart!`);
  };

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    alert(`${item.product} added to cart!`);
  };

  const handleIncrement = (itemId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleChangePassword = () => {
    if (password.new === password.confirm) {
      alert("Password successfully changed!");
      setPassword({ current: "", new: "", confirm: "" });
    } else {
      alert("New password and confirm password do not match.");
    }
  };

  const handleEditAddress = (id, updatedAddress) => {
    setAddresses((prev) =>
      prev.map((address) => (address.id === id ? updatedAddress : address))
    );
  };

  const handleAddAddress = () => {
    if (newAddress.type === "Other" && newAddress.otherType.trim() === "") {
      alert("Please specify the type of 'Other' address.");
      return;
    }

    setAddresses((prev) => [
      ...prev,
      { ...newAddress, id: prev.length + 1 },
    ]);
    setNewAddress({ street: "", city: "", country: "", zip: "", phone: "", type: "Home", otherType: "" });
  };

  const handleGiftCardSend = () => {
    if (giftCardRecipient.contact.trim() === "" || giftCardRecipient.amount <= 0) {
      alert("Please enter a valid email/phone and a gift card amount.");
      return;
    }

    // Simulate sending the gift card with the amount
    alert(`Gift Card of ₹${giftCardRecipient.amount} sent to ${giftCardRecipient.contact} via ${giftCardRecipient.type === "email" ? "Email" : "Phone"}`);
    setGiftCardRecipient({ contact: "", type: "email", amount: 0 });
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return (
          <SectionContainer>
            <SectionTitle>Dashboard</SectionTitle>
            <p>Welcome back, Prajwal! Here's a summary of your account:</p>
            <ul>
              <li>Total Orders: {orders.length}</li>
              <li>Wishlist Items: {wishlist.length}</li>
              <li>Wallet Balance: ₹40,000</li>
            </ul>
          </SectionContainer>
        );

      case "Orders":
        return (
          <SectionContainer>
            <SectionTitle>Your Orders</SectionTitle>
            <ul>
              {orders.map((order) => (
                <li key={order.id}>
                  {order.product} - {order.price} ({order.status})
                  <Button onClick={() => handleBuyAgain(order)}>Buy Again</Button>
                </li>
              ))}
            </ul>
          </SectionContainer>
        );

      case "Wishlist":
        return (
          <SectionContainer>
            <SectionTitle>Your Wishlist</SectionTitle>
            <ul>
              {wishlist.map((item) => (
                <li key={item.id}>
                  {item.product} - {item.price}
                  <Button onClick={() => handleBuyNow(item)}>Buy Now</Button>
                  <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
                  <div>
                    <QuantityButton onClick={() => handleDecrement(item.id)}>-</QuantityButton>
                    <span> Quantity: {item.quantity} </span>
                    <QuantityButton onClick={() => handleIncrement(item.id)}>+</QuantityButton>
                  </div>
                </li>
              ))}
            </ul>
          </SectionContainer>
        );

      case "Billing Address":
        return (
          <SectionContainer>
            <SectionTitle>Billing Address</SectionTitle>
            <p>
              {billingAddress.street}, {billingAddress.city}, {billingAddress.country} - {billingAddress.zip}
            </p>
            <p>Phone: {billingAddress.phone}</p>
          </SectionContainer>
        );

      case "Account Info":
        return (
          <SectionContainer>
            <SectionTitle>Account Info</SectionTitle>
            <p>Name: {accountInfo.name}</p>
            <p>Email: {accountInfo.email}</p>
            <p>Phone: {accountInfo.phone}</p>
          </SectionContainer>
        );

      case "Change Password":
        return (
          <SectionContainer>
            <SectionTitle>Change Password</SectionTitle>
            <input
              type="password"
              placeholder="Current Password"
              value={password.current}
              onChange={(e) => setPassword({ ...password, current: e.target.value })}
            />
            <input
              type="password"
              placeholder="New Password"
              value={password.new}
              onChange={(e) => setPassword({ ...password, new: e.target.value })}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={password.confirm}
              onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
            />
            <Button onClick={handleChangePassword}>Update Password</Button>
          </SectionContainer>
        );

      case "Shipping Address":
        return (
          <SectionContainer>
            <SectionTitle>Shipping Address</SectionTitle>
            <h3>Saved Addresses:</h3>
            <ul>
            {addresses.map((address) => (
          <li key={address.id}>
            {address.street}, {address.city}, {address.country} - {address.zip} (Phone: {address.phone}) 
            <br />
            Type: {address.type}
            {address.type === "Other" && <span> ({address.otherType})</span>}
            <br />
            <Button
              onClick={() =>
                handleEditAddress(address.id, {
                  ...address,
                  phone: prompt("Enter new phone number:", address.phone),
                })
              }
            >
              Edit
            </Button>
          </li>
        ))}
            </ul>
            <h3>Add a New Address:</h3>
      <input
        type="text"
        placeholder="Street"
        value={newAddress.street}
        onChange={(e) =>
          setNewAddress({ ...newAddress, street: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="City"
        value={newAddress.city}
        onChange={(e) =>
          setNewAddress({ ...newAddress, city: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Country"
        value={newAddress.country}
        onChange={(e) =>
          setNewAddress({ ...newAddress, country: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="ZIP Code"
        value={newAddress.zip}
        onChange={(e) =>
          setNewAddress({ ...newAddress, zip: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Phone"
        value={newAddress.phone}
        onChange={(e) =>
          setNewAddress({ ...newAddress, phone: e.target.value })
        }
      />

      <select
        value={newAddress.type}
        onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })}
      >
        <option value="Home">Home</option>
        <option value="Work">Work</option>
        <option value="Other">Other</option>
      </select>

      {newAddress.type === "Other" && (
        <input
          type="text"
          placeholder="Specify the address type"
          value={newAddress.otherType}
          onChange={(e) =>
            setNewAddress({ ...newAddress, otherType: e.target.value })
          }
        />
      )}

      <Button onClick={handleAddAddress}>Add Address</Button>
    </SectionContainer>

        );

      case "Gift Cards":
        return (
          <SectionContainer>
            <SectionTitle>Gift Cards</SectionTitle>
            <p>Send a gift card to someone!</p>
            <input
              type="text"
              placeholder="Recipient Email or Phone"
              value={giftCardRecipient.contact}
              onChange={(e) => setGiftCardRecipient({ ...giftCardRecipient, contact: e.target.value })}
            />
            <select
              value={giftCardRecipient.type}
              onChange={(e) => setGiftCardRecipient({ ...giftCardRecipient, type: e.target.value })}
            >
              <option value="email">Email</option>
              <option value="phone">Phone</option>
            </select>
            <input
              type="number"
              placeholder="Gift Card Amount"
              value={giftCardRecipient.amount}
              onChange={(e) => setGiftCardRecipient({ ...giftCardRecipient, amount: e.target.value })}
            />
            <Button onClick={handleGiftCardSend}>Send Gift Card</Button>
          </SectionContainer>
        );

      default:
        return <p>Select a section to view details.</p>;
    }
  };

  return (
    <GlobalContainer>
      <Sidebar>
        {[ 
          "Dashboard",
          "Orders",
          "Wishlist",
          "Billing Address",
          "Shipping Address",
          "Account Info",
          "Change Password",
          "Gift Cards",
          "Wallets",
          "Logout",
        ].map((item) => (
          <a
            key={item}
            className={activeSection === item ? "active" : ""}
            onClick={() => setActiveSection(item)}
          >
            {item}
          </a>
        ))}
      </Sidebar>
      <MainContent>{renderContent()}</MainContent>
    </GlobalContainer>
  );
};

export default AccountsPage;
