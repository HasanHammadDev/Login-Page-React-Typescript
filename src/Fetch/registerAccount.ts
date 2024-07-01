import axios from 'axios';

let apiEndpoint = 'http://localhost:3000';

type Account = {
    username: string;
    email: string;
    password: string;
};

// Register an account
async function registerAccount(account: Account) {
    try {
        let response = await axios.post(`${apiEndpoint}/register`, account, {
            headers: {
                'Content-Type': 'application/json'
            }
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

export default registerAccount;