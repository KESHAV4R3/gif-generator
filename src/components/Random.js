import React from 'react'
import { Atom } from 'react-loading-indicators'
import useGif from '../hooks/useGif';

const Random = () => {

  const { gif, loading, fetchGif } = useGif();

  function clickHandler() { fetchGif() }

  return (
    <div className='w-[90%] min-w-[300px] max-w-[700px] h-[250px] s2:h-[440px] overflow-hidden flex flex-col items-center gap-[10px] p-[20px] bg-[#143a70] m-auto rounded-lg'>
      <div className='overflow-hidden w-full h-[200px] s2:h-[350px] object-contain flex justify-center items-center'>
        {loading ? <Atom color="#ffffff" size="medium" text="" textColor="#2c69e8" /> : <img src={gif} />}
      </div>
      <button className='text-white bg-red-600 w-[70%] h-[30px] s2:h-[50px] rounded-lg' onClick={clickHandler}>generate</button>
    </div>
  )
}

export default Random
