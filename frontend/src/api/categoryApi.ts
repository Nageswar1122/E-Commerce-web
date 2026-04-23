import axios from "axios";

export const fetchCategories = async () => {
  const res = await axios.get("https://bright-basket.onrender.com/api/categories");
  return res.data;
};
