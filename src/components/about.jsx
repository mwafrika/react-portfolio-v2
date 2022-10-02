import React from 'react';
import js from '/skills/js.svg';
const about = () => {
  return (
    <div className='bg-[#FFFFFF] row-start-3 row-end-4 col-span-full rounded-tr-[150px]'>
      <div className='flex flex-col items-start w-[447px] h-[392px] left-[142px] top-[3753px] gap-6 absolute'>
        <h2 className='text-[40px] font-bold leading-[52px] text-[#091E42]'>
          About <br /> Myself
        </h2>
        <p className='text-[#344563] text-[16px] leading-[24px] font-normal'>
          Hello I’m a software developer! I can help you build a product ,
          feature or website Look through some of my work and experience! If you
          like what you see and have a project you need coded, don’t hestiate to
          contact me.
        </p>
        <div className='flex flex-col gap-3 pt-4'>
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
        <button className='rounded-[8px] p-3 border border-[#6070FF] w-[162px] h-12 text-[#396DF2] font-medium text-[17px] leading-3'>
          Get My Resume
        </button>
      </div>
      <div className='w-[684px] h-[360px] absolute left-[614px] top-[3753px] flex flex-col'>
        <div className='flex justify-between p-6 w-full'>
          <h3 className='text-5 leading-6 text-[#344563] font-medium'>
            Languages
          </h3>
          <img
            src='/chevron/chevron2.svg'
            alt='chevron2'
            className='text-[#5E6C84]'
          />
        </div>
        <div className='flex items-center w-[414px] h-[144px] gap-3'>
          <div className='bg-[#F7F7F9] w-[122px] h-[120px] p-3 flex flex-col justify-around'>
            <img src={js} className='w-12 h-12' alt='js' />
            <p className='text-[15px] leading-5 tex-[#253858] font-medium'>
              JavaSript
            </p>
          </div>
          <div className='bg-[#F7F7F9] w-[122px] h-[120px] p-3 flex flex-col justify-around'>
            <img src='/skills/html.svg' className='w-12 h-12' alt='js' />
            <p className='text-[15px] leading-5 tex-[#253858] font-medium'>
              JavaSript
            </p>
          </div>
          <div className='bg-[#F7F7F9] w-[122px] h-[120px] p-3 flex flex-col justify-around'>
            <img src='/skills/css.svg' className='w-12 h-12' alt='js' />
            <p className='text-[15px] leading-5 tex-[#253858] font-medium'>
              JavaSript
            </p>
          </div>
        </div>
        <div className='flex justify-between p-6 w-full'>
          <h3 className='text-5 leading-6 text-[#344563] font-medium'>
            Frameworks
          </h3>
          <img
            src='/chevron/chevron2.svg'
            alt='chevron1'
            className='text-[#5E6C84]'
          />
        </div>
        <div className='h-[1px] w-[684px] bg-[#DFE1E6]'></div>
        <div className='flex justify-between p-6 w-full'>
          <h3 className='text-5 leading-6 text-[#344563] font-medium'>
            Skills
          </h3>
          <img
            src='/chevron/chevron2.svg'
            alt='chevron1'
            className='text-[#5E6C84]'
          />
        </div>
        <div className='h-[1px] w-[684px] bg-[#DFE1E6]'></div>
      </div>
    </div>
  );
};

export default about;
