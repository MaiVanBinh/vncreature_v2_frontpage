import request from "@/utils/request";
import { URL } from "./../utils/constants";

const V_API = URL.V_API;
const listEndPoint = {
  posts: `${V_API}/posts`,
}

export const getPosts = async (payload: any) => {
  try {
    const data = await request({url: listEndPoint.posts})
    return data;
  } catch (err) {
    console.log("getPosts id err", err);
    return {};
  }
};
