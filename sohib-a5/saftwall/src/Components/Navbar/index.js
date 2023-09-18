import React from 'react'
import logo from './logo.png'


export default function Navbar() {
    return (
        <nav className='flex justify-between items-center px-60 py-32'>
            <div className="logo flex">
                <img src={logo} alt="" />
                <input type="text" placeholder='serach' className='pl-5 rounded-md border-2 border-nutral-400
                 bg-transparent' />
            </div>
            <ul className='flex'>
                <li className='text-white mr-5 text-md'>How It Works</li>
                <li className='text-white mr-5 text-md'>Why Softwall</li>
                <li className='text-white mr-5 text-md'>About Us</li>
                <li className='text-white mr-5 text-md'>Contact</li>


            </ul>
            <div >
                <button className='bg-orange-700 py-3 px-8 mr-5'>sing in</button>
                <select className='py-3 px-8 bg-transprent text-white border-2 border-neutral-400'>
                    <option className='text-black' value="en">En</option>
                    <option className='text-black' value="ar">Ar</option>
                </select>
            </div>
        </nav>
    )
}
