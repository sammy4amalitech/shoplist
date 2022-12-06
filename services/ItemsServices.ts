import axios, { AxiosError, AxiosPromise, AxiosResponse } from "axios";
import { Item } from "~/types/Shoplist";

const BASE_URL = "https://fakestoreapi.com";

const getItems = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    console.log("res", response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("error message", error.message);
      return error.message;
    } else {
      console.error("unexpected error: ", error.message);
      return "An unexpected error occurred";
    }
  }
};
const getSingleItem = async (id: string | string[]) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/` + id);
    console.log("single item", response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("error message", error.message);
      return error.message;
    } else {
      console.error("unexpected error: ", error.message);
      return "An unexpected error occurred";
    }
  }
};

export { getItems, getSingleItem };
