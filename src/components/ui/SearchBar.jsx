import React from 'react'

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center border pl-3 sm:pl-4 gap-2 bg-white border-gray-200 h-[42px] sm:h-[46px] rounded-full overflow-hidden w-full transition-all focus-within:ring-2 focus-within:ring-indigo-100 focus-within:border-indigo-400">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 30 30" 
          fill="#6B7280" 
          className="shrink-0"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
        </svg>
        
        <input 
          type="text" 
          placeholder="Search recipes..."
          className="w-full h-full outline-none text-xs sm:text-sm text-gray-600 placeholder-gray-400" 
        />
        
        <button 
          type="submit" 
          className="bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all px-4 sm:w-28 h-8 sm:h-9 rounded-full text-xs sm:text-sm font-medium text-white mr-1 shrink-0"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar