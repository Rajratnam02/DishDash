import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./ui/Card";

const SectionTwoHome = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-10 flex flex-col items-center py-5 px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold lora-normal mb-8 text-center text-gray-800">
        Browse By Category
      </h1>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <h1 className="text-xl md:text-2xl cookie-light animate-pulse">
            Loading...
          </h1>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-7xl">
          {categories &&
            categories.map((item, index) => (
              <Card key={index} name={item.strCategory} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SectionTwoHome;