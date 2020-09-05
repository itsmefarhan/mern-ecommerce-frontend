import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/product.js";
import { getCategories } from "../api/category.js";
import Card from "../components/Card.js";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  const getProductsBySell = () => {
    getProducts("sold", 3).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const getProductsByArrival = () => {
    getProducts("createdAt", 3).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  const getAllCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setCategories(data);
      }
    });
  };

  useEffect(() => {
    getProductsBySell();
    getProductsByArrival();
    getAllCategories();
  }, []);

  return (
    <div>
      <div className="row mb-5">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="card">
            <div className="card-header">
              <h5>Categories</h5>
            </div>
            <ul className="list-group">
              {categories.map((category) => (
                <li className="list-group-item" key={category._id}>
                  <Link to={`/category/${category.title.toLowerCase()}`}>{category.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <h3>New Arrivals</h3>
      <div className="row">
        {productsByArrival.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
      <h3 className="mt-5">Best Sell</h3>
      <div className="row">
        {productsBySell.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
