import axios from 'axios';

let apiEndpoint = import.meta.env.VITE_REACT_APP_API_ENDPOINT as string;

type Account = {
    email: string;
    password: string;
};

interface RegisterResponse {
    success: boolean;
    message: string;
}

// Register an account
async function registerAccount(account: Account): Promise<RegisterResponse> {
    try {
        let response = await axios.post(`${apiEndpoint}/register`, account, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data as RegisterResponse;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('There was an error with the request:', error.response);
            return error.response?.data as RegisterResponse;
        } else {
            console.error('An unexpected error occurred:', error);
            throw error;
        }
    }
}

export default registerAccount;