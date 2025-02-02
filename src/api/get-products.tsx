import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-maya.nusratech.com",
});

export const getProducts = () => {
  return api.get("/products");
};
