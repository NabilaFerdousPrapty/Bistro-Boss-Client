/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export const axiosSecure=axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    
});
const UseAxiosSecure = () => {
    
    return axiosSecure;
};

export default UseAxiosSecure;