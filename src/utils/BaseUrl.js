import axios from "axios";

const apiCita=()=>{
  const  url  = "https://sebas-juanes-citas.herokuapp.com/";
  const axiosInstance = axios.create({
    baseURL: url,
    responseType: "json",
  });
  return axiosInstance;
}
export default apiCita;
