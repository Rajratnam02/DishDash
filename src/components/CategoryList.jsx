import React from 'react'

const CategoryList = (props) => {
  return (
    <div className='savory-card p-8 rounded-[3rem] text-center group cursor-pointer'>
        <img src={props.cat.strCategoryThumb} className="w-full aspect-square object-contain group-hover:rotate-12 transition-transform duration-500 mb-4" />
        <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 group-hover:text-amber-500 transition">
            {props.cat.strCategory}
        </h3>
    </div>
  )
}

export default CategoryList