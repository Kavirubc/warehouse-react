import React from 'react';
import Navbar from '../components/navbar';
import '../App.css';

function Home() {
    return (
        <>
            <Navbar />
            <main className='container mx-auto max-w-screen-xl mt-8'>
                <div className='mx-5'>
                    <h1 className='text-4xl font-semibold text-gray-800 mb-8'>Dashboard</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className='group border border-gray-200 rounded-lg p-6 shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
                        <h2 className='text-xl font-semibold mb-4'>Title</h2>
                        <p className='text-gray-600'>Additional content here</p>
                    </div>
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
                </div>
            </main>
        </>
    );
}

export default Home;
