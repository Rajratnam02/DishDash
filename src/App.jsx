import React from 'react'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import FoodPage from './pages/FoodPage'

const App = () => {
  return (
    <div className=''>
        <NavBar />
          
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/food" element={<FoodPage />} />
          </Routes>

        <Footer />
    </div>
  )
}

export default App