import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {

    return <div className="header">
        <Link to={"/"}> <a>Home</a> </Link>
        <Link to={"/product-list"}> <a>Product List</a> </Link>
        <Link to={"/add-product"}> <a>Add Product</a> </Link>
    </div>


}

export default Header;