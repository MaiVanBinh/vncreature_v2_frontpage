import request from "@/utils/request";
import { URL } from "../utils/constants";

const V_API = URL.V_API;
const listEndPoint = {
  getAll: `${V_API}/post-category`,
}

export const getPostCategoriesApi = async () => {
  try {
    const url = listEndPoint.getAll;
    const data = await request({ url })
    return data;
  } catch(err) {
    console.log('getPostCategories err', err);
  }
}