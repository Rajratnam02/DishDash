import React from 'react'

const IngredientDiv = (props) => {
  return (
    <div className='w-full py-3 border-b border-gray-100 flex justify-between items-center group hover:bg-orange-50/50 transition-colors px-2 sm:px-4'>
        <div className='flex items-center gap-3'>
            {/* Visual indicator/bullet */}
            <div className='w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-125 transition-transform'></div>
            <p className='text-base sm:text-lg font-medium text-gray-700 capitalize'>
                {props.product}
            </p>
        </div>
        <p className='text-sm sm:text-base font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-lg'>
            {props.quantity}
        </p>
    </div>
  )
}

export default IngredientDiv