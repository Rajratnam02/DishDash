import React from 'react'

const CategoryFoodCard = (props) => {
  return (
    <div  className="savory-card p-4 rounded-[3rem] group cursor-pointer">
        <img src={props.meal.strMealThumb} className="aspect-square rounded-[2.5rem] object-cover group-hover:scale-105 transition duration-700 mb-6" />
        <h3 className="text-xl font-bold px-4 pb-6 font-impact italic">{props.meal.strMeal}</h3>
    </div>
  )
}

export default CategoryFoodCard