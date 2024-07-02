import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
let apiEndpoint = process.env.API_ENDPOINT;

export default async function Logout() {
    try {
        const response = await axios.post(`${apiEndpoint}/logout`, {}, {
            withCredentials: true,
        });

        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
    }
};