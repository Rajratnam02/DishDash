import React, { useEffect } from 'react'
import IngredientDiv from './IngredientDiv';

const FoodPageMain = ({foodData}) => {

    const ingredients = [];
    for(let i=0;i<20;i++){
        if(foodData[`strIngredient${i}`]){
            let ingredient = {
                product: foodData[`strIngredient${i}`],
                quantity: foodData[`strMeasure${i}`]
            }
            ingredients.push(ingredient)
        }
    }

  return (
    <div className='flex-1 flex flex-col'>
        <h3 className='text-[1.5rem] font-bold border-rose-700  border-b-4 '>Ingredients</h3>
            {
                ingredients.map((ingredient, index) => (
                    <IngredientDiv product={ingredient.product} quantity={ingredient.quantity} />        
                ))
            }
        <div className='mt-7'>
            <h3 className='text-[1.5rem] font-bold border-rose-700  border-b-4 '>Instructions</h3>
            <p>{foodData.strInstructions}</p>
        </div>
        
    </div>
  )
}

export default FoodPageMain