import React, { useState } from 'react';
import Navbar from '../components/navbar';

function Products() {
    const [showMoreProducts, setShowMoreProducts] = useState(false);
    const [editingProductIndex, setEditingProductIndex] = useState(null);
    const [productName, setProductName] = useState('');

    const productsData = [
        { id: 1, name: 'Product 1', imageUrl: 'https://via.placeholder.com/150', price: 20 },
        { id: 2, name: 'Product 2', imageUrl: 'https://via.placeholder.com/150', price: 30 },
        { id: 3, name: 'Product 3', imageUrl: 'https://via.placeholder.com/150', price: 25 },
        { id: 4, name: 'Product 4', imageUrl: 'https://via.placeholder.com/150', price: 35 },
        { id: 5, name: 'Product 5', imageUrl: 'https://via.placeholder.com/150', price: 40 },
        { id: 6, name: 'Product 6', imageUrl: 'https://via.placeholder.com/150', price: 45 },
        { id: 7, name: 'Product 7', imageUrl: 'https://via.placeholder.com/150', price: 50 },
        { id: 8, name: 'Product 8', imageUrl: 'https://via.placeholder.com/150', price: 55 },
        { id: 9, name: 'Product 9', imageUrl: 'https://via.placeholder.com/150', price: 60 },
        { id: 10, name: 'Product 10', imageUrl: 'https://via.placeholder.com/150', price: 65 },
    ];

    const toggleShowMoreProducts = () => {
        setShowMoreProducts(!showMoreProducts);
    };

    const handleEditClick = (index) => {
        setEditingProductIndex(index);
        setProductName(productsData[index].name);
    };

    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    const handleSaveChanges = (index) => {
        const updatedProducts = [...productsData];
        updatedProducts[index].name = productName;
        setEditingProductIndex(null);
        setProductName('');
    };

    const handleCancelEdit = () => {
        setEditingProductIndex(null);
        setProductName('');
    };

    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800 mb-8">Products</h1>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    {productsData.slice(0, showMoreProducts ? productsData.length : 6).map((product, index) => (
                        <div key={product.id} className="bg-white shadow-md rounded-lg p-6 relative hover:shadow-lg transition duration-300">
                            {editingProductIndex === index ? (
                                <div>
                                    <input
                                        type="text"
                                        value={productName}
                                        onChange={handleProductNameChange}
                                        className="border border-gray-300 rounded p-2 mb-2"
                                    />
                                    <div className="flex justify-end">
                                        <button onClick={() => handleSaveChanges(index)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Save</button>
                                        <button onClick={handleCancelEdit} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <img src={product.imageUrl} alt={`Product ${product.id}`} className="w-full h-40 object-cover mb-4" />
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                                    <p className="text-gray-600">Price: ${product.price}</p>
                                    <button onClick={() => handleEditClick(index)} className="absolute top-0 right-0 mt-2 mr-2 bg-transparent border-0 text-gray-600 hover:text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm0 0a3 3 0 11-6 0 3 3 0 016 0zm0 0a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {productsData.length > 6 && (
                    <div className="flex justify-center mt-8">
                        <button onClick={toggleShowMoreProducts} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300">
                            {showMoreProducts ? 'Show Less Products' : 'Show More Products'}
                        </button>
                    </div>
                )}
            </main>
        </>
    );
}

export default Products;
