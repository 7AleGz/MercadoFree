import React from 'react';
import LastVisit from './LastVisit';
import Offers from './Offers';
import Sponsor from './Sponsor';

const Home = () => {
  return (
    <>
    <div>
      <h1>Home</h1>
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