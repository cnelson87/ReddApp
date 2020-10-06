import axios from 'axios';
import Constants from 'config/Constants';

const { apiBaseUrl } = Constants;

const instance = axios.create({
	baseURL: apiBaseUrl
});

export default instance;
