import axios from "axios";

const Api = axios.create({
  baseURL: "https://book-collection-94mv.onrender.com/api/v1",
  withCredentials: true,
});

export default Api;