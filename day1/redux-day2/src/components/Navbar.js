import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a className="link" href="http://localhost:3001/">
          Store
        </a>
        <a className="link" href="http://localhost:3001/cart">
          Cart
        </a>
      </div>
    </div>
  );
}
