import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import recipeStore from "../stateManagement/recipeStore";

const Quickpick = () => {
  const navigate = useNavigate();
  const [meal, setMeal] = useState(null);

  const quickMeal = recipeStore((state) => state.quickMeal);

  const fetchMeal = async () => {
    try {
      const response = await quickMeal();
      console.log(response);
      setMeal(response.recipe);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMeal(null);
    fetchMeal();
  }, []);

  if (!meal) {
    return (
      <div className="mb-24 text-center text-amber-500 text-xs uppercase tracking-widest animate-pulse">
        Harvesting ingredients...
      </div>
    );
  }

  return (
    <div className="mb-24">
      <div
        onClick={() => {
          navigate(`/recipe/${meal.recipeNo}`);
        }}
        className="savory-card rounded-[3.5rem] p-10 flex flex-col md:flex-row gap-12 items-center group cursor-pointer overflow-hidden"
      >
        <div className="md:w-1/2">
          <span className="text-amber-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4 block">
            Recommended for you
          </span>

          <h2 className="outfit text-5xl font-bold tracking-tight mb-8 leading-tight italic">
            {meal.name}
          </h2>

          <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest text-stone-500">
            <span className="bg-stone-800 px-3 py-1 rounded">
              Origin: {meal.cuisine}
            </span>
            <span className="bg-stone-800 px-3 py-1 rounded">{meal.diet}</span>
          </div>
        </div>

        <div className="md:w-1/2 relative overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            src={meal.image}
            className="w-full h-80 object-cover group-hover:scale-110 transition duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Quickpick;
