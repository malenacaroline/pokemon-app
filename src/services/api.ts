import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.BFF_URL,
  withCredentials: true,
  timeout: 60000,
  headers: {
    "content-Type": "application/json",
    Accept: "/",
    "Cache-Control": "no-cache",
  },
});

export { apiService };
