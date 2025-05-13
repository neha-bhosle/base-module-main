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
import AddPracticeLocationReducer from "./auth/profile/add-practice-reducer";

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
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useReduxDispatch = useDispatch<typeof store.dispatch>;
export const useReduxSelector = useSelector<RootState>;

export default store;
