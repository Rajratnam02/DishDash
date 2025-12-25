import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import IngredientCard from "../components/IngredientCard";

const RecipePage = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      const fetchedMeal = response.data.meals[0];
      setMeal(fetchedMeal);

      const list = [];
      for (let i = 1; i <= 20; i++) {
        const name = fetchedMeal[`strIngredient${i}`];
        const measure = fetchedMeal[`strMeasure${i}`];
        if (!name) break;
        list.push({ name, measure });
      }

      setIngredients(list);
    };

    setMeal(null);
    setIngredients([]);
    fetchMeal();
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
      <button className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-10 hover:underline">
        ← Return to Collection
      </button>

      <div className="grid lg:grid-cols-2 gap-20 mb-24 items-start">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-[4rem] h-[600px] w-full object-cover shadow-2xl border border-white/5"
        />

        <div>
          <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.5em] mb-4 block">
            {meal.strCategory}
          </span>

          <h1 className="outfit text-7xl font-bold tracking-tighter mb-8 leading-tight italic">
            {meal.strMeal}
          </h1>

          <div className="grid grid-cols-1 h-[300px]  pr-4">
            <PerfectScrollbar options={{ suppressScrollX: true }}>
              {ingredients.map((ing, index) => (
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
        <p className="text-stone-400 leading-relaxed text-lg whitespace-pre-line">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default RecipePage;
