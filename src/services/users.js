import { jwtDecode } from "jwt-decode";
import { ENV } from "../utils/constants";
import { authFetch } from "../utils/authFetch";
import axios from "axios";

const getMe = async (token) => {
    try {
        const decoded = jwtDecode(token);
        const userId = decoded.id;
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USER}/${userId}`;
        const response = await authFetch(url);

        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const updatePassword = async (id, password) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATEPASSWORD}/${id}`;

        const response = await axios.put(url, { password });

        if (response.status !== 200) {
            throw new Error(`Failed to update password: ${response.statusText}`);
            
        }

        return response.data;
    } catch (error) {
        console.error('Error updating password:', error);
        console.log("Token:",id);
        console.log("contraseña",newPassword);
        throw error;
    }
};

export const usersService = {
    getMe,
    updatePassword
};
