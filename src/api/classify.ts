import request from "@/utils/request";
import { URL } from "./../utils/constants";

const V_API = URL.V_API;
const listEndPoint = {
  classify: `${V_API}/classify/filter`,
}

export const getClassifyFilter = async (species: number) => {
  try {
    const url = `${listEndPoint.classify}?species=${species}`
    const res = await request({ url })
    return res;
  } catch (err) {
    console.log("getClassifyFilter err", err);
    return {};
  }
};