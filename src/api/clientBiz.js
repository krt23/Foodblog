const axios = require("axios");

export const clientBiz = axios.create({
    baseURL: "https://practice-bizico-api.herokuapp.com/api"
});