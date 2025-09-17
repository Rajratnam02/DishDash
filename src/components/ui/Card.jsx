import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name }) => {

  const navigate = useNavigate();

  const onViewMore = (e) => {
    e.preventDefault();
    navigate(`/category?categoryName=${name}`)
  }


  return (
    <div className="group h-[200px] w-[250px] flex flex-col justify-center items-center p-5 bg-white rounded-2xl border shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 relative">
      
      {/* Category Name */}
      <h1 className="text-2xl playfair-display-normal  font-bold text-gray-800 text-center truncate w-full">
        {name}
      </h1>

      {/* View More Button (hidden until hover) */}
      <button
        onClick={onViewMore}
        className="absolute cursor-pointer bottom-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 px-5 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600"
      >
        View More
      </button>
    </div>
  );
};

export default Card;
