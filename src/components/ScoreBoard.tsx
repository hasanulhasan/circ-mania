import React from 'react';

const ScoreBoard = () => {
  return (
    <div className="max-w-6xl bg-blue-300 px-4 mx-auto border rounded-lg" x-data="{open:false}">
        <nav className="flex justify-between py-4">
            <div className='flex'>
              <p className='text-3xl font-semibold leading-none text-black'>BAN</p>
              <p className='text-3xl font-semibold leading-none text-black ml-6'> 124/</p>
              <p className='text-3xl font-semibold leading-none text-black'>7</p>
            </div>
            <div className='flex'>
              <p className='text-3xl font-semibold leading-none text-black ml-6'>Overs: </p>
              <p className='text-3xl font-semibold leading-none text-black ml-1'>7.4</p>
            </div>
        </nav>
    </div>
  );
};

export default ScoreBoard;