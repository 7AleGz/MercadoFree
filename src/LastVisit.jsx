import React from 'react';
import styles from './LastVisit.css';

const LastVisit = () => {
  return (
    <>
    <h2>Based on your last visit</h2>
    <div className='container__lv'>
      <div className="item1__lv">
        <div className="card">
          <div className="cover"></div>
          <div className="info">
            <h5>Ford Focus III 2.0 Se</h5>
            <p>2019 | 51.000km</p>
            <p>Rosario, Santa Fe</p>
          </div>
        </div>
      </div>
      <div className="item2__lv">
        <div className="card">
            <div className="cover"></div>
            <div className="info">
              <h5>Nombre del Producto</h5>
              <p>Detalles</p>
              <p>Ubicación del vendedor</p>
            </div>
        </div>
      </div>
      <div className="item3__lv">
        <div className="card">
          <div className="cover"></div>
          <div className="info">
            <h5>Nombre del Producto</h5>
            <p>Detalles</p>
            <p>Ubicación del vendedor</p>
          </div>
        </div>
      </div>
      <div className="item4__lv">
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

export default LastVisit;