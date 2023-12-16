import React from 'react'
import searchIcon from "../../../assets/Icons/search.png"
import "./product.css"

const ProductSearchBar = () => {
  
  return (
    <div className="product-searchbar">
      <img src={searchIcon} alt="searchicon" />
      <input type="text" name="search" />
    </div>
  );
}

export default ProductSearchBar
