import request from "@/utils/request";
import { RANDOM_AUTH_KEY, URL } from "./../utils/constants";
import axios from "axios";

const listEndPoint = {
  oauth: `${URL.V_API}/auth/Oauth`,
  getToken: `${URL.BASE_URL}/api/getToken?auth_key=${RANDOM_AUTH_KEY}`,
  getServerToken: `${URL.V_API}/auth/refresh-oauth`
}

export interface IToken {
  access_token: string,
  refresh_token: string,
  expires_in: number,
  expires_in_refresh: number,
}

export const getAccessToken = async () => {
  try {
    const res = await axios({
      url: listEndPoint.oauth,
      method: 'POST',
      data: {
        api_client_secret: process.env.api_client_secret,
        api_client_id: process.env.api_client_id
      }
    });
    const token = res.data as IToken;
    return token;
  } catch (err) {
    console.log("getAccessToken err", err);
    return null
  }
}


export const refreshTokenFunc = async () => {
  try {
    const { data: tokens} = await axios.get(listEndPoint.getToken)
    return tokens;
  } catch (err) {
    console.log("refreshTokenFunc err", err);
  }
}

export const refreshTokenServer = async (refreshToken: string) => {
  try {
    const { data: tokens} = await axios.get(listEndPoint.getServerToken, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    })
    return tokens;
  } catch (err) {
    console.log("refreshTokenFunc err", err);
  }
}
