import axios from "axios";

export const recipeApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
