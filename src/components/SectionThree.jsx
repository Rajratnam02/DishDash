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
    <div className="flex mt-5 py-5 flex-col items-center px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Responsive Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lora-normal text-center mb-6">
        Our Quick Picks for You
      </h1>

      {/* Loading State */}
      {loading && (
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl cookie-light text-center">
          Loading...
        </h1>
      )}

      {/* Responsive Food Cards */}
      <div className="flex flex-wrap gap-6 justify-center mt-6 w-full">
        {foodDetails.map((meal) => (
          <FoodCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default SectionThree;
