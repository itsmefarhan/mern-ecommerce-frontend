import React, { useState, useEffect } from "react";
import { getProduct } from "../api/product";
import Card from "../components/Card";

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const { id } = match.params;

  useEffect(() => {
    getProduct(id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProduct(data);
      }
    });
  }, []);
  console.log(product);
  const { title, price, quantity, createdAt, description } = product;
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 col-xs-12 mt-3">
          <img
            src={`/api/product/photo/${product._id}`}
            alt={title}
            className="img-fluid"
          />
        </div>
        <div className="col-sm-6 col-xs-12 mt-3">
          <h3 className="text-muted">{title}</h3>
          <p className="text-lead">
            Uploaded on {new Date(createdAt).toDateString()}
          </p>
          <p className="text-lead">${price}</p>
          In Stock <span className="text-success">{quantity}</span>
        </div>
      </div>

      <hr />
      <div className="card mt-3">
        <div className="card-header">
          <h4>Description</h4>
        </div>
        <div className="card-body">{description}</div>
      </div>
    </div>
  );
};

export default Product;
