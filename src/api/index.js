import axios from "axios";
import { getToken } from "./token";

const instance = axios.create({
  baseURL: "https://task-react-auth-backend.eapi.joincoded.com/api",
});

// Add an interceptor to automatically include the Bearer token if it exists
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error adding token to headers:", error);
    }
    return config;
  },
  (error) => {
    console.error("Interceptor error:", error);
    console.error("Interceptor error response:", error.response);
    return Promise.reject(error);
  }
);

export default instance;
