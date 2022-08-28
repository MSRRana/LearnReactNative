import axios from "axios";
export default axios.create({
    baseURL: 'https://dev.dotminds.in/mock-apis/',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data',
    },
});