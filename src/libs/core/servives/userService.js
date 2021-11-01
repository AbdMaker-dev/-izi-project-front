import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'https://www.g-sports221.mixefruit.com/api/v1/';
class UserService {
    async getAllUsers() {
        const response = await axios
            .get(API_URL + 'users', { headers: authHeader() });

        return response.data;
    }
}

export default new UserService();