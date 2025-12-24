import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Warmglow from './components/Warmglow'

const App = () => {
  return (
    <div className='h-screen w-screen text-white bg-stone-950'>
      <Warmglow />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App