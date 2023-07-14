import React, { useEffect, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import axios from 'axios';

function POSPage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const result = await axios.get('products');
    setProducts(result.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <MainLayout>
      <div className='row'>
        <div className='col-lg-8'></div>
        {products.map((product, key) => (
          <div className='border' key={key}>
            <div className='col-lg-4'></div>
            <p>{product.name}</p>
            <img src={product.img} className='img-fluid' alt={product.name} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default POSPage;
