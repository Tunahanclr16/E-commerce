import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='bg-white h-24 border-b-[1px] border-b-gray-800'>
      <div className='flex justify-between h-full items-center sm:max-w-[1280px] md:max-w-[1440px] mx-auto'>
        <div className='flex justify-center gap-2 items-center p-3 '>
          <FaBars size={20} onClick={toggleNav} className='flex items-center cursor-pointer sm:hidden' />
          {navOpen && (
            <div className="fixed top-0 left-0 w-full z-10 h-full bg-black/50 " onClick={toggleNav}></div>
          )}
          <div className={`fixed bg-white z-50 h-screen w-3/4 top-0 right-0 transform ${navOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform ease-in-out duration-300`}>
            <div className='flex items-end p-4'>
              <IoClose onClick={toggleNav} size={30} className='cursor-pointer' />
            </div>
            <ul className='flex flex-col items-center font-medium text-2xl mt-20 gap-4'>
            <li>Home</li>
            <li>Products</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
          </div>
          <Link to={'/'} className='sm:text-2xl text-xl font-bold md:text-4xl'>3legant.</Link>
        </div>
        <div className='hidden sm:flex'>
          <ul className='flex items-center p-3 text-sm md:text-lg font-medium cursor-pointer gap-4 md:gap-10'>
            <li>Home</li>
            <li>Products</li>
            <li>Shop</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className='p-3 flex items-center gap-3 sm:gap-4'>
          <button className='bg-black text-white hover:bg-black/70 transition-all px-4 text-sm sm:text-base sm:px-6 rounded p-2 sm:p-3'>Login</button>
          <button className='bg-black text-white hover:bg-black/70 transition-all px-4 text-sm sm:text-base sm:px-6 rounded p-2 sm:p-3'>Register</button>
        </div>
      </div>
    </div>
  );
}
