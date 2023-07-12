// import 'isomorphic-unfetch';
import axios from 'axios';
import qs from 'qs';
import get from 'lodash/get';
import isEmpty from 'lodash/isempty';
import isEqual from 'lodash/isequal';
import AuthSessionStorage from './AuthSessionStorage';
import AuthCookie from './AuthCookie';
import { getAccessToken, refreshTokenFunc, refreshTokenServer } from '@/api/auth';

const getAccessTokenFromSessionStorage = async () => {
  return null;
  if (!AuthSessionStorage.isTokenValid()) {
    const tokens = await getAccessToken();
    AuthSessionStorage.setToken(tokens);
    return AuthSessionStorage.getToken().accessToken;
  }

  return AuthSessionStorage.getToken().accessToken;
};

const getAccessTokenFromCookie = async () => {
  if (!AuthCookie.isTokenValid()) {
    const { refreshToken } = AuthCookie.getToken();
    let token;
    if (!refreshToken) {
      token = await refreshTokenFunc()
    } else {
      token = await refreshTokenServer(refreshToken);
    }
    AuthCookie.setToken(token);
    return AuthCookie.getToken().accessToken;
  }
  return AuthCookie.getToken().accessToken;
};

const isServer = typeof window === 'undefined';

export default async function request({ url, options, lang }: any) {
  const params = get(options, 'params', {});
  const method = get(options, 'method', 'GET').toUpperCase();
  const body = get(options, 'body', {});

  let headers = get(options, 'headers', {});
  let urlPath = url;

  let accessToken;
  if (!isServer) {
    accessToken = await getAccessTokenFromCookie();
  } else {
    accessToken = await getAccessTokenFromSessionStorage();
  }
  headers = { Authorization: `bearer ${accessToken}`, ...headers };

  urlPath += !isEmpty(params) ? `?${qs.stringify(params)}` : '';
  let optionsFinal = {
    url: urlPath,
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    data: {}
  };

  if (isEqual(method, 'POST') || isEqual(method, 'PUT')) {
    let qsBody = {};
    if (optionsFinal.headers['Content-Type'] === 'application/json') {
      qsBody = JSON.stringify(body);
    } else {
      qsBody = qs.stringify(body);
    }

    optionsFinal = {
      ...optionsFinal,
      data: qsBody,
    };
  }
  return axios(optionsFinal)
    .then(result => result.data)
    .catch((error) => {
      throw error;
    });
}
