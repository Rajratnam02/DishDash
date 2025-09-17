import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodPageHero from '../components/FoodPageHero'
import FoodPageMain from '../components/FoodPageMain'

const FoodPage = () => {
    const [searchParams] = useSearchParams()
    const foodId = searchParams.get("foodID")
    const [foodData, setFoodData] = useState(null);
    useEffect(() => {
        const fetchFoodById = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`);
                await setFoodData(response.data.meals[0]);
            } catch (error) {
                console.error("Error Fetching Data", error);
            }
        }

        fetchFoodById();
    },[])


  return (
      <div className='min-h-screen px-5'>
          {foodData && (
              <div className='mt-5'>
                  <h1 className='text-[3rem] playfair-display-semibold text-center'>{foodData.strMeal}</h1>
                  <p className='text-lg playfair-display-light text-center mt-5 '>Home &gt; {foodData.strCategory} &lt; {foodData.strMeal} </p>

                  <div className='flex flex-wrap justify-center px-50 gap-7 py-10 min-h-screen '>
                        <FoodPageHero foodData={foodData} />
                     
                     
                        <FoodPageMain foodData={foodData} />


                  </div>

              </div>
          )}
    </div>
  )
}

export default FoodPage