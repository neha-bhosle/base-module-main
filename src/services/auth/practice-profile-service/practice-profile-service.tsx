import { apiPath } from "../../../constants/apiPath";
import axiosInstance from "../../../interceptor/interceptor";
import {
  AllTypes,
  ClinicianPayload,
  ContactPayload,
  LocationPayload,
  USState
} from "../../../models/all-const";
import {
  ClinicInfo,
  LocationInfo,
  PatientTypes,
} from "../../../models/providerGroup";
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
  }): Promise<ResponseArrayContentEntity<LocationPayload>> => {
    return axiosInstance.get(
      `${apiPath.GET_LOCATION_DETAILS}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  editPracticeDetails = (
    payload: ClinicInfo
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.UPDATE_PRACTICE_PROFILE}`, payload);
  };
  getAllStates = (): Promise<ResponseArrayContentEntity<USState>> => {
    return axiosInstance.get(`${apiPath.GET_ALL_STATES}`);
  };
  addLocation = (
    payload: LocationInfo
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_LOCATION}`, payload);
  };
  editLocation = (
    payload: LocationInfo
  ): Promise<ResponseContentEntity<null>> => {
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
  addStaff = (payload: AllTypes): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_STAFF}`, payload);
  };
  editStaff = (payload: PatientTypes): Promise<ResponseContentEntity<null>> => {
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
  }): Promise<ResponseArrayContentEntity<ContactPayload>> => {
    return axiosInstance.get(
      `${apiPath.GET_ALL_CONTACTS}?pageSize=${payload.size}&page=${payload.page}`
    );
  };
  addContact = (payload: AllTypes): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_CONTACT}`, payload);
  };
  editContact = (
    payload: PatientTypes
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.put(`${apiPath.EDIT_CONTACT}`, payload);
  };
  getAllClinicians = (payload: {
    xTenant: string;
    size: number;
    page: number;
    searchString: string;
  }): Promise<ResponseArrayContentEntity<ClinicianPayload>> => {
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
  addClinician = (
    payload: ClinicianPayload
  ): Promise<ResponseContentEntity<null>> => {
    return axiosInstance.post(`${apiPath.ADD_CLINICIAN}`, payload);
  };
  editClinician = (
    payload: PatientTypes
  ): Promise<ResponseContentEntity<null>> => {
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
  ): Promise<ResponseContentEntity<ClinicianPayload>> => {
    return axiosInstance.get(`${apiPath.GET_CLINICIAN_BY_ID}/${clinicianId}`);
  };
  getLocationById = (
    locationId: string
  ): Promise<ResponseContentEntity<LocationPayload>> => {
    return axiosInstance.get(
      `${apiPath.GET_LOCATION_DETAILS_BY_ID}/${locationId}`
    );
  };
}
const practiceProfileService = new PracticeProfileService();
Object.freeze(practiceProfileService);

export default practiceProfileService;
