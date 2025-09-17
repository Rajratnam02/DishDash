import React from 'react'

const FoodPageHero = ({foodData}) => {
  return (
      <div>
                          <div className="w-full max-w-[325px] h-[400px] sm:h-[350px] md:h-[400px] lg:h-[450px] border rounded-2xl overflow-hidden">
                              <img className='h-full w-full' src={foodData.strMealThumb} alt="" />
                          </div>
                          <div className='w-[325px] px-5 py-5 bg-[#F8F9FA]  rounded mt-5'>
                              <div className='flex justify-between border-b border-gray-400'>
                                  <p className='playfair-display-medium'>Cusine:</p>
                                  <p className='lora-medium mb-1'>{foodData.strArea}</p>                                  
                              </div>
                              
                              <div className='flex mt-3 justify-between border-b border-gray-400'>
                                  <p className='playfair-display-medium'>Category:</p>
                                  <p className='lora-medium mb-1'>{foodData.strCategory}</p>                                  
                              </div>
                              
                              <div className='flex mt-3 justify-between border-b  border-gray-400'>
                                  <p className='playfair-display-medium'>Tags:</p>
                                  <p className='lora-medium mb-1 '>{foodData.strTags}</p>                                  
                              </div>
                              
                          </div>
                      </div>
  )
}

export default FoodPageHero