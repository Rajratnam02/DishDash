import React from 'react'
import { useNavigate } from 'react-router-dom'

const FoodCard = (props) => {

  const navigate = useNavigate();

  const clickHandler = (e) => {
    e.preventDefault();
    navigate(`/food?foodID=${props.meal.idMeal}`)
  }



  return (
    <div class="flex w-[250px]  flex-wrap items-center mb-5 justify-center gap-4">
    <div class="bg-white w-full items-center flex flex-col rounded-2xl pb-4 hover:scale-110 transition-all duration-400 hover:shadow-[0px_0px_5px_5px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-500/30">
        <img class="w-64 h-52 object-cover object-top" src={props.meal.strMealThumb} alt="userImage2" />
        <div class="flex flex-col w-full items-center">
                  <p class="font-medium w-full truncate text-center mt-3">{props.meal.strMeal}</p>
                  <p class="text-gray-500 w-full text-center text-sm">{props.meal.strArea}</p>
            <button onClick={clickHandler} class="border cursor-pointer   text-sm bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 text-white font-medium border-gray-500/30 w-28 h-8 rounded-full mt-5">
                <p class="mb-1">View More</p>
            </button>
        </div>
    </div>


</div>
  )
}

export default FoodCard