import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='container-fluid px-3 px-md-5 mb-5'>
      <div className='row text-center justify-content-center'>

        <div className='col-12 col-md-10 mt-4'>
          <img
            src='media/images/homeHero.png'
            alt='Hero Image'
            className='img-fluid w-100 mb-4'
            style={{ maxWidth: '800px', height: 'auto' }}
          />
        </div>

        <div className='col-12'>
          <h1 className='mb-3' style={{ fontSize: 'clamp(1.4rem, 5vw, 2.2rem)' }}>
            Invest in everything
          </h1>
        </div>

        <div className='col-12 col-md-8'>
          <p className='mb-4 px-2' style={{ fontSize: '1rem' }}>
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
        </div>

        <div className='col-12 mb-5'>
          <Link to='/signup'>
            <button
              className='btn btn-primary fs-5 p-2'
              style={{ width: '70%', maxWidth: '200px' }}
            >
              Signup Now
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero;