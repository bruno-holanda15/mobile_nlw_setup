import axios from "axios";

export const api = axios.create({
  baseURL: 'http://172.19.230.167:3333'
})