import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const API_URL = import.meta.env.VITE_API_URL + "/api/v1";
const token = localStorage.getItem("token");

export const apiRequest = async (method, url, data = null) => {
  try {
    const response = await axios({
      method,
      url: `${API_URL}${url}`,
      data,
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
  catch (error) {
    const response = error.response?.data || error || { message: "An error occurred" };
    throw response;
  }
}
