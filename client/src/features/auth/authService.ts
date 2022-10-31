import axios from 'axios';

type AuthFunction = (userData: string) => Promise<string>;
type Logout = () => void;

const API_URL: string = 'http://localhost:5001/api/users/';

// Register a new user
const register: AuthFunction = async (userData) => {
    console.log(userData);

    const response = await axios.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

// Login existing user
const login: AuthFunction = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
};

// Logout user
const logout: Logout = () => localStorage.removeItem('user');

const authService = {
    register,
    login,
    logout,
};

export default authService;
