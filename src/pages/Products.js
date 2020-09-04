import React, { useState, useEffect } from "react";
import { getProductsByCategory } from "../api/product";
import Card from "../components/Card";

const Products = ({ match }) => {
  const [products, setProducts] = useState([]);
  const { title } = match.params;

  useEffect(() => {
    getProductsByCategory(title.charAt(0).toUpperCase() + title.slice(1)).then(
      (data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setProducts(data);
        }
      }
    );
  }, []);
  
  return (
    <div>
      <h3 className='text-muted'>{title.toUpperCase()}</h3>

      <div className="row">
        {products.map((product) => (
          <Card product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
