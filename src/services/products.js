import axios from 'axios';
import { ENV } from '../utils/constants';


export const getProducts = async () => {
    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error;
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos del producto:', error);
        throw error;
    }
}

const addNewP = async (name, author, editorial, pages, price, year, genre, review) => {
    return axios.post(`${ENV.API_URL}/${ENV.ENDPOINTS.NEWPRODUCTS}`, {
        name,
        author,
        editorial,
        pages,
        price,
        year,
        genre,
        review
    });
};

const editP = async (id, name, author, editorial, pages, price, year, genre, review) => {
    return axios.put(`${ENV.API_URL}/${ENV.ENDPOINTS.NEWPRODUCTS}/${id}`, {
        name,
        author,
        editorial,
        pages,
        price,
        year,
        genre,
        review
    });
};

const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${ENV.API_URL}/${ENV.ENDPOINTS.DELETEBOOKS}/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        throw error;
    }
};

export default {
    getProducts,
    getProductById,
    addNewP,
    editP,
    deleteProduct,
};