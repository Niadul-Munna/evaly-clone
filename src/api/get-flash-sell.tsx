import axios from "axios";

const api = axios.create({
  baseURL: "https://api.e-valy.com/api/v1/",
});

export const getFlashSell = () => {
  return api.get("/ums/consumers/campaign/live");
};
