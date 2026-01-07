import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import Center from './components/Center'

const App = () => {
  return (
    <div className='text-3xl font-bold bg-[url(./assets/img/bg.jpg)] h-screen w-screen bg-local bg-no-repeat bg-cover bg-center text-white font-mono flex items-center justify-center'>
      <Navbar />
      <Center />
    </div>
  )
}

export default App