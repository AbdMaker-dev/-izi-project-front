import axios from "axios";
import authHeader from "./AuthHeader";

const API_URL = 'http://localhost:8080/api/v1/';
class ProjetService {

    async getAllProjet() {
        console.log(authHeader());
        const response = await axios
            .get(API_URL + 'projets', { headers: authHeader() });
        return response.data;
    }

    async getAllSharedProjet() {
        console.log(authHeader());
        const response = await axios
            .get(API_URL + 'sharedprojets', { headers: authHeader() });
        return response.data;
    }
}

export default new ProjetService();