import { apiPath } from "../../../constants/apiPath";
import axiosInstance from "../../../interceptor/interceptor";
import {
  ResponseArrayContentEntity,
  ResponseContentEntity,
} from "../../../models/response-content-entity";

class PracticeProfileService {
  getPracticeDetails = (): Promise<ResponseArrayContentEntity<any>> => {
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
  editLocation = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.EDIT_LOCATION}`, payload);
  };
  editLocationStatus = (
    locationId: string,
    flag: boolean
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(
      `${apiPath.EDIT_LOCATION_STATUS}/${locationId}?flag=${flag}`
    );
  };
  getAllStaff = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(
      `${apiPath.GET_ALL_STAFF}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  addStaff = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_STAFF}`, payload);
  };
  editStaff = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.EDIT_STAFF}`, payload);
  };
  editStaffStatus = (
    staffId: string,
    flag: boolean
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(
      `${apiPath.EDIT_STAFF_STATUS}/${staffId}?flag=${flag}`
    );
  };
  getAllContacts = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(
      `${apiPath.GET_ALL_CONTACTS}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  addContact = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_CONTACT}`, payload);
  };
  editContact = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.EDIT_CONTACT}`, payload);
  };
  getAllClinicians = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<any>> => {
    return axiosInstance.get(
      `${apiPath.GET_ALL_CLINICIAN_DETAILS}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  getAllWorkLocationClinician = (): Promise<{
    data: Record<string, string>;
    message: string | null;
    code: string;
    path: string;
    requestId: string;
    version: string;
  }> => {
    return axiosInstance.get(`${apiPath.GET_ALL_WORK_LOCATION_CLINICIAN}`);
  };
  addClinician = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_CLINICIAN}`, payload);
  };
  editClinician = (payload: any): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.EDIT_CLINICIAN}`, payload);
  };
  editClinicianStatus = (
    clinicianId: string,
    flag: boolean
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(
      `${apiPath.EDIT_CLINICIAN_STATUS}/${clinicianId}?flag=${flag}`
    );
  };
  getAllSupervisorClinician = (): Promise<{
    data: Record<string, string>;
    message: string | null;
    code: string;
    path: string;
    requestId: string;
    version: string;
  }> => {
    return axiosInstance.get(`${apiPath.GET_ALL_SUPERVISOR_CLINICIAN}`);
  };
  getClinicianById = (
    clinicianId: string
  ): Promise<ResponseContentEntity<any>> => {
    return axiosInstance.get(`${apiPath.GET_CLINICIAN_BY_ID}/${clinicianId}`);
  };
}
const practiceProfileService = new PracticeProfileService();
Object.freeze(practiceProfileService);

export default practiceProfileService;
