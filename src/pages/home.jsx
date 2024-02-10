import React from 'react'
import Navbar from '../components/navbar'
import '../App.css'

function Home() {
    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div>
                    <h1 className='text-3xl mx-4'>Dashboard</h1>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='border border-slate-600 shadow-lg rounded-lg px-52 py-36'>
                        Tile
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home
