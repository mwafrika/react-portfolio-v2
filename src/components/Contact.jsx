import React from 'react';

const Contact = () => {
  return (
    <>
      <div className='bg-[#6070FF] mt-[-210px] col-span-full row-start-4 row-end-5 rounded-tl-[150px] flex justify-center items-center '>
        <div className='flex flex-col justify-between text-center gap-y-3'>
          <h1 className='text-[40px] leading-[52px] text-[#FFFFFF] font-bold'>
            Contact me
          </h1>
          <p className='leading-[28px] text-[#EBEBFF] font-normal w-[569px]'>
            If you have an application you are interested in developing, a
            feature that you need built or a project that needs coding. I’d love
            to help with it
          </p>
          <div className=''>
            <form className='flex flex-col gap-y-7'>
              <input
                type='text'
                placeholder='Name'
                className='border-[1px] border-[#CFD8DC] rounded-[8px]'
              />
              <input
                type='email'
                placeholder='Email'
                className='border-[1px] border-[#CFD8DC] rounded-[8px]'
              />
              <textarea
                name=''
                id=''
                cols='30'
                rows='10'
                placeholder='Message'
                className='border-[1px] border-[#CFD8DC] rounded-[8px]'
              ></textarea>
              <button className='py-3 px-4 text-[#6070FF] font-medium bg-[#FFFFFF] w-[142px] h-[48px] mx-auto rounded-lg'>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* // test  */}
    </>
  );
};

export default Contact;
