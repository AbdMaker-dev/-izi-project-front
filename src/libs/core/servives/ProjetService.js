import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:8080/api/v1/';
class ProjetService {

    async getAllProjet() {
        const response = await axios
            .get(API_URL + 'projets', { headers: authHeader() });
        return response.data;
    }

    async getAllSharedProjet() {
        const response = await axios
            .get(API_URL + 'sharedprojets', { headers: authHeader() });
        return response.data;
    }

    async addProjet(data) {
        const response = await axios
            .post(API_URL + 'projets', data, { headers: authHeader() });
        return response.data;
    }
}

export default new ProjetService();