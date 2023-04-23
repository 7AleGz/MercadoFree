import React from 'react';
import { AboutUs } from './AboutUs';
import { ContactUs } from './ContactUs';
import { SocialMedia } from './SocialMedia';
import { Consulta } from './Consulta';
import styles from './Footer.css';

export const Footer = () => {
  return (
    <section className="footer">
      <div className='container-footer'>
        <AboutUs />
        <ContactUs />
        <SocialMedia />
      </div>
    </section>
  )
}
