import React from 'react'

const IngredientCard = (props) => {
  return (
    <div className="bg-stone-800/50 border mb-3 border-white/5 px-6 py-4 rounded-2xl flex justify-between">
        <span className="text-sm font-bold">{props.ing.name}</span>
        <span className="text-xs text-amber-500 font-bold uppercase">
            {props.ing.measure}
        </span>
    </div>
  )
}

export default IngredientCard