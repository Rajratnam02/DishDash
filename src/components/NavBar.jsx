import React, { useState } from 'react'
import { MdMenu, MdClose } from 'react-icons/md'
import SearchBar from './ui/SearchBar'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="relative mx-4 sm:mx-6 lg:mx-10 mt-5">
            <div className='px-5 py-3 flex justify-between items-center shadow-lg rounded-2xl bg-white border border-gray-100'>
                
                <div onClick={() => navigate("/")} className='flex items-center cursor-pointer h-10 shrink-0'>
                    <p className='text-2xl sm:text-3xl lora-medium text-zinc-950'>
                        Dish<span className='text-red-600'>Dash</span>
                    </p>
                    <img className='h-8 sm:h-10 -mx-2' src="/src/assets/logo.png" alt="Logo" />
                </div>

                <div className='hidden lg:flex items-center gap-6 xl:gap-10'>
                    {navLinks.map((link) => (
                        <p 
                            key={link.name}
                            onClick={() => navigate(link.path)} 
                            className='cursor-pointer playfair-display-light text-lg hover:text-red-600 transition-colors'
                        >
                            {link.name}
                        </p>
                    ))}
                </div>

                <div className="hidden md:block flex-1 max-w-xs mx-4">
                    <SearchBar />
                </div>

                <div className='flex items-center gap-3'>
                    <div className="md:hidden">
                         <SearchBar />
                    </div>
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='lg:hidden text-3xl p-1 hover:bg-gray-100 rounded-full transition-colors'
                    >
                        {isMenuOpen ? <MdClose /> : <MdMenu />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className='absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-2xl p-5 flex flex-col gap-4 lg:hidden z-50 border border-gray-100 animate-in slide-in-from-top-2'>
                    {navLinks.map((link) => (
                        <p 
                            key={link.name}
                            onClick={() => {
                                navigate(link.path);
                                setIsMenuOpen(false);
                            }} 
                            className='cursor-pointer text-xl border-b border-gray-50 pb-2 hover:text-red-600'
                        >
                            {link.name}
                        </p>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default NavBar