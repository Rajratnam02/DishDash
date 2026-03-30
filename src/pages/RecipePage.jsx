import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import recipeStore from "../stateManagement/recipeStore";
import VideoComponent from "../components/VideoComponent";
import IngredientCard from "../components/IngredientCard";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

const RecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [meal, setMeal] = useState(null);

  const getRecipe = recipeStore((state) => state.getRecipe);

  const fetchRecipe = async () => {
    try {
      const response = await getRecipe(id);

      if (response?.recipeDetail) {
        setMeal(response.recipeDetail);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setMeal(null);
    fetchRecipe();
  }, [id]);

  if (!meal) {
    return (
      <div className="pt-32 min-h-screen px-8 pb-40 max-w-6xl mx-auto">
        <div className="text-center py-40 animate-pulse text-amber-500 text-xs font-bold tracking-widest uppercase">
          Harvesting Ingredients...
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 min-h-screen px-8 pb-40 max-w-6xl mx-auto">
      <div
        onClick={() =>
          navigate(`/category/${encodeURIComponent(meal.cuisine)}`)
        }
        className="cursor-pointer text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-10"
      >
        ← Return to Collection
      </div>

      <div className="grid lg:grid-cols-2 gap-20 mb-24 items-start">
        <img
          src={meal.image || "/fallback.jpg"}
          alt={meal.name}
          className="rounded-[4rem] h-150 w-full object-cover shadow-2xl border border-white/5"
        />

        <div>
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">
            {meal.category}
          </span>

          <h1 className="outfit text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight italic">
            {meal.name}
          </h1>

          <div className="grid grid-cols-1 h-75 pr-4">
            <PerfectScrollbar options={{ suppressScrollX: true }}>
              {meal.ingredients?.map((ing, index) => (
                <IngredientCard key={index} ing={ing} />
              ))}
            </PerfectScrollbar>
          </div>
        </div>
      </div>

      <div className="savory-card p-12 md:p-20 rounded-[4rem]">
        <h3 className="outfit text-4xl font-bold mb-12 italic">
          The <span className="text-amber-500">Method.</span>
        </h3>

        <ul className="text-stone-400 leading-relaxed  text-lg space-y-4">
          {meal.instructions?.map((step, index) => (
            <li className="">
              {index + 1}. {step}
            </li>
          ))}
        </ul>
      </div>

      {meal.youtube && <VideoComponent url={meal.youtube} />}
    </div>
  );
};

export default RecipePage;
