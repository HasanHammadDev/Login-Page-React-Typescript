import axios from "axios";

let apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT as string;


async function fetchProfile() {
    try {
        const response = await axios.post(`${apiEndpoint}/profile`, {}, {
            withCredentials: true, // This allows cookies to be sent with the request
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('There was an error with the request:', error.response);
            return error.response?.data;
        } else {
            console.error('An unexpected error occurred:', error);
            return error;
        }
    }
}

export default fetchProfile;