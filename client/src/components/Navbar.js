import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar() {
  const addtocartreducer = useSelector((state) => state.addToCartReducer);
  const { cartItems } = addtocartreducer;
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href=" ">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href=" /login">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/cart">
                  <i class="fas fa-shopping-cart"></i>
                  {cartItems.length}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
