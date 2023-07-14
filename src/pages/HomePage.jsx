import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <div className='container mt-3'>
        <div className='bg-light p-5 mt-4 rounded-3'>
          <h1>Welcome to the simple pos business</h1>
          <p>
            Empowering Sri Lankan retailers for decades by setting standards in
            Point Of Sales industry.
          </p>
          <p>If you have an issue, call 0218889878</p>
          <Link to='/pos' className='btn btn-primary'>
            Click here to sell product
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default HomePage;
