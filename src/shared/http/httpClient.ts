import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

export const analyticsHttpClient = axios.create()