import { apiRequest } from "../lib/utils";

const authService = {
  register: async (data) => {
    return apiRequest("POST", "/auth/register", data);
  },

  login: async (data) => {
    return apiRequest("POST", "/auth/login", data);
  },

  logout: async () => {
    return apiRequest("GET", "/auth/logout");
  },

  validateToken: async () => {
    return apiRequest("GET", "/auth/validateToken");
  }
};

export default authService;