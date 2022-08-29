import axios from "axios";
export default axios.create({
    baseURL: "https://api.bscscan.com/api",
    headers: {
        "Content-type": "application/json"
    }
});
