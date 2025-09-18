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
        console.log(response.data.meals);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-5 flex flex-col items-center py-5 px-4 sm:px-8 md:px-12 lg:px-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lora-normal mb-6 sm:mb-8 md:mb-10 text-center">
        Browse By Category
      </h1>

      {loading && (
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl cookie-light text-center">
          Loading...
        </h1>
      )}

      <div className="flex flex-col w-full px-4 sm:px-10 md:px-20">
        {categories &&
          categories.map((item, index) => (
            <Card key={index} name={item.strCategory} />
          ))}
      </div>
    </div>
  );
};

export default SectionTwoHome;
