import axios from "axios";

export default axios.create({
  baseURL: "https://192.168.0.16:5001/v1/",
  headers: {
    "Content-type": "application/json"
  }
});