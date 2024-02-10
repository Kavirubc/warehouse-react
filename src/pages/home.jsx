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

            </main>
        </>
    )
}

export default Home
