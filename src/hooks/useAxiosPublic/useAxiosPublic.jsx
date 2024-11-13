import axios from "axios";
const axiosPublic = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
