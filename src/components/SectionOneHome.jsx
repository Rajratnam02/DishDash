import React from 'react'
import SearchTwo from './ui/SearchTwo'

const SectionOneHome = () => {
  return (
        <div className="h-[60vh] mt-[20px] rounded bg-[linear-gradient(to_bottom,rgba(30,55,69,0.5),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=80')] bg-center bg-cover flex items-center justify-center py-5 text-center">
          <div className='flex text-white flex-col justify-center items-center'>
              <h1 className='text-[2.5rem] mb-[10px] font-semibold'>Find Your Next Favorite Dish, Fast.</h1>
              <p className='block mb-[15px]'>Thousands of quick and easy recipes at your fingertips.</p>
              <SearchTwo use={"Find Recipe"} />
          </div>
      </div>
  )
}

export default SectionOneHome