import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import loaderReducer from "./auth/loaderReducer";
import loginReducer from "./auth/loginReducer";
import snackbarReducer from "./auth/snackbarReducer";
import verifyLinkReducer from "./auth/verifyLinkReducer";
import intervalsReducer from "./intervals/intervalsReducer";

const store = configureStore({
  reducer: {
    loginReducer: loginReducer,
    snackbarReducer: snackbarReducer,
    loaderReducer: loaderReducer,
    verifyLinkReducer: verifyLinkReducer,
    intervalsReducer: intervalsReducer,

  }
});

export type RootState = ReturnType<typeof store.getState>;

export const useReduxDispatch = useDispatch<typeof store.dispatch>;
export const useReduxSelector = useSelector<RootState>;

export default store;
