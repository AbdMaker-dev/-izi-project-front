import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/';
class AuthService {

    async login(email, password) {
        const response = await axios
            .post(API_URL + 'login', {
                email,
                password
            });
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.data));
        }
        return response.data;
    }
}

export default new AuthService();