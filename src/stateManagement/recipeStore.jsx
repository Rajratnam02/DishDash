import { create } from "zustand";
import { persist } from "zustand/middleware";
import { recipeApi } from "../api/axiosInstance";

const recipeStore = create(
  persist(
    (set) => ({
      message: null,
      error: null,
      loading: false,
      success: null,

      getCuisine: async () => {
        set({ message: null, loading: true, error: null, success: null });
        try {
          const response = await recipeApi.get("/cuisine");
          if (response.data.success) {
            set({
              message: response.data.message,
              loading: false,
              success: true,
              error: null,
            });
            return {
              cuisines: response.data.cuisines,
              loading: false,
              success: true,
              message: response.data.message,
              error: null,
            };
          }
        } catch (error) {
          set({
            message: error.response?.data?.message || "Something went wrong",
            loading: false,
            success: false,
            error: error,
          });
          return {
            success: false,
            loading: false,
            error: error.response?.data?.message || "Something went wrong",
          };
        }
      },

      quickMeal: async () => {
        set({ message: null, loading: true, error: null, success: null });
        try {
          const response = await recipeApi.get("/quickRecipe");
          if (response.data.success) {
            set({
              message: response.data.message,
              loading: false,
              success: true,
              error: null,
            });
            return {
              recipe: response.data.recipe,
              loading: false,
              success: true,
              message: response.data.message,
              error: null,
            };
          }
        } catch (error) {
          set({
            message: error.response?.data?.message || "Something went wrong",
            loading: false,
            success: false,
            error: error,
          });
          return {
            success: false,
            loading: false,
            error: error.response?.data?.message || "Something went wrong",
          };
        }
      },

      mealByCuisine: async (cuisine) => {
        set({ message: null, loading: true, error: null, success: null });
        try{
          const response = await recipeApi.get(`/cusine/${cuisine}`);
          if(response.data.success){
            set({
              message: response.data.message,
              loading: false,
              success: true,
              error: null,
            });
            return {
              recipes: response.data.recipes,
              loading: false,
              success: true,
              message: response.data.message,
              error: null,
            }
          }
        }catch(error){
          set({
            message: error.response?.data?.message || "Something went wrong",
            loading: false,
            success: false,
            error: error,
          });
          return {
            success: false,
            loading: false,
            error: error.response?.data?.message || "Something went wrong",
          };
        }
      },

      getRecipe: async (recipe) => {
        set({ message: null, loading: true, error: null, success: null });
        try{
          const response = await recipeApi.get(`/recipe/${recipe}`);
          if(response.data.success){
            set({
              message: response.data.message,
              loading: false,
              success: true,
              error: null,
            });
            return {
              recipeDetail: response.data.recipeDetail,
              loading: false,
              success: true,
              message: response.data.message,
              error: null,
            }
          }
        }catch(error){
          set({
            message: error.response?.data?.message || "Something went wrong",
            loading: false,
            success: false,
            error: error,
          });
          return {
            success: false,
            loading: false,
            error: error.response?.data?.message || "Something went wrong",
          };
        }
      }

    }),
    {
      name: "recipe-store",
    },
  ),
);

export default recipeStore;
