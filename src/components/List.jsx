import React from 'react';
import { motion, useScroll } from 'framer-motion';

const List = () => {
  return (
    <div className='flex flex-col justify-center gap-y-[142px] col-span-full row-start-2 row-end-3'>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
        className='flex p-6 h-[496px] w-[80%] mx-auto rounded-3xl bg-white'
      >
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <motion.img
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            src='/list/Snapshoot.svg'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-1/2 rounded-lg flex flex-col pl-10'>
          <h2 className='text-[40px] text-[#091E42] font-bold leading-[52px] mb-5'>
            TONIC
          </h2>
          <div className='flex gap-x-2 items-center mb-8'>
            <p className='text-[#344563] text-lg'>CANOPY</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>Back End Dev</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>2015</p>
          </div>
          <div>
            <p className='leading-6 pb-7 text-[#344563] text-base font-normal'>
              A daily selection of privately personalized reads; no accounts or
              sign-ups required.
            </p>
          </div>
          <div className='flex gap-x-2 items-center text-[#6070FF] mb-14'>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              html
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              css
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              JavaScript
            </p>
          </div>
          <button className='w-[124px] h-12 border border-[#6070FF] text-[#396DF2] text-[17px] font-medium rounded-lg'>
            See Project
          </button>
        </div>
      </motion.div>

      {/* test  */}

      {/* test */}

      <div className='flex p-6 h-[496px] w-[80%] mx-auto rounded-3xl bg-white'>
        <div className='w-1/2 rounded-lg flex flex-col pl-10'>
          <h2 className='text-[40px] text-[#091E42] font-bold leading-[52px] mb-5'>
            Multi-Post Stories
          </h2>
          <div className='flex gap-x-2 items-center mb-8'>
            <p className='text-[#344563] text-lg'>FACEBOOK</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>Full Stack Dev</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>2015</p>
          </div>
          <div>
            <p className='leading-6 pb-7 text-[#344563] text-base font-normal'>
              Experimental content creation feature that allows users to add to
              an existing story over the course of a day without spamming their
              friends.
            </p>
          </div>
          <div className='flex gap-x-2 items-center text-[#6070FF] mb-14'>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              html
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              Ruby on rails
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              css
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              javaScript
            </p>
          </div>
          <button className='w-[124px] h-12 border border-[#6070FF] text-[#396DF2] text-[17px] font-medium rounded-lg'>
            See Project
          </button>
        </div>
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <img
            src='/list/Snapshoot1.svg'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
      <div className='flex p-6 h-[496px] w-[80%] mx-auto rounded-3xl bg-white'>
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <img
            src='/list/Snapshoot2.svg'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='w-1/2 rounded-lg flex flex-col pl-10'>
          <h2 className='text-[40px] text-[#091E42] font-bold leading-[52px] mb-5'>
            Facebook 360
          </h2>
          <div className='flex gap-x-2 items-center mb-8'>
            <p className='text-[#344563] text-lg'>FACEBOOK</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>Full Stack Dev</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>2015</p>
          </div>
          <div>
            <p className='leading-6 pb-7 text-[#344563] text-base font-normal'>
              Exploring the future of media in Facebook's first Virtual Reality
              app; a place to discover and enjoy 360 photos and videos on Gear
              VR.
            </p>
          </div>
          <div className='flex gap-x-2 items-center text-[#6070FF] mb-14'>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              html
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              Ruby on rails
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              css
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              javaScript
            </p>
          </div>
          <button className='w-[124px] h-12 border border-[#6070FF] text-[#396DF2] text-[17px] font-medium rounded-lg'>
            See Project
          </button>
        </div>
      </div>
      <div className='flex p-6 h-[496px] w-[80%] mx-auto rounded-3xl bg-white'>
        <div className='w-1/2 rounded-lg flex flex-col pl-10'>
          <h2 className='text-[40px] text-[#091E42] font-bold leading-[52px] mb-5'>
            Uber Navigation
          </h2>
          <div className='flex gap-x-2 items-center mb-8'>
            <p className='text-[#344563] text-lg'>Uber</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>Lead Developer</p>
            <div className='h-3 w-3 bg-slate-300 rounded-full'></div>
            <p className='text-[#344563] text-lg'>2018</p>
          </div>
          <div>
            <p className='leading-6 pb-7 text-[#344563] text-base font-normal'>
              A smart assistant to make driving more safe, efficient, and fun by
              unlocking your most expensive computer: your car.
            </p>
          </div>
          <div className='flex gap-x-2 items-center text-[#6070FF] mb-14'>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              html
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              Ruby on rails
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              css
            </p>
            <p className='text-[#6070FF] text-lg bg-[#EBEBFF] rounded-lg py-1 px-3'>
              javaScript
            </p>
          </div>
          <button className='w-[124px] h-12 border border-[#6070FF] text-[#396DF2] text-[17px] font-medium rounded-lg'>
            See Project
          </button>
        </div>
        <div className='w-1/2 rounded-lg overflow-hidden'>
          <img
            src='/list/Snapshoot3.svg'
            className='object-cover w-full h-full'
          />
        </div>
      </div>
    </div>
  );
};

export default List;
