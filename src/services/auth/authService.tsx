/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import { apiPath } from "../../constants/apiPath";
import axiosInstance from "../../interceptor/interceptor";
import { LoginResponse } from "../../models/loginModel";
import { ResponseContentEntity } from "../../models/response-content-entity";
import { ResetLinkType } from "../../models/reset-linktype";

class AuthService {
  login = (payload: {
    username: string;
    password: string;
  }): Promise<AxiosResponse<LoginResponse>> => {
    return axiosInstance.post(apiPath.LOGIN, payload);
  };

  verifyPasswordLink = (payload: {
    linkId: string;
    linkType: string;
  }): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.get(
      `${payload.linkType === ResetLinkType.RESET ? apiPath.VERIFY_LINK_RESET : apiPath.VERIFY_LINK_SET}/${payload.linkId}`
    );
  };
}

const authService = new AuthService();

Object.freeze(authService);

export default authService;
