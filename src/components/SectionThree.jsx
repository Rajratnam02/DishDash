import React, { useEffect, useState } from 'react'
import FoodCard from './ui/FoodCard'
import axios from 'axios';

const SectionThree = () => {
  const [foodDetails, setFoodDetails] = useState([]);
      const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
        setFoodDetails(response.data.meals); // meals is an array
        console.log(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetching Food", error);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="flex mt-[20px] py-5 flex-col items-center">
      <h1 className="text-[3.5rem] lora-normal text-center">Our Quick Picks for you</h1>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {loading && (<h1 className='text-[3rem] cookie-light text-center '>Loading...</h1>)}

        {foodDetails.map((meal) => (
          <FoodCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  )
}

export default SectionThree;
