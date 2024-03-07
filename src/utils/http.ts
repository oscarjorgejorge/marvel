import axios from "axios";
import Config from "../config";

axios.defaults.headers["Content-Type"] = "application/json";
axios.defaults.baseURL = Config.apiurl;

const Http = axios;

export default Http;
