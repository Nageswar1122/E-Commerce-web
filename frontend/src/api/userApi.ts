import axios from "axios";

const API_URL = "https://bright-basket.onrender.com/api/profile";

export const getUserProfile = (userId: number) => {
  return axios.get(`${API_URL}?userId=${userId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};

export const updateProfileApi = (userId: number, data: any) => {
  return axios.put(`${API_URL}?userId=${userId}`, data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
