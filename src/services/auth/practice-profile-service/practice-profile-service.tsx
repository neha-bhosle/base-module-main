import { apiPath } from "../../../constants/apiPath";
import axiosInstance from "../../../interceptor/interceptor";
import {
  ResponseArrayContentEntity,
  ResponseContentEntity,
} from "../../../models/response-content-entity";

class PracticeProfileService {
  getPracticeDetails = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(`${apiPath.GET_PRACTICE_PROFILE}`);
  };
  getLocationDetails = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(
      `${apiPath.GET_LOCATION_DETAILS}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  editPracticeDetails = (
    payload: any
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.UPDATE_PRACTICE_PROFILE}`, payload);
  };
  getAllStates = (): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(`${apiPath.GET_ALL_STATES}`);
  };
  addLocation = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_LOCATION}`, payload);
  };
}

const practiceProfileService = new PracticeProfileService();
Object.freeze(practiceProfileService);

export default practiceProfileService;
