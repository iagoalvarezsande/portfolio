import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';
import Logo from '../assets/Logo.png';
import { Link } from 'react-scroll';

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
        <li>
        <Link to="home" smooth={true} duration={500}>
          Home</Link></li>
        <li>
        <Link to="about" smooth={true} duration={500}>
          About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>
          Skills</Link></li>
        <li className='hidden'>Interests</li>
        <li 
        style={{ display: 'flex', alignItems: 'center'}}>
        <a href="https://www.linkedin.com/in/iago-alvarez-sande-8b703b17b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        <FaLinkedin style={{ marginRight: '8px' }} />
        <p>Linkedin</p>
        </a>
        </li>
        <li style={{display: 'flex', alignItems: 'center'}}>
        <a href="https://github.com/iagoalvarezsande" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
            <FaGithub style={{ marginRight: '8px' }} />
            <p>GitHub</p>
          </a>
        </li>
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
        <li className='py-6 px-4xl text-lg'>
          <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
          Home</Link></li>
        <li className='py-6 px-4xl text-lg'><Link  onClick={handleClick} to="about" smooth={true} duration={500}>
          About</Link></li>
        <li className='py-6 px-4xl text-lg'><Link  onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills</Link></li>
        <li className='py-6 px-4xl text-lg hidden'>Interests</li>
        <li className='py-6 px-4xl text-lg'
        style={{ display: 'flex', alignItems: 'center'}}>
        <a href="https://www.linkedin.com/in/iago-alvarez-sande-8b703b17b/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
        <FaLinkedin style={{ marginRight: '8px' }} />
        <p>Linkedin</p>
        </a>
        </li>
        <li className='py-6 px-4xl text-lg' style={{display: 'flex', alignItems: 'center'}}>
        <a href="https://github.com/iagoalvarezsande" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white' }}>
            <FaGithub style={{ marginRight: '8px' }} />
            <p>GitHub</p>
          </a>
        </li>
      </ul>

      {/* Social Icons */}
      <div></div>
    </div>
  );
};

export default Searchbar;