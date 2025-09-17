import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './ui/Card';

const SectionTwoHome = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        await setCategories(response.data.meals);
        await setLoading(false);
          console.log(response.data.meals);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <div className=' mt-[20px] flex flex-col items-center py-5'>
      <h1 className='text-[3.5rem] lora-normal mb-10 text-center'>Browse By Category</h1>
          {loading && (<h1 className='text-[3rem] cookie-light text-center '>Loading...</h1>)}
          <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
           
               
              {categories && categories.map((item) => (<Card name={item.strCategory} />))}
              
          </div>
    </div>
  )
}

export default SectionTwoHome