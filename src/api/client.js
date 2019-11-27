const axios = require("axios");

export const client = axios.create({
    baseURL: "https://practice-bizico-api.herokuapp.com/api"
});