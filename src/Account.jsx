import React from 'react';
import styles from "./Account.css";

export const Account = () => {
  return (
    <div className="account">
        {<button className="btn-cart"><span className="material-symbols-outlined">search</span></button>}
        {<button className="btn-not"><span className="material-symbols-outlined">notifications</span></button>}
        {<button className="btn-log"><span className="material-symbols-outlined">login</span></button>}
    </div>    
  )
}
