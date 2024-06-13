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