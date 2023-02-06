import React from 'react';
import styles from "./Search.css";

export const Search = () => {
  return (
    <>
    <div className='search'>
      <div className="search-inputs">
        <input type="search" name="" className='search-input' placeholder='Search products, brands and more...' />
        <button type="submit" className='search-btn'><i className="fa fa-search"></i></button>
      </div>
    </div>
    </>
  );
}
