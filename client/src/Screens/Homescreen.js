import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";

export default function Homescreen() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products/getallproducts")
      .then((res) => {
        // console.log(res);
        setproducts(res.data);
        console.log(products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {products.length &&
          products.map((product) => {
            return <Product product={product} />;
          })}
      </div>
    </div>
  );
}
