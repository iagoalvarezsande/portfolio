import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import Logo from '../assets/Logo.png';
import Avatar from '../assets/AvatarFace.png'
import { Link } from 'react-scroll';
import Picture from '../assets/Iago Profile CV.jpg';
import './Home.css';

const Home = () => {
  const [showH2, setShowH2] = useState(false);
  const [showH3, setShowH3] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [showPicture, setShowPicture] = useState(false);

  const handleClick = (target) => {
    if (target === 'Logo') {
      setShowLogo(!showLogo);
      setShowPicture(!showPicture);
    } else if (target === 'Picture') {
      setShowPicture(!showPicture);
      setShowLogo(!showLogo);
    } else {
      // Handle header click
      if (!showH2 && !showH3) {
        setShowH2(true);
      } else if (showH2 && !showH3) {
        setShowH2(false);
        setShowH3(true);
      }
    }
  };

  return (
    <div name='home' className='w-full h-screen flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center">
        <div
          className="rounded-full overflow-hidden"
          style={{ width: '200px', height: '200px', cursor: 'pointer', display: showLogo ? 'block' : 'none' }}
          onClick={() => handleClick('Logo')}
        >
          <img
            name='Logo'
            className='w-full h-full hover:animate-pulse'
            src={Logo}
            alt="Logo Image"
          />
        </div>
        <div
          className="rounded-full overflow-hidden"
          style={{ width: '200px', height: '200px', cursor: 'pointer', display: showPicture ? 'block' : 'none' }}
          onClick={() => handleClick('Picture')}
        >
          <img
            name='Picture'
            className='w-full h-full'
            src={Avatar}
            alt="Picture Image"
          />
        </div>
        <div className='max-w-[1000px] mx-auto px-8' style={{ minHeight: '300px' }}>
          {/* Container */}
          <div
            className='color-transition-container'
            onClick={() => handleClick('Header')}
          >
            <FadeIn>
              <h1 className='text-7xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center cursor-pointer'>
                Hello there!
              </h1>
            </FadeIn>
            {showH2 && (
              <FadeIn>
                <h2 name='Title2' className='text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#5CE1E6] font-semibold'>
                  I'm not an engineer
                </h2>
              </FadeIn>
            )}
            {showH3 && (
              <FadeIn>
                <h3 name='Title3' className='text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-pink-600 font-semibold'>
                  I'm an implementation Consultant
                </h3>
              </FadeIn>
            )}
          </div>
        </div>
        <div>
          <button className='border-2 py-3 px-3 my-2 flex items-center hover:bg-pink-600'>
            <Link to="about" smooth={true} duration={500}>
              Know Me Better
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
