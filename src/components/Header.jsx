import React from 'react';

const Header = () => {
  return (
    <header className='row-start-1 row-end-2 col-span-full bg-[#FFFFFF] rounded-bl-[150px]'>
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
    </header>
  );
};

export default Header;
