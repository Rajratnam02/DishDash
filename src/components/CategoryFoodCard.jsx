import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryFoodCard = ({ meal }) => {
  const navigate = useNavigate();

  if (!meal) return null;

  return (
    <div
      onClick={() => navigate(`/recipe/${meal.recipeNo}`)}
      className="savory-card p-4 rounded-4xl group cursor-pointer hover:shadow-xl transition duration-300 bg-white"
    >
      <div className="w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-3xl">
        <img
          src={meal.image}
          alt={meal.name}
          className="w-full h-full object-cover 
               group-hover:scale-110 transition duration-500"
        />
      </div>

      <h3 className="text-lg md:text-xl font-semibold mt-4 px-2 pb-2 outfit italic line-clamp-2">
        {meal.name}
      </h3>
    </div>
  );
};

export default CategoryFoodCard;
