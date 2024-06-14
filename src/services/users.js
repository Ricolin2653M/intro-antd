import { jwtDecode } from "jwt-decode";
import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";

const getMe = async (token) => {
    try {
        const decoded = jwtDecode(token)
        const userId = decoded.id
        const url =`${ENV.API_URL}/${ENV.ENDPOINTS.USER}/${userId}`
        const response = await authFetch(url);

        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

const updatePassword = async (token) => {
    try {
        const decode = jwtDecode(token)
        const userId = decode.id
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATEPASSWORD}/${userId}`;
        //const response = await ();
    } catch (error) {
        console.log(error);
    }
}

export const usersService = {
    getMe,
    updatePassword
}