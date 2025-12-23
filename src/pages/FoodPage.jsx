import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodPageHero from '../components/FoodPageHero'
import FoodPageMain from '../components/FoodPageMain'

const FoodPage = () => {
    const [searchParams] = useSearchParams()
    const foodId = searchParams.get("foodID")
    const [foodData, setFoodData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFoodById = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
                setFoodData(response.data.meals[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error Fetching Data", error);
                setLoading(false);
            }
        }

        if (foodId) fetchFoodById();
    }, [foodId])

  return (
      <div className='min-h-screen px-4 sm:px-6 lg:px-12 py-6'>
          {loading ? (
              <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              </div>
          ) : foodData && (
              <div className='max-w-7xl mx-auto'>
                  {/* Breadcrumbs */}
                  <nav className='flex justify-center mb-4'>
                      <p className='text-xs sm:text-sm md:text-base playfair-display-light text-gray-500 text-center uppercase tracking-wide'>
                          Home <span className="mx-2 text-orange-500">/</span> {foodData.strCategory} <span className="mx-2 text-orange-500">/</span> {foodData.strMeal}
                      </p>
                  </nav>

                  {/* Title */}
                  <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl playfair-display-semibold text-center mb-10 text-gray-900 leading-tight'>
                      {foodData.strMeal}
                  </h1>

                  {/* Layout Container */}
                  <div className='flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-16'>
                        <div className="w-full lg:w-1/3 sticky lg:top-10">
                            <FoodPageHero foodData={foodData} />
                        </div>
                     
                        <div className="w-full lg:w-2/3">
                            <FoodPageMain foodData={foodData} />
                        </div>
                  </div>
              </div>
          )}
    </div>
  )
}

export default FoodPage