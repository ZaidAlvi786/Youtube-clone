import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Ensure this matches your backend port
  withCredentials: true,
});

export default API;
