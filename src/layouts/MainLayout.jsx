import React from 'react';
import { Link } from 'react-router-dom';

function MainLayout() {
  return (
    <div>
      <header>
        <nav className="navbar navbar bg-primary">
          <div className="container">
            <Link to="/" className="navbar-brand">
              DevPOS
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="container mt-3">
          <div className="bg-light p-5 mt-4 rounded-3">
            <h1>Welcome to the simple pos business</h1>
            <p>
              Empowering Sri Lankan retailers for decades by setting standards
              in Point Of Sales industry.
            </p>
            <p>If you have an issue, call 0218889878</p>
            <Link to="/pos" className="btn btn-primary">
              Click here to sell product
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
