import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
