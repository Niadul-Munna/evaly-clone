import axios from "axios";

const api = axios.create({
  baseURL: "https://api-maya.nusratech.com",
});

export const getCategories = () => {
  return api.get("/categories");
};
