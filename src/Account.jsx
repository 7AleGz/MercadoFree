import React from 'react';
import styles from "./Account.css";

export const Account = () => {
  return (
    <div className="account">
        {<button className="btn-cart"><span className="material-symbols-outlined">shopping_cart</span>Cart</button>}
        {<button className="btn-not"><span className="material-symbols-outlined">notifications</span>Notifications</button>}
        {<button className="btn-log"><span className="material-symbols-outlined">login</span>Log in</button>}
    </div>    
  )
}
