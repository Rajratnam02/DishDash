import React from 'react'

const SearchTwo = (props) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full max-w-md mx-auto">
      <div className="flex items-center w-full border pl-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-md overflow-hidden focus-within:border-orange-500 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="#6B7280" className="shrink-0">
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
        </svg>
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-full h-full outline-none text-gray-700 placeholder-gray-500 text-sm sm:text-base"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all font-semibold w-full sm:w-32 h-[46px] shrink-0 rounded-md text-sm text-white"
      >
        {props.use}
      </button>
    </div>
  )
}

export default SearchTwo