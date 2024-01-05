/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/no-unknown-property */

import { useGetInningsQuery, useUpdateInningsMutation } from "../redux/apiSlice";

const ScoreBoard = () => {

  const {data} = useGetInningsQuery();
  const [updateInnings] = useUpdateInningsMutation();
  const innings = data?.data

  const handleRunUpdate = async (data) => {
    try {
      if(data === "increment"){
        const run = innings?.run + 1
        await updateInnings({ run })
      }
      else{
        const run = innings?.run - 1
        await updateInnings({ run })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleWicketUpdate = async (data) => {
    try {
      if(data === "increment"){
        const wicket = innings?.wicket + 1
        await updateInnings({ wicket })
      }
      else{
        const wicket = innings?.wicket - 1
        await updateInnings({ wicket })
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleOverUpdate = async (data) => {
    try {
      if(data === "increment"){
        if( ((innings?.over).toFixed(1) - Math.trunc((innings?.over).toFixed(1))) >= 0.5){
          const over = innings?.over + 0.5
          await updateInnings({ over })
        }else{
          const over = innings?.over + 0.1
          await updateInnings({ over })
        }
      }
      else{
        if( ((innings?.over).toFixed(1) - Math.trunc((innings?.over).toFixed(1))) == 0){
          const over = innings?.over - 0.5
          await updateInnings({ over })
        }else{
          const over = innings?.over - 0.1
          await updateInnings({ over })
        }
      }

    } catch (error) {
      console.log(error)
    }
  }
  const handleRest = async () => {
    try {
      const run = 0;
      const wicket = 0;
      const over = 0
      await updateInnings({ run, wicket, over })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <h1 className="text-center text-4xl my-6">Bangladesh vs Australia first T20</h1>

    <div className="max-w-6xl bg-blue-300 px-4 mx-auto border rounded-lg">
        <nav className="flex justify-between py-4">
            <div className='flex'>
              <p className='text-3xl font-semibold leading-none text-black'>BAN</p>
              <p className='text-3xl font-semibold leading-none text-black ml-6'> {innings?.run}/</p>
              <p className='text-3xl font-semibold leading-none text-black'>{innings?.wicket}</p>
            </div>
            <div className='flex'>
              <p className='text-3xl font-semibold leading-none text-black ml-6'>Overs: </p>
              <p className='text-3xl font-semibold leading-none text-black ml-1'>{(innings?.over.toFixed(1))}</p>
            </div>
        </nav>
    </div>
    
    <div className='max-w-6xl flex flex-col items-center mt-8 border-2 p-4 mx-auto rounded-md'>
      <h1 className='text-3xl text-center font-semibold my-4'>Third umpire section</h1>
        <div className='flex justify-center gap-2'>
            <div className='flex flex-col'>
            <button onClick={()=> handleRunUpdate('increment')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Run Increment</button>
            <button onClick={()=> handleRunUpdate('decrement')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Run Decrement</button>
            </div>
            <div className='flex flex-col'>
            <button onClick={()=> handleWicketUpdate('increment')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Wicket Increment</button>
            <button onClick={()=> handleWicketUpdate('decrement')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Wicket Decrement</button>
            </div>
            <div className='flex flex-col'>
            <button onClick={()=> handleOverUpdate('increment')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600">Over Increment</button>
            <button onClick={()=> handleOverUpdate('decrement')} className="inline-block px-8 py-4 font-bold text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 mt-2">Over Decrement</button>
            </div>
        </div>
        <button onClick={handleRest} className="w-72 inline-block px-8 py-4 font-bold text-red uppercase border-2 border-red-600 rounded-md hover:bg-red-500 mt-4">Reset</button>
    </div>
    </>
  );
};

export default ScoreBoard;