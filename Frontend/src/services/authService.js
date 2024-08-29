import { apiRequest } from "../lib/utils";

const authService = {
  register: async (data) => {
    return apiRequest("POST", "/auth/register", data);
  },

  login: async (data) => {
    return apiRequest("POST", "/auth/login", data);
  },

  logout: async () => {
    return apiRequest("POST", "/auth/logout");
  }
};

export default authService;