import React from 'react'
import Navbar from '../components/navbar'
import '../App.css'

function Home() {
    return (
        <>
            <Navbar />
            <main className='mx-auto max-w-screen-xl mt-8'>
                <div>
                    This is home page
                </div>
            </main>
        </>
    )
}

export default Home
