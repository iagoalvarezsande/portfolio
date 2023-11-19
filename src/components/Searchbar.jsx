import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Searchbar = () => {
  const [search, setSearch] = useState(false);

  const handleClick = () => setSearch(!search);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2b2b2b]'>
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: '90px', height: '80px' }} />
      </div>

      {/* Menu for larger screens */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Interests</li>
      </ul>

      {/* Hamburger (three dots) always in the top-right corner */}
      <div
        onClick={handleClick}
        className='md:hidden z-10 fixed top-4 right-4'
        style={{ cursor: 'pointer' }}
      >
        {!search ? <FaBars style={{ color: 'white' }} /> :<FaTimes/> }
      </div>

      {/* Mobile Menu */}
      <ul className={!search ? 'hidden' : 'md:hidden absolute top-0 right-0 left-0 w-full h-screen bg-[#2b2b2b] flex flex-col justify-center items-center'}>
        <li className='py-6 px-4xl text-lg'>About</li>
        <li className='py-6 px-4xl text-lg'>Home</li>
        <li className='py-6 px-4xl text-lg'>Experience</li>
        <li className='py-6 px-4xl text-lg'>Interests</li>
      </ul>

      {/* Social Icons */}
      <div></div>
    </div>
  );
};

export default Searchbar;
