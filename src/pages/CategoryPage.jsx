import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FoodCard from '../components/ui/FoodCard';

const CategoryPage = () => {
    const [searchParams] = useSearchParams();
    const categoryName = searchParams.get("categoryName");
    const [foodDetails, setFoodDetails] = useState([]);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                await setFoodDetails(response.data.meals);


            } catch (error) {
                console.error("Error Fetching Data", error);
           }
        } 
        
        fetchFood()
    },[])

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const totalPage = Math.ceil(foodDetails.length / itemsPerPage);
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    const VisibleArray = foodDetails.slice(firstIndex, lastIndex);

    const prevHandler = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const nextHandler = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    }

  return (
      <div className='mt-5 min-h-screen mb-5 px-5'>
          <div className='h-full flex flex-col items-center rounded'>
              <h1 className='playfair-display-medium text-[3.5rem] text-center'>{categoryName}</h1>
              <div className='grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
                  {foodDetails && (VisibleArray.map((meal)=>(<FoodCard meal={meal} />)))}
              </div>

                 <div class="flex items-center justify-between w-full max-w-80 text-gray-500 font-medium">
                     <button className='cursor-pointer' onClick={prevHandler} type="button" aria-label="prev">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" stroke-width=".078"/>
                        </svg>
                    </button>

    <span>Page {currentPage} of {totalPage}</span>

    <button onClick={nextHandler} type="button" aria-label="next">
        <svg className='cursor-pointer rotate-180' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.499 12.85a.9.9 0 0 1 .57.205l.067.06a.9.9 0 0 1 .06 1.206l-.06.066-5.585 5.586-.028.027.028.027 5.585 5.587a.9.9 0 0 1 .06 1.207l-.06.066a.9.9 0 0 1-1.207.06l-.066-.06-6.25-6.25a1 1 0 0 1-.158-.212l-.038-.08a.9.9 0 0 1-.03-.606l.03-.083a1 1 0 0 1 .137-.226l.06-.066 6.25-6.25a.9.9 0 0 1 .635-.263Z" fill="#475569" stroke="#475569" stroke-width=".078"/>
        </svg>
    </button>
</div>

          </div>
      </div>
  )
}

export default CategoryPage