import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../actions/userAction";

export default function Navbar() {
  const dispatch = useDispatch();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
            <div className="navbar-nav ml-auto">
              {currentUser ? (
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {currentUser.name}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="/profile">Profile</a></li>
                    <li><a class="dropdown-item" href="/orders">Orders</a></li>
                    <li><a class="dropdown-item" onClick={() => { dispatch(logoutUser()) }} >LogOut</a></li>
                  </ul>
                </div>

              ) : (
                <li className="nav-item">
                  <a className="nav-link" href=" /login">
                    Login
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href=" ">
                  <i class="fas fa-cart-arrow-down">cart</i>
                </a>
              </li>
            </div>



          </div>
        </div>
      </nav>
    </div>
  );
}
{/* <li style={{color:"white"}}>{currentUser.name}</li> */ }