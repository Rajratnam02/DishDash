import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodCard = (props) => {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/food?foodID=${props.meal.idMeal}`)
  }

  return (
    <div className="w-full group">
      <div className="bg-white flex flex-col items-center rounded-2xl pb-6 transition-all duration-300 hover:shadow-2xl overflow-hidden border border-gray-100 h-full">
        <div className="relative w-full h-48 sm:h-56 overflow-hidden">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            src={props.meal.strMealThumb} 
            alt={props.meal.strMeal} 
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
             <p className="text-xs font-bold text-gray-700 uppercase tracking-wider">{props.meal.strArea}</p>
          </div>
        </div>

        <div className="flex flex-col w-full items-center px-4">
          <h3 className="font-bold text-lg text-gray-800 w-full truncate text-center mt-4">
            {props.meal.strMeal}
          </h3>
          
          <p className="text-gray-500 text-sm mt-1 italic">
            Category: {props.meal.strCategory}
          </p>

          <button 
            onClick={clickHandler} 
            className="mt-6 w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-colors duration-200 shadow-md hover:shadow-orange-200"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard