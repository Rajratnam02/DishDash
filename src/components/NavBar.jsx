import React from 'react'
import { MdMenu } from 'react-icons/md'
import SearchBar from './ui/SearchBar'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();


  return (
      <div className=' mx-5 mr-5 px-5 py-3 flex justify-between mt-5 shadow-[0px_0px_5px_5px_rgba(82,87,94,0.2)] rounded-2xl items-center '>
          
          <div className='flex items-center h-10'>
              <p className=' text-3xl  lora-medium text-zinc-950'>Dish<span className='text-red-600'>Dash</span></p>
              <img className='h-full -mx-2 ' src="/src/assets/WhatsApp_Image_2025-09-14_at_22.39.23_5488428c-removebg-preview.png" alt="" />
          </div>

          {/* Mobile Menu */}

          <div className=' gap-2 text-lg lg:text-2xl  xl:gap-7 [@media(min-width:940px)]:flex hidden '>
              <p onClick={()=>{navigate("/")}} className='cursor-pointer playfair-display-light '>Home</p>
              <p className='cursor-pointer playfair-display-light '>Categories</p>
              <p className='cursor-pointer playfair-display-light '>About</p>
              <p className='cursor-pointer playfair-display-light '>Contact</p>
          </div>

          <SearchBar />
          

          <MdMenu className='[@media(min-width:940px)]:hidden text-4xl px-1 rounded-full  ' />

      </div>
  )
}

export default NavBar