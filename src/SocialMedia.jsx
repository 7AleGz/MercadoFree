import React from 'react';
import styles from './SocialMedia.css';

export const SocialMedia = () => {
  return (
    <div>
        <div className="info">
            <h3>Social Media</h3>
            <div className="item-sm"><i className="fa fa-twitter"></i><a href="">Twitter</a></div><br />
            <div className="item-sm"><i className="fa fa-youtube"></i><a href="">Youtube</a></div><br />
            <div className="item-sm"><i className="fa fa-instagram"></i><a href="">Instagram</a></div><br />
            <div className="item-sm"><i className="fa fa-facebook"></i><a href="">Facebook</a></div><br />
        </div>
    </div>
  )
}
