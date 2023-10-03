import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: "http://127.0.0.1:5001/e-clone-7e5a1/us-central1/api",
  baseURL: "http://127.0.0.1:5500",
});

export default instance;
