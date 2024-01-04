/* eslint-disable react/no-unknown-property */

const ScoreBoard = () => {
  return (
    <>
    <h1 className="text-center text-4xl my-6">Bangladesh vs Australia first T20</h1>

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
    
    <div className='max-w-6xl flex flex-col items-center mt-8 border-2 p-4 mx-auto rounded-md'>
      <h1 className='text-3xl text-center font-semibold my-4'>Third umpire section</h1>
        <div className='flex justify-center gap-2'>
            <div className='flex flex-col'>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Run Increment</button>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Run Decrement</button>
            </div>
            <div className='flex flex-col'>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Wicket Increment</button>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Wicket Decrement</button>
            </div>
            <div className='flex flex-col'>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Over Increment</button>
            <button className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Over Decrement</button>
            </div>
        </div>
        <button className="w-72 inline-block px-8 py-4 font-bold text-white uppercase bg-red-500 rounded-md hover:bg-red-600 mt-2">Reset</button>
    </div>
    </>
  );
};

export default ScoreBoard;