import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'

const Categories = () => {
    const[categories, setCategories] = useState(null)
    useEffect(()=>{
        fetchCategories()
    },[])

    
    const fetchCategories = async () => {
        try{
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
            setCategories(response.data.categories)
        }catch(error){
            console.error('Failed to fetch categories', error)
        }
    }
    
    if(!categories){
        return (
            <div>
                Loading...
            </div>
        )
    }
        
  return (
    <div className=' items-center'>
        <h2 className='text-3xl outfit font-bold mb-10 tracking-tight flex items-center gap-6'>
            Pantry Categories
        </h2>
        <div className="h-px flex-1 mb-5  bg-stone-800"></div>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
            {
                categories.map((cat) => (
                    <CategoryList key={cat.idCategory} cat={cat} />
                ))
            }
        </div>
    </div>
  )
}

export default Categories