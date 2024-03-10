import React from "react";
import "../style/Navigation.css";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navigation-panel">
            <ul>
                <li>
                    <NavLink to="/" className="navigate"> Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/product-cart" className="navigate">Product Cart</NavLink>
                </li>
            </ul>
        </div>
    )
};