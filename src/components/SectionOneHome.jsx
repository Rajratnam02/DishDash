import React from 'react'
import SearchTwo from './ui/SearchTwo'

const SectionOneHome = () => {
  return (
    <div className="w-full min-h-[50vh] md:h-[60vh] mt-5 rounded bg-[linear-gradient(to_bottom,rgba(30,55,69,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80')] bg-center bg-cover flex items-center justify-center px-4 py-10 text-center">
      <div className="flex text-white flex-col justify-center items-center max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-semibold leading-tight">
          Find Your Next Favorite Dish, Fast.
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-lg opacity-90">
          Thousands of quick and easy recipes at your fingertips.
        </p>
        <div className="w-full max-w-md mx-auto">
          <SearchTwo use={"Find Recipe"} />
        </div>
      </div>
    </div>
  )
}

export default SectionOneHome