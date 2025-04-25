/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { apiPath } from "../../constants/apiPath";
import axiosInstance from "../../interceptor/interceptor";
import { LoginResponse } from "../../models/loginModel";

class AuthService {
  login = (payload: {
    username: string;
    password: string;
  }): Promise<AxiosResponse<LoginResponse>> => {
    return axiosInstance.post(apiPath.LOGIN, payload);
  };
}

const authService = new AuthService();

Object.freeze(authService);

export default authService;
