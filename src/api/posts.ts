import request from "@/utils/request";
import { URL } from "./../utils/constants";

const V_API = URL.V_API;
const listEndPoint = {
  posts: `${V_API}/posts`,
}

export type TGetPostParams = {
  category?: number;
  page?: number;
}

export const getPostsApi = async (payload?: TGetPostParams) => {
  try {
    const options = {
      params: payload
    }
    console.log('optionsoptions', options)
    const data = await request({url: listEndPoint.posts, options })
    return data;
  } catch (err) {
    console.log("getPosts id err", err);
    return {};
  }
};
