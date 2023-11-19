import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import Logo from '../assets/Logo.png';

const Home = () => {
  const [showH2, setShowH2] = useState(false);
  const [showH3, setShowH3] = useState(false);
  const [showP, setShowP] = useState(false);

  const handleClick = () => {
    if (!showH2) {
      setShowH2(true);
    } else if (!showH3) {
      setShowH3(true);
    } else if (!showP) {
      setShowP(true);
    }
  };

  return (
    <div name='home' className='w-full h-screen bg-[#2b2b2b] flex flex-col items-center justify-center'>
      <div className="flex flex-col items-center">
        <div>
          <img src={Logo} alt="Logo Image" style={{ width: '200px', height: '200px' }} />
        </div>
        <div className='max-w-[1000px] mx-auto px-8' style={{ minHeight: '300px' }}>
          {/* Container */}
          <FadeIn>
            <h1 className='text-7xl font-bold text-center cursor-pointer' onClick={handleClick}>
              Hello there!
            </h1>
          </FadeIn>
          {showH2 && (
            <FadeIn>
              <h2 className='text-5xl text-center text-pink-700 font-semibold'>I'm not an engineer :)</h2>
            </FadeIn>
          )}
          {showH3 && (
            <FadeIn>
              <h3 className='text-3xl text-center font-medium'>I'm an implementation Consultant</h3>
            </FadeIn>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
