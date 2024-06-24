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
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATEUSER}/${id}`;

        const response = await axios.put(url, { password });

        if (response.status !== 200) {
            throw new Error(`Failed to update password: ${response.statusText}`);

        }

        return response.data;
    } catch (error) {
        console.error('Error updating password:', error);
        //console.log("Token:",id);
        //console.log("contraseña",password);
        throw error;
    }
};
const updateUsername = async (id, readername) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATEUSER}/${id}`;

        const response = await axios.put(url, { readername });

        if (response.status !== 200) {
            throw new Error(`Failed to update password: ${response.statusText}`);

        }

        return response.data;
    } catch (error) {
        console.error('Error updating username:', error);
        //console.log("Token:",id);
        //console.log("username", readername);
        throw error;
    }
}

const updateEmail = async (id, email) => {
    try {
        const url = `${ENV.API_URL}/${ENV.ENDPOINTS.UPDATEUSER}/${id}`;

        const response = await axios.put(url, { email });

        if (response.status !== 200) {
            throw new Error(`Failed to update password: ${response.statusText}`);

        }

        return response.data;
    } catch (error) {
        console.error('Error updating email:', error);
        //console.log("Token:",id);
        //console.log("Correo", email);
        throw error;
    }
}

export const usersService = {
    getMe,
    updatePassword,
    updateUsername,
    updateEmail
};
