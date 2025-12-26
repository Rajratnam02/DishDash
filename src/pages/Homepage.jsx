import React from 'react'
import Quickpick from '../components/Quickpick'
import Categories from '../components/Categories'

const Homepage = () => {
  return (
    <div className='pt-24 px-8 pb-40 h-full w-full max-w-7xl mx-auto'>
        <div className='mb-20'>
            <h1 className='outfit font-extrabold  uppercase text-7xl md:text-9xl tracking-tighter mb-4 italic leading-none'>Dish<span className='text-amber-500'>Dash</span></h1>
            <p className='text-stone-500 text-xs font-bold uppercase tracking-[0.6em] ml-2'>Flavor Intelligence • Est. 2025</p>
        </div>
        <Quickpick />
        <Categories />
    </div>
  )
}

export default Homepage