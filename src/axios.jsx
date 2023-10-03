import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazone-clone.cyclic.cloud",
});

export default instance;
