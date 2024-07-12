import axios from 'axios';

let apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT as string;

type LoginCredentials = {
    email: string;
    password: string;
};

interface LoginResponse {
    success: boolean;
    message: string;
  }

// Login with credentials
async function login(credentials: LoginCredentials) {
    try {

        const response = await axios.post(`${apiEndpoint}/login`, credentials, {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json'
            }
          });

        return response.data as LoginResponse;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('There was an error with the request:', error.response);
            return error.response?.data as LoginResponse;
        } else {
            console.error('An unexpected error occurred:', error);
            throw error;
        }
    }
}

export default login;