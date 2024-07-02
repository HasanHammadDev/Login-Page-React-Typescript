import axios from "axios";

let apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT as string;

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