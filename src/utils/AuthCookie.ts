import isEmpty from 'lodash/isempty';
import { deleteCookie, getCookie, setCookie } from "./cookie";

const isTokenValid = () => {
  return !isEmpty(getCookie("accessToken"));
}

const setToken = (token: { access_token: any; expires_in: any; expires_in_refresh: any; refresh_token?: string }) => {
  if (!isEmpty(token)) {
    const {
      access_token: accessToken,
      expires_in: expiresIn,
      refresh_token: refreshToken,
      expires_in_refresh: expiresInRefresh
    } = token;

    const cookieHoursAccessToken = expiresIn;
    const cookieHoursRefreshToken = expiresInRefresh; 
    setCookie("accessToken", accessToken, cookieHoursAccessToken);
    if(refreshToken) {
      setCookie('refreshToken', refreshToken, cookieHoursRefreshToken);
    }
    return true;
  }

  return false;
}

const getToken = () => {
  return {
    accessToken: getCookie("accessToken"),
    refreshToken: getCookie("refreshToken"),
  };
}

const clear = () => {
  deleteCookie("accessToken");
  deleteCookie("refreshToken");
}

const exportObj = {
  isTokenValid,
  setToken,
  getToken,
  clear
}

export default exportObj;
