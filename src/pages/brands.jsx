import React, { useState } from 'react';
import Navbar from '../components/navbar';

function Brands() {
  const [showMoreBrands, setShowMoreBrands] = useState(false);

  const brandsData = [
    { name: 'Brand 1', itemCount: 150 },
    { name: 'Brand 2', itemCount: 200 },
    { name: 'Brand 3', itemCount: 180 },
    { name: 'Brand 4', itemCount: 120 },
    { name: 'Brand 5', itemCount: 160 },
    { name: 'Brand 6', itemCount: 190 },
    { name: 'Brand 7', itemCount: 170 },
    { name: 'Brand 8', itemCount: 140 },
    { name: 'Brand 9', itemCount: 130 },
    { name: 'Brand 10', itemCount: 110 },
  ];

  const toggleShowMoreBrands = () => {
    setShowMoreBrands(!showMoreBrands);
  };

  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-screen-xl mt-8'>
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">Brands</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {brandsData.slice(0, showMoreBrands ? brandsData.length : 6).map((brand, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <img src="https://test1.ko-de.org/HF.png" alt="Brand Logo" className="h-8 w-8 mr-2" />
                <h2 className="text-xl font-semibold">{brand.name}</h2>
              </div>
              <p className="text-gray-600">{brand.itemCount} items</p>
            </div>
          ))}
        </div>
        {brandsData.length > 6 && (
          <div className="flex justify-center mt-8">
            <button onClick={toggleShowMoreBrands} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
              {showMoreBrands ? 'Show Less Brands' : 'Show More Brands'}
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default Brands;
