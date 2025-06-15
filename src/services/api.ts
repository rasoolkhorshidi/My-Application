import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export async function getAllProducts(id: string) {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}
