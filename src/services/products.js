import axios from 'axios';
import {ENV} from '../utils/constants';


export const getProducts = async () => {
	try{
		const response = await axios.get(`${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCTS}`);
		return response.data;
	} catch (error) {
		console.error('Error al obtener los productos:', error);
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
    addNewP,
	deleteProduct,
};