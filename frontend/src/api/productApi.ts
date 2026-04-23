const BASE_URL = "https://bright-basket.onrender.com/api/products";

export const getAllProductsApi = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const getProductByIdApi = async (id: string) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};
