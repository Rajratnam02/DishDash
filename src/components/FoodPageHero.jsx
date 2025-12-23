import React from 'react'

const FoodPageHero = ({foodData}) => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image Container */}
      <div className="w-full max-w-sm lg:max-w-none aspect-[4/5] sm:aspect-square lg:h-[450px] border border-gray-100 rounded-3xl overflow-hidden shadow-lg">
        <img 
          className='h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105' 
          src={foodData.strMealThumb} 
          alt={foodData.strMeal} 
        />
      </div>

      {/* Info Box */}
      <div className='w-full max-w-sm lg:max-w-none px-6 py-6 bg-white border border-gray-100 shadow-sm rounded-2xl mt-6'>
        <div className='flex justify-between items-center border-b border-gray-100 py-3'>
          <p className='playfair-display-medium text-gray-500'>Cuisine</p>
          <p className='lora-medium text-gray-900 bg-orange-50 px-3 py-1 rounded-full text-sm font-semibold'>
            {foodData.strArea}
          </p>                                     
        </div>
        
        <div className='flex justify-between items-center border-b border-gray-100 py-3'>
          <p className='playfair-display-medium text-gray-500'>Category</p>
          <p className='lora-medium text-gray-900'>{foodData.strCategory}</p>                                     
        </div>
        
        {foodData.strTags && (
          <div className='flex justify-between items-start border-b border-gray-100 py-3'>
            <p className='playfair-display-medium text-gray-500'>Tags</p>
            <p className='lora-medium text-gray-900 text-right max-w-[150px] text-sm italic'>
              {foodData.strTags.split(',').join(', ')}
            </p>                                     
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodPageHero