import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  //subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000); // 5000 milliseconds = 5 seconds

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link nav-link" : "nav-link"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link nav-link" : "nav-link"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "active-link nav-link" : "nav-link"
              }
            >
              <div className="cart-icon">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cartnotification">{cartItems.length}</div>
              </div>
            </NavLink>
          </li>

          {isAuthenticated ? (
            <li>
              <button
                className="login"
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button className="login" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </li>
          )}
        </ul>
      </div>
      <div className="userinfo">
        {isVisible && isAuthenticated && (
          <p>
            <span>Welcome</span> {user.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
