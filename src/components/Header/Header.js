import React from "react";
import { Link } from "react-router-dom";

import logo from "../../commonResource/images/icons/logo-sm.png";

import search from "../../commonResource/images/icons/search-icon-sm.png";

import cart from "../../commonResource/images/icons/cart-sm.png";
import Mac from "./Nav pictures/store-card-14-16-mac-nav-202301.png";
import Iphone from "./Nav pictures/store-card-13-iphone-nav-202209_GEO_US.png";
import Ipad from "./Nav pictures/store-card-13-ipad-nav-202210.png";
import Watch from "./Nav pictures/store-card-13-watch-nav-202209.png";
import Tv from "./Nav pictures/store-card-13-appletv-nav-202210.png";
import Music from "./Nav pictures/store-card-13-homepod-nav-202301.png";
import Support from "./Nav pictures/store-card-13-accessories-nav-202209.png";
import Logo from "./Nav pictures/store-card-13-holiday-giftcards-asit-agc-nav-202111.png";

export default function Header() {
  return (
    <div>
      <div className="nav-wrapper fixed-top ">
        <div className="container">
          <nav className="navbar navbar-toggleable-sm navbar-expand-md">
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              ☰
            </button>
            <Link className="navbar-brand  " to="/">
              <img src={Logo} alt="logo" />
            </Link>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav nav-justified w-100 nav-fill">
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/mac">
                    <img src={Mac} alt="#" /> Mac
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/iphone">
                    <img src={Iphone} alt="#" />
                    iphone
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/ipad">
                    <img src={Ipad} alt="#" />
                    ipad
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/Watch">
                    <img src={Watch} alt="#" />
                    watch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/tv">
                    <img src={Tv} alt="#" />
                    tv
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/Music">
                    <img src={Music} alt="#" />
                    Music
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/Support">
                    <img src={Support} alt="#" />
                    Support
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-Link js-scroll-trigger" to="/search/">
                    <img className="Logo" src={search} alt="search" />
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-Link js-scroll-trigger" to="/cart/">
                    <img className="Logo" src={cart} alt="cart" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
