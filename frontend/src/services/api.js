import axios from "axios";

const API = axios.create({
  baseURL: "https://trimsy-backend.onrender.com",
});

export default API;
