import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/realtorClone.svg';

export default function Header() {

  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
              <Link to="/">
                <img src={logo} alt="logo" className='h-5' /></Link>
            </div>
            <div className='flex space-x-10'>
              <NavLink to="/" className={({ isActive })=> isActive ? 'text-black border-b-[3px] border-b-[#a00aa5] py-3 text-sm font-semibold' : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'} >
                Home
              </NavLink>
              <NavLink to="/offers" className={({ isActive })=> isActive ? 'text-black border-b-[3px] border-b-[#a00aa5] py-3 text-sm font-semibold' : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'}>
                Offers
              </NavLink>
              <NavLink to="/sign-in" className={({ isActive })=> isActive ? 'text-black border-b-[3px] border-b-[#a00aa5] py-3 text-sm font-semibold' : 'py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent'}>
                Sign in
              </NavLink>
            </div>
        </header>
    </div>
  )
}
