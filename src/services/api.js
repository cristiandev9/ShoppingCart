import axios from "axios";

const apiUrlLowPrice = "https://serverprocess.herokuapp.com/api/valor-menor-que-dez";
const apiUrlHighPrice = "https://serverprocess.herokuapp.com/api/valor-maior-que-dez";

const api = axios.create({
  baseURL: apiUrlHighPrice,
});

export default api;