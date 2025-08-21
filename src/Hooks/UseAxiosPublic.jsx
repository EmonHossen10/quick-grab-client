import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://quick-grab-backend.vercel.app", // Replace with your API base URL
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
