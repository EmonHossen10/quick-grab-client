import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // request interceptor for every secure call to the api
  // this will add the token to the request header if it exists
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    console.log("Token used in axiosSecure:", token);
    // If token exists, set it in the Authorization header
    config.headers.authorization = `Bearer ${token}`;

    return config;
  });

  // response interceptor can be added here if needed
  axiosSecure.interceptors.response.use(
    (response) => {
      // Handle successful responses
      return response;
    },
    async (error) => {
      // Handle errors
      const status = error.response.status;
      console.error("Error in axiosSecure response interceptor:", status);
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
        console.error("Unauthorized or forbidden access detected.");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
