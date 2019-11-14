const axios = require("axios");

export const client = axios.create({
  baseURL: "https://reqres.in/api"
});