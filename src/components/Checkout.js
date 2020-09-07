import React from "react";
import { isAuthenticated } from "../api/auth";
import { Link } from "react-router-dom";

const Checkout = ({ items }) => {
  const total = () =>
    items.reduce((acc, i) => acc + i.count * i.price, 0).toFixed(2);

  return (
    <div>
      <h3 className="text-center text-muted">Checkout</h3>
      <p>{total()}</p>
      {isAuthenticated() ? (
        <button className="btn btn-success">Checkout</button>
      ) : (
        <Link to="/login" className="btn btn-primary">
          Login to checkout
        </Link>
      )}
    </div>
  );
};

export default Checkout;
