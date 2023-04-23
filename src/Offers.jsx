import React from 'react';
import styles from './Offers.css';

const Offers = () => {
  return (
    <>
    <h2>Offers</h2>
    <div className='container__off'>
      <div className="item1__off">

      <div className="card">
          <div className="cover">
            {/* <img src="https://grasautomotores.com.ar/wp-content/uploads/2017/11/FORD-ECO-SPORT-1.5-SE-AUT-L18-5.jpg" alt="" /> */}
          </div>
          <div className="info">
            <h5>Ford Focus III 2.0 Se</h5>
            <p>2019 | 51.000km</p>
            <p>Rosario, Santa Fe</p>
          </div>
        </div>

      </div>
      <div className="item2__off">
        <div className="card">
            <div className="cover"></div>
            <div className="info">
              <h5>Nombre del Producto</h5>
              <p>Detalles</p>
              <p>Ubicación del vendedor</p>
            </div>
        </div>
      </div>

      <div className="item3__off">
        <div className="card">
            <div className="cover"></div>
            <div className="info">
              <h5>Nombre del Producto</h5>
              <p>Detalles</p>
              <p>Ubicación del vendedor</p>
            </div>
        </div>
      </div>

      <div className="item4__off">
        <div className="card">
            <div className="cover"></div>
            <div className="info">
              <h5>Nombre del Producto</h5>
              <p>Detalles</p>
              <p>Ubicación del vendedor</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Offers;