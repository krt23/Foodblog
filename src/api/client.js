const axios = require("axios");

export const client = axios.create({
    baseURL: "https://fakerestapi.azurewebsites.net/api"
});