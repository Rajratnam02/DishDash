import React from 'react'

const IngredientDiv = (props) => {
  return (
    <div className='w-full py-4 border-b text-lg font-medium flex justify-between px-4'>
        <p>{props.product}</p>
        <p>{props.quantity}</p>
    </div>
  )
}

export default IngredientDiv