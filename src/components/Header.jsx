import React from 'react';
import { motion, useScroll } from 'framer-motion';

const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <header className='row-start-1 row-end-2 col-span-full bg-[#FFFFFF] rounded-bl-[150px]'>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className='fixed top-0 left-0 right-0 h-3 bg-red-600'
      />
      <nav className='h-[72px] w-full flex items-center'>
        <div className='flex w-4/5 justify-between mx-auto'>
          <h1 className='text-[18px] text-[#6070FF]'>Logo</h1>
          <ul className='flex gap-x-2 text-[15px] text-[#344563]'>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
      <div className='h-[846px] relative flex items-center'>
        <img
          src='/Rectangle6.svg'
          className='absolute left-[34.6px] top-[218.92px]'
        />
        <img
          src='/Ellipse11.svg'
          className='absolute left-[139.2px] top-[260.68px]'
        />
        <img
          src='/Rectangle4.svg'
          className='absolute left-[1146px] top-[221px] transform rotate-[-30deg]'
        />
        <img
          src='/Ellipse3.svg'
          className='absolute left-[1208px] top-[192px]'
        />
        <div className='flex flex-col w-2/3 mx-auto h-[268px] justify-between'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[48px] leading-[60px] text-[#172B4D] font-bold'>
              I’m Mwafrika <br /> Glad to see you!
            </h1>
            <p className='text-[#344563] text-[20px] leading-[28px] font-normal'>
              I’m a software developer! I can help you build a product , feature
              or website Look through some of my work and experience! If you
              like what you see and have a project you need coded, don’t
              hestiate to contact me.
            </p>
          </div>
          <div className='flex flex-col gap-3 py-4'>
            <p className='text-[#7F8CFF] leading-6 text-base'>LET US CONNECT</p>
            <ul className='flex items-center gap-5'>
              <li>
                <img src='/social/twitter.svg' alt='medium' />
              </li>
              <li>
                <img src='/social/Linkedin.svg' alt='Linkedin' />
              </li>
              <li>
                <img src='/social/medium.svg' alt='medium' />
              </li>
              <li>
                <img src='/social/github.svg' alt='github' />
              </li>
              <li>
                <img src='/social/angellist.svg' alt='medium' />
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* test  */}
      <button
        type='button'
        className='inline-flex relative items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
          <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
        </svg>
        <span className='sr-only'>Notifications</span>
        <div className='inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900'>
          20
        </div>
      </button>
      {/* test */}
    </header>
  );
};

export default Header;
