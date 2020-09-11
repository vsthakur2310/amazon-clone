import axios from "axios";

const instance = axios.create({
  baseURL: "...", // THE API (clod function) URL
});

export default instance;

// http://localhost:5001/clone-ae5f5/us-central1/api
