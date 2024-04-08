import React from 'react'
import Header from '../components/Header.jsx'
const Home = () => {
    return (
        <div className='min-w-full min-h-[100vh] bg-slate-300'>
            <Header />
            <div className='w-full h-[100vh] flex items-center justify-center bg-slate-100'>
                <div className='block text-center font-extrabold'>

                    <h1>Go To Products Page AND IGONRE ANY THING ELSE</h1>
                    <p>Still you can join login & register pages but there is no importance of them</p>
                </div>
            </div>
        </div>
    )
}

export default Home
