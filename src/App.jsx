import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Warmglow from "./components/Warmglow";
import CategoryFoodPage from "./pages/CategoryFoodPage";
import RecipePage from "./pages/RecipePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <div className=" text-white bg-stone-950 min-h-screen">
      <Warmglow />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:id" element={<CategoryFoodPage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;
