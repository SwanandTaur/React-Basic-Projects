import React from 'react'

const Center = () => {
  return (
    <div className='flex gap-7 justify-center items-center'>
        <div className="left flex flex-col gap-5 text-right items-end">
            <div className="head text-4xl">
                 <h2>Designing</h2>
                 <h2>for the</h2>
            </div>
            <button className='p-0.8 bg-pink-400 rounded-full text-base w-[105px]'>Read More</button>
        </div>
        <div className="right flex flex-col text-9xl font-black leading-22">
            <span>FU</span>
            <span>TUR</span>
            <span className='rotate-35 mt-10 text-pink-400'>E</span>
        </div>
    </div>
  )
}

export default Center