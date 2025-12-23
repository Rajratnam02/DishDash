import React, { useEffect, useState } from "react";
import FoodCard from "./ui/FoodCard";
import axios from "axios";

const SectionThree = () => {
  const [foodDetails, setFoodDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        setFoodDetails(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetching Food", error);
        setLoading(false);
      }
    };

    fetchFood();
  }, []);

  return (
    <div className="w-full mt-10 py-10 flex flex-col items-center px-4 sm:px-6 lg:px-12 bg-gray-50/50">
      <div className="max-w-7xl w-full flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold lora-normal text-center mb-4 text-gray-900">
          Our Quick Pick for You
        </h1>
        <div className="w-24 h-1 bg-orange-500 rounded-full mb-10"></div>

        {loading ? (
          <div className="flex flex-col items-center gap-4 py-20">
            <div className="w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            <p className="text-xl cookie-light text-gray-500">Preparing something delicious...</p>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            {foodDetails && foodDetails.map((meal) => (
              <div key={meal.idMeal} className="w-full max-w-sm sm:max-w-md">
                <FoodCard meal={meal} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionThree;