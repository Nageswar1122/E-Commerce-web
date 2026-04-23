import axios from "axios";

const API_URL = "https://bright-basket.onrender.com/api/address";

export const updateAddressApi = (userId: number, data: any) => {
  return axios.put(`${API_URL}?userId=${userId}`, data);
};
