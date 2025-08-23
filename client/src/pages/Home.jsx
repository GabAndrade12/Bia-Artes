import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Gallery from './Gallery'
import TestimonialCard from '../components/TestimonialCard';
import testimonialsData from '../data/testimonialsData.js';

function Home() {
  return (
    <>
      <Navbar />
      <main>
          <Hero />
          <Gallery />
          <section className='testimonials-section'>
            <h2>O que nossos clientes dizem</h2>
            <div className='testimonials-list'>
              {testimonialsData.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id}
                  quote={testimonial.quote}
                  author={testimonial.author}
                />
              ))}
            </div>
          </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;