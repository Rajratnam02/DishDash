import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodCard from '../components/ui/FoodCard';

const CategoryPage = () => {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("categoryName");
    const [foodDetails, setFoodDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                setFoodDetails(response.data.meals || []);
                setLoading(false);
            } catch (error) {
                console.error("Error Fetching Data", error);
                setLoading(false);
            }
        } 
        fetchFood()
    }, [categoryName]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPage = Math.ceil(foodDetails.length / itemsPerPage);
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    const VisibleArray = foodDetails.slice(firstIndex, lastIndex);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const prevHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            scrollToTop();
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
            scrollToTop();
        }
    }

    return (
        <div className='mt-5 min-h-screen mb-10 px-4 sm:px-6 lg:px-12'>
            <div className='max-w-7xl mx-auto flex flex-col items-center'>
                <h1 className='playfair-display-medium text-4xl sm:text-5xl md:text-6xl text-center mb-8 capitalize'>
                    {categoryName}
                </h1>

                {loading ? (
                    <div className="py-20 text-xl animate-pulse">Loading Recipes...</div>
                ) : (
                    <>
                        <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full'>
                            {VisibleArray.map((meal) => (
                                <FoodCard key={meal.idMeal} meal={meal} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-between w-full max-w-sm mt-12 px-4 py-2 bg-white rounded-full shadow-md border border-gray-100">
                            <button 
                                className={`p-1 rounded-full transition-colors ${currentPage === 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}`} 
                                onClick={prevHandler} 
                                disabled={currentPage === 1}
                            >
                                <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" strokeWidth=".078"/>
                                </svg>
                            </button>

                            <span className="text-sm sm:text-base font-semibold text-gray-600">
                                {currentPage} <span className="text-gray-400 font-normal mx-1">/</span> {totalPage}
                            </span>

                            <button 
                                className={`p-1 rounded-full transition-colors ${currentPage === totalPage ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-100 cursor-pointer'}`} 
                                onClick={nextHandler}
                                disabled={currentPage === totalPage}
                            >
                                <svg className='rotate-180' width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" strokeWidth=".078"/>
                                </svg>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CategoryPage