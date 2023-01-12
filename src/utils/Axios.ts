import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_YELP_API_URL,
});

instance.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
instance.defaults.headers.common["Authorization"] =
  "Bearer " + import.meta.env.VITE_YELP_API_KEY;
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
