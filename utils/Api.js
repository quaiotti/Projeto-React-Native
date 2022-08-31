import axios from "axios";

const api = axios.create({
    baseURL: "https://630ce690b37c364eb7fc3aee.mockapi.io/",
});

export default api;