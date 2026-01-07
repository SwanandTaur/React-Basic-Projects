import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-[100%] justify-around items-center p-3 absolute top-0'>
        <h1 className="head text-2xl">dezingo</h1>
        <div className="pages text-lg flex gap-5">
            <div className="page text-pink-400 cursor-pointer">Home</div>
            <div className="page cursor-pointer">About</div>
        </div>
    </div>
  )
}

export default Navbar