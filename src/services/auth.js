import axios from "axios";
import { ENV } from "../utils/constants";

const register = async (username, email, password) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`, {
        username,
        email,
        password,
        roles: ['CommonReader'],
    });
};

const loginF = async (email, password) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`, {
        email,
        password,
    });
}

export default {
    register,
    loginF,
};