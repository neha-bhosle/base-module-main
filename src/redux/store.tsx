import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import loaderReducer from "./auth/loaderReducer";
import loginReducer from "./auth/loginReducer";
import EditPracticeReducer from "./auth/profile/edit-practice-reducer";
import GetAllAmericanStatesReducer from "./auth/profile/get-all-states-reducer";
import GetAllLocationDetailsReducer from "./auth/profile/get-location-details";
import GetAllPracticeDetailsReducer from "./auth/profile/get-profile-reducer";
import snackbarReducer from "./auth/snackbarReducer";
import verifyLinkReducer from "./auth/verifyLinkReducer";
import intervalsReducer from "./intervals/intervalsReducer";
import AddPracticeLocationReducer from "./auth/profile/add-practice-location-reducer";
import EditLocationReducer from "./auth/profile/edit-location-reducer";
import EditLocationStatusReducer from "./auth/profile/edit-location-status-reduxer";
import GetAllStaffReducer from "./auth/profile/get-all-staff-reducer";
import EditStaffReducer from "./auth/profile/edit-staff-reducer";
import AddStaffReducer from "./auth/profile/add-staff-reducer";
import EditStaffStatusReducer from "./auth/profile/edit-staff-status-reducer";
import GetAllContactsReducer from "./auth/profile/get-all-contacts-reducer";
import AddContactsReducer from "./auth/profile/add-contacts-reducer";
import EditContactsReducer from "./auth/profile/edit-contacts-reducer";
import GetAllCliniciansReducer from "./auth/profile/get-all-clinicians";
import GetAllWorkLocationClinicianReducer from "./auth/profile/get-all-worklocation-clinicians";
import GetAllSupervisingCliniciansReducer from "./auth/profile/get-all-supervising-clinicians";
import AddClinicianReducer from "./auth/profile/add-clinician-reducer";
import EditClinicianReducer from "./auth/profile/edit-clinician-reducer";
import GetClinicianByIdReducer from "./auth/profile/get-clinician-by-id-reducer";
const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    snackbarReducer: snackbarReducer,
    loaderReducer: loaderReducer,
    verifyLinkReducer: verifyLinkReducer,
    intervalsReducer: intervalsReducer,
    GetAllPracticeDetailsReducer: GetAllPracticeDetailsReducer,
    EditPracticeReducer: EditPracticeReducer,
    GetAllLocationDetailsReducer: GetAllLocationDetailsReducer,
    GetAllAmericanStatesReducer: GetAllAmericanStatesReducer,
    AddPracticeLocationReducer: AddPracticeLocationReducer,
    EditLocationReducer: EditLocationReducer,
    EditLocationStatusReducer: EditLocationStatusReducer,
    GetAllStaffReducer: GetAllStaffReducer,
    EditStaffReducer: EditStaffReducer,
    AddStaffReducer: AddStaffReducer,
    EditStaffStatusReducer: EditStaffStatusReducer,
    GetAllContactsReducer: GetAllContactsReducer,
    AddContactsReducer: AddContactsReducer,
    EditContactsReducer: EditContactsReducer,
    GetAllCliniciansReducer: GetAllCliniciansReducer,
    GetAllWorkLocationClinicianReducer: GetAllWorkLocationClinicianReducer,
    GetAllSupervisingCliniciansReducer: GetAllSupervisingCliniciansReducer,
    AddClinicianReducer: AddClinicianReducer,
    EditClinicianReducer: EditClinicianReducer,
    GetClinicianByIdReducer: GetClinicianByIdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useReduxDispatch = useDispatch<typeof store.dispatch>;
export const useReduxSelector = useSelector<RootState>;

export default store;
