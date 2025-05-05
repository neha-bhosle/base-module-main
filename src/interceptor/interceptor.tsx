import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import { apiPath } from "../constants/apiPath";
import {
  commonComponentConstant,
  commonPublicRouteConstants,
} from "../constants/common-component";
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage,
  saveToLocalStorage,
} from "../utils/localStorage";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;
const VERSION = import.meta.env.VITE_PROJECT_VERSION;
const { BEARER } = commonComponentConstant;
const { LOGIN } = apiPath;
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});
axiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig) => {

    const accessToken = getDataFromLocalStorage("token") || "";
    if (accessToken && request.url !== LOGIN) {
      request.headers.Authorization = `${BEARER} ${accessToken?.replace(/^"|"$/g, "")}`;
    }

    request.headers["Access-Control-Allow-Origin"] = "*";
    request.headers["Access-Control-Allow-Headers"] =
      "Origin, X-Requested-With, Content-Type, Accept";
    request.headers["Access-Control-Allow-Methods"] =
      "GET, POST, PUT, DELETE, OPTIONS";

    return request;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.url === LOGIN && response.data?.data?.access_token) {
      saveToLocalStorage("token", response.data?.data?.access_token);
      saveToLocalStorage("refresh_token", response.data?.data?.refresh_token);

      // Redirect to returnUrl after login
      const returnUrl = localStorage.getItem("returnUrl") || "/";
      window.location.replace(returnUrl);
    }

    if (response.data.version !== VERSION) {
      window.location.reload();
    }

    return response.data;
  },
  async (error) => {
    if (
      error?.response?.status === 401 &&
      error?.response?.config?.url !== apiPath.LOGIN
    ) {
      if (window.location.pathname !== commonPublicRouteConstants.LOGIN) {
        const _refreshToken = getDataFromLocalStorage("refresh_token");
        const refreshToken = _refreshToken?.replace(/^"|"$/g, "") || "";

        try {
          if (!refreshToken) {
            throw new Error("refresh token not found!");
          }

          // Update access token
          const response = await axios.post(
            `${BASE_URL}/api/master/access-token?refreshToken=${refreshToken}`
          );
          const access_token = response?.data?.data?.access_token || "";

          if (!access_token) {
            throw new Error("access token not found!");
          }

          saveToLocalStorage("token", access_token);
          saveToLocalStorage(
            "refresh_token",
            response.data?.data?.refresh_token
          );

          const reqConfig = error.config as AxiosRequestConfig<string>;

          if (!reqConfig?.headers) {
            reqConfig.headers = {};
          }
          reqConfig.headers["Authorization"] = `Bearer ${access_token}`;

          return axios.request(reqConfig);
        } catch {
          removeDataFromLocalStorage("token");
          removeDataFromLocalStorage("role");
          removeDataFromLocalStorage("refresh_token");

          window.parent.location.assign("/auth/login");
          window.location.assign("/auth/login");
        }
      }
      return;
    }
    return error?.response ===
      "Cannot read properties of undefined (reading 'data')"
      ? "Error occurred"
      : error?.response;
  }
);
export default axiosInstance;
