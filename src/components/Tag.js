import React, { useState } from 'react'
import useGif from '../hooks/useGif';
import { Atom } from 'react-loading-indicators'
const Random = () => {

  const [inputData, setInputData] = useState('tom and jerry');


  function clickHandler() { fetchGif() }

  function inputHandler(event) {
    setInputData(event.target.value);
  }
  const { gif, loading, fetchGif } = useGif(inputData);

  return (
    <div className='w-[90%] min-w-[300px] max-w-[700px] h-[350px] s2:h-[470px] overflow-hidden flex flex-col items-center gap-[10px] p-[20px] bg-[#143a70] m-auto rounded-lg'>
      <h1 className='text-center text-white s2:text-[20px]'>random gif {inputData}</h1>
      <div className='overflow-hidden w-full h-[200px] s2:h-[350px] object-contain flex justify-center items-center'>
        {loading ? <Atom color="#ffffff" size="medium" text="" textColor="#2c69e8" /> : <img src={gif} />}
      </div>

      <input type='text'
        value={inputData}
        placeholder='search here ... '
        onChange={inputHandler}
        className='px-2 rounded-lg w-[60%] min-w-[250px] mb-2 s2:h-[50px]' />

      <button className='text-white bg-red-600 w-[70%] h-[30px] s2:h-[50px] rounded-lg' onClick={clickHandler}>generate</button>
    </div>
  )
}

export default Random
