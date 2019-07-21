import axios from "axios";

const baseAPI = "/";
// const baseAPI = "http://localhost:3001/";

const API = axios.create({
  baseURL: baseAPI,
  // timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

API.interceptors.request.use(
  function(config) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      const { jwt } = user;
      config.headers.Authorization = `Bearer ${jwt}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response && error.response.status === 403) {
      localStorage.removeItem("user");
      // localStorage.removeItem("sidebar");
      window.location.replace("login");
    }
    return Promise.reject(error);
  }
);

export default API;
