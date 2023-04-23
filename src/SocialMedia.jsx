import React from 'react';
import styles from './SocialMedia.css';

export const SocialMedia = () => {
  return (
    <div>
        <div className="info">
            <h3>Social Media</h3>
            <div className="item-sm"><a href="twitter.com"><i className="fa fa-twitter"></i>Twitter</a></div><br />
            <div className="item-sm"><a href="youtube.com"><i className="fa fa-youtube"></i>Youtube</a></div><br />
            <div className="item-sm"><a href="instagram.com"><i className="fa fa-instagram"></i>Instagram</a></div><br />
            <div className="item-sm"><a href="facebook.com"><i className="fa fa-facebook"></i>Facebook</a></div><br />
        </div>
    </div>
  )
}
