import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Quickpick = () => {
  const [meal, setMeal] = useState(null)

  const fetchMeal = async () => {
    try {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      )
      setMeal(response.data.meals[0])
    } catch (error) {
      console.error('Failed to fetch meal', error)
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [])

  if (!meal) {
    return (
      <div className="mb-24 text-center text-amber-500 text-xs uppercase tracking-widest animate-pulse">
        Harvesting ingredients...
      </div>
    )
  }

  return (
    <div className="mb-24">
      <div className="savory-card rounded-[3.5rem] p-10 flex flex-col md:flex-row gap-12 items-center group cursor-pointer overflow-hidden">
        
        <div className="md:w-1/2">
          <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Recommended for you
          </span>

          <h2 className="outfit text-5xl font-bold tracking-tight mb-8 leading-tight italic">
            {meal.strMeal}
          </h2>

          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-500">
            <span className="bg-stone-800 px-3 py-1 rounded">
              Origin: {meal.strArea}
            </span>
            <span className="bg-stone-800 px-3 py-1 rounded">
              {meal.strCategory}
            </span>
          </div>
        </div>

        <div className="md:w-1/2 relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>

      </div>
    </div>
  )
}

export default Quickpick
