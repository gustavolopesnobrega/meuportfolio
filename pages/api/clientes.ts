import axios from "axios";


//base url api viacep.com.br/ws/ 


const api = axios.create({
    baseURL: "http://localhost:8080/api"
});


export default api;