import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Warmglow from './components/Warmglow'

const App = () => {
  return (
    <div className='h-screen w-screen bg-stone-950'>
      <Warmglow />
      <Navbar />
      
    </div>
  )
}

export default App