import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed bottom-10 z-100 left-1/2 -translate-x-1/2'>
        <div className='bg-stone-900/80 backdrop-blur-2xl border border-white/5 rounded-full px-4 py-2 flex items-center gap-2 shadow-2xl'>
            <button className='bg-amber-500 text-stone-950 p-3 rounded-full hover:scale-110 transition shadow-lg shadow-amber-500/20'>
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
            </button>
            <p className='text-stone-500 px-6 py-2 text-[10px] font-black uppercase tracking-[0.4em]'>Home</p>
        </div>
    </div>
  )
}

export default Navbar