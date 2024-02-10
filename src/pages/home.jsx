import React, { useState } from 'react';
import Navbar from '../components/navbar';
import '../App.css';

function Home() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <Navbar />
            <main className='container mx-auto max-w-screen-xl mt-8'>
                <div className='text-center'>
                    <h1 className='text-4xl font-semibold text-gray-800 mb-8'>Dashboard</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Title</h2>
                        <p className='text-gray-600'>Additional content here</p>
                        <p className='text-gray-600'>Additional content here</p>
                        <p className='text-gray-600'>Additional content here</p>
                        <p className='text-gray-600'>Additional content here</p>
                    </div>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Title</h2>
                        <p className='text-gray-600'>Additional content here</p>
                    </div>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Title</h2>
                        <p className='text-gray-600'>Additional content here</p>
                    </div>
                </div>
                <div className="mt-8">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Column Header 1
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Column Header 2
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Column Header 3
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Sample data */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 1</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 2</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 3</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 5</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 6</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 5</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 6</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 5</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 6</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox h-5 w-5 text-indigo-600"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 5</td>
                                <td className="px-6 py-4 whitespace-nowrap">Data 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default Home;
