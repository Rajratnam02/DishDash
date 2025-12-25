import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoryFoodCard from "../components/CategoryFoodCard";

const CategoryFoodPage = () => {
    const { id } = useParams();
    const [foods, setFoods] = useState(null);
    const navigate = useNavigate()
    
    const fetchFoods = async () => {
        try {
            const response = await axios.get(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
            );
            setFoods(response.data.meals);
        } catch (error) {
            console.error("Failed to fetch foods", error);
        }
    };

    useEffect(() => {
        setFoods(null); 
        fetchFoods();
    }, [id]);

    if (!foods) {
        return (
            <div className="min-h-screen bg-stone-950 flex items-center justify-center text-stone-400">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-stone-950 min-h-screen pt-32 px-8 pb-40 max-w-7xl mx-auto">
            <div onClick={()=>{navigate("/")}} className="text-amber-500 z-10 cursor-pointer font-bold text-[10px] uppercase tracking-widest mb-6 flex items-center gap-2">
                ← Back to Kitchen
            </div>

            <h2 className="outfit font-extrabold uppercase text-6xl md:text-8xl tracking-tighter mb-16 italic">
                {id}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {foods.map((meal) => (
                    <CategoryFoodCard key={meal.idMeal} meal={meal} />
                ))}
            </div>
        </div>
    );
};

export default CategoryFoodPage;
