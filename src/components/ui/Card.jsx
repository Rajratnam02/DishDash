import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ name }) => {
  const navigate = useNavigate();

  const onViewMore = (e) => {
    e.preventDefault();
    navigate(`/category?categoryName=${name}`);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full border-b py-3 gap-2">
   
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold break-words">
        {name}
      </h1>

    
      <button
        onClick={onViewMore}
        className="hover:text-blue-600 playfair-display-normal text-sm sm:text-base md:text-lg font-medium hover:underline"
      >
        View More →
      </button>
    </div>
  );
};

export default Card;
