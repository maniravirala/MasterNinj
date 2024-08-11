import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + '/api/v1/auth';
const authService = {

  async register(data) {
    try {
      const response = await axios.post(`${API_URL}/register`, data, { withCredentials: true, credentials: 'include' });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  async login(data) {
    try {
      const response = await axios.post(`${API_URL}/login`, data, { withCredentials: true, credentials: 'include' });

      return response.data;
    } catch (error) {
      throw error.response.data;
      // return error.response.data;
    }
  },

  async logout() {
    try {
      const response = await axios.get(`${API_URL}/logout`, { withCredentials: true, credentials: 'include' });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },
};

export default authService;