import React from "react";
import { Link } from "react-router-dom"; // We use Link for navigation to the Grooming Packages page

const CustomerDetails = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Customer Details</h1>
      <form>
        {/* Form fields for customer details */}
        <div style={{ marginBottom: "20px" }}>
          <label>First Name:</label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Last Name:</label>
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label>Phone Number:</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>
      </form>
      <Link to="/grooming-packages">
        <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px" }}>
          Proceed to Grooming Packages
        </button>
      </Link>
    </div>
  );
};

export default CustomerDetails;
