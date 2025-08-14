import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Gallery from './Gallery'

function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
          <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default Home;