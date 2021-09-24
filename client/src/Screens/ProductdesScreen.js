import React from "react";

//showing the products with all the details

export default function ProductdesScreen({ match }) {
  const products = [];
  const productid = match.params.id;
  const product = products.find((product) => product.id == productid); // id matchs with the url id
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4 m-2">
            <h1>{product.name}</h1>
            <img src={product.image} className="img-fluid m-3 bigimg" />
            <p>{product.description}</p>
          </div>
        </div>

        {/* FOR THE ANOTHER COLOUM */}

        <div className="col-md-6 text-left">
          <div className="m-2">
            <h1 style={{ textAlign: "left " }}>price:{product.price}</h1>
            <hr />
            <h1 style={{ textAlign: "left " }}>select quantity</h1>

            {/* FOR THE SELECTION OF ITEMS QUANTITY*/}
            <select style={{ display: "flex" }}>
              {[...Array(product.countInstock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button style={{ display: "flex" }} className="btn btn-dark">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
