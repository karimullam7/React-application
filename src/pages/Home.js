import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';

 function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxurious rooms" subtitle="Delux rooms starting at $299">
            <Link to='/rooms' className="btn-primary">Our rooms</Link>
        </Banner>
      </Hero>
    </div>
  )
}

export default Home;