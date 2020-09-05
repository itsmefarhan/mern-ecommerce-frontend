import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../api/product";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Products = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const { title } = match.params;

  const [order, setOrder] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    getProductsByCategory(
      title.charAt(0).toUpperCase() + title.slice(1),
      sortBy,
      order
    ).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });

    if (filter === "low") {
      setSortBy("price");
      setOrder("asc");
    } else if (filter === "high") {
      setSortBy("price");
      setOrder("desc");
    } else if (filter === "oldest") {
      setSortBy("createdAt");
      setOrder("asc");
    } else {
      setSortBy("createdAt");
      setOrder("desc");
    }
  }, [filter, order]);

  return (
    <div>
      <h3 className="text-muted">{title.toUpperCase()}</h3>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="form-control"
          >
            <option value="">Sort By</option>
            <option value="low">Price Low to High</option>
            <option value="high">Price High to Low</option>
            <option value="oldest">Oldest</option>
            <option value="latest">Latest</option>
          </select>
        </div>
        <div className="col-4"></div>
      </div>

      <div className="row">
        {products.map((product) => (
          <Card product={product} ket={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
