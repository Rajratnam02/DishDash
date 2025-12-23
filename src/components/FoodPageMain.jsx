import React from 'react'
import IngredientDiv from './IngredientDiv';

const FoodPageMain = ({ foodData }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (foodData[`strIngredient${i}`] && foodData[`strIngredient${i}`].trim() !== "") {
      ingredients.push({
        product: foodData[`strIngredient${i}`],
        quantity: foodData[`strMeasure${i}`]
      });
    }
  }

  return (
    <div className='flex-1 flex flex-col w-full'>
      <section>
        <h3 className='text-xl sm:text-2xl font-bold border-orange-500 border-b-4 w-fit pr-4 mb-6'>
          Ingredients
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2'>
          {ingredients.map((ingredient, index) => (
            <IngredientDiv 
              key={index} 
              product={ingredient.product} 
              quantity={ingredient.quantity} 
            />
          ))}
        </div>
      </section>

      <section className='mt-10 sm:mt-12'>
        <h3 className='text-xl sm:text-2xl font-bold border-orange-500 border-b-4 w-fit pr-4 mb-6'>
          Instructions
        </h3>
        <div className='bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm'>
          <p className='text-gray-700 leading-relaxed whitespace-pre-line text-sm sm:text-base'>
            {foodData.strInstructions}
          </p>
        </div>
      </section>
      
      {foodData.strYoutube && (
        <section className='mt-10 sm:mt-12'>
          <h3 className='text-xl sm:text-2xl font-bold border-orange-500 border-b-4 w-fit pr-4 mb-6'>
            Video Tutorial
          </h3>
          <div className='aspect-video w-full rounded-2xl overflow-hidden shadow-lg'>
            <iframe
              className='w-full h-full'
              src={foodData.strYoutube.replace("watch?v=", "embed/")}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}
    </div>
  )
}

export default FoodPageMain