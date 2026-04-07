import React from "react";
import { Link } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
      {isLoggedIn ? (
        <>
          <Link to="/dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
          <Link to="/invoices" style={{ marginRight: "10px" }}>Invoices</Link>
          <Link to="/clients" style={{ marginRight: "10px" }}>Clients</Link>
          <button
            onClick={() => setIsLoggedIn(false)}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
