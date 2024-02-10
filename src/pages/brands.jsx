import React, { useState } from 'react';
import Navbar from '../components/navbar';

function Brands() {
  const [showMoreBrands, setShowMoreBrands] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const brandsData = [
    { name: 'Brand 1', itemCount: 150, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 2', itemCount: 200, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 3', itemCount: 180, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 4', itemCount: 120, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 5', itemCount: 160, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 6', itemCount: 190, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 7', itemCount: 170, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 8', itemCount: 140, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 9', itemCount: 130, imageURL: 'https://test1.ko-de.org/HF.png' },
    { name: 'Brand 10', itemCount: 110, imageURL: 'https://test1.ko-de.org/HF.png' },
  ];

  const toggleShowMoreBrands = () => {
    setShowMoreBrands(!showMoreBrands);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredBrands = brandsData.filter((brand) =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-screen-xl mt-8'>
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mb-8">Brands</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredBrands.slice(0, showMoreBrands ? filteredBrands.length : 6).map((brand, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <img src={brand.imageURL} alt="Brand Logo" className="h-20 w-20 mr-4" />
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
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search by brand name..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div className="mt-4">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Brand</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Count</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBrands.map((brand, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src={brand.imageURL} alt="Brand Logo" className="h-8 w-8 mr-2" />
                      <span className="font-semibold">{brand.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{brand.itemCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default Brands;
