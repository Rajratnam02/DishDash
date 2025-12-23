import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name }) => {
  const navigate = useNavigate();

  const onViewMore = (e) => {
    e.preventDefault();
    navigate(`/category?categoryName=${name}`);
  };

  return (
    <div 
      onClick={onViewMore}
      className="group cursor-pointer bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center gap-4"
    >
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors break-words">
        {name}
      </h3>
      
      <div className="flex items-center gap-1 text-orange-500 font-medium text-sm sm:text-base opacity-0 group-hover:opacity-100 transition-opacity">
        <span>View More</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};

export default Card;