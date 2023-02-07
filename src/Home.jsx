import React from 'react';
import LastVisit from './LastVisit';
import Offers from './Offers';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <>

    <div className='carousel'>

      <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
              <div className="carousel-item active">
              <img src="https://burgwagen.com.ar/wp-content/uploads/2021/01/BUG-banner-dic-01.jpg" className="d-block w-100" alt="Banner Amarok" />
              </div>
              <div className="carousel-item">
              <img src="https://burgwagen.com.ar/wp-content/uploads/2021/01/BUG-banner-dic-02.jpg" className="d-block w-100" alt="Banner Taos" />
              </div>
              <div className="carousel-item">
              <img src="https://burgwagen.com.ar/wp-content/uploads/2021/01/BUG-banner-dic-03.jpg" className="d-block w-100" alt="Banner Tiguan" />
              </div>
              <div className="carousel-item">
              <img src="https://burgwagen.com.ar/wp-content/uploads/2021/01/BUG-banner-dic-04.jpg" className="d-block w-100" alt="Banner Vento" />
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div>

    </div>

    <section className="home-section">
      <LastVisit />
      <Offers />
      <Sponsor />
    </section> 
    
    </>
  )
}

export default Home;