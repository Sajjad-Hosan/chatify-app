import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "https://chatify-backend-gilt.vercel.app",
  // baseURL: "http://localhost:4000",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
