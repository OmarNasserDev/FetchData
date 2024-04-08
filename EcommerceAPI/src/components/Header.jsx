import React, { memo } from 'react'
import style from '../designs/Header.module.css'
const Header = () => {
    return (
        <div className='fixed w-full'>
            <nav className='w-full flex items-center justify-between p-2 bg-indigo-950 shadow-lg shadow-gray-400 text-white text-lg font-bold'>
                <div><a href="/">Tech.Store</a></div>
                <div>
                    <ul className='flex gap-5'>
                        <li><a href="/products">Products</a></li>
                        <li><a href="#">Categories</a></li>
                    </ul>
                </div>
                <div className='flex gap-5'>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </nav>
        </div>
    )
}

export default memo(Header)
