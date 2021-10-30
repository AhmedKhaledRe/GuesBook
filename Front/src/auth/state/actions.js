import Types from "./types";
import Services from "../services";
import actionCall from "../../common/helper/actionCall";
import authService from "../services/auth-service";

export const signIn = (values, redirect) => async (dispatch) =>
  actionCall({ service: () => Services.login(values), success: Types.AUTH_SUCCESS }, dispatch, redirect);

export const register = (values, redirect) => async (dispatch) =>
  actionCall({ service: () => Services.register(values), success: Types.AUTH_SUCCESS }, dispatch, redirect);

export const getUser = () => {
  return (dispatch) => {
    if (authService.isAuthenticated()) {
      const username = authService.getUsername();
      dispatch({ type: Types.AUTH_SUCCESS, payload: username });
    } else signOut();
  };
};

export const signOut = (redirect) => async (dispatch) => {
  authService.invalidateUser();
  redirect && redirect();
  dispatch({ type: Types.AUTH_CLEAN, payload: false });
};

// Profile
export const authRequest = () => ({ type: Types.AUTH_REQUEST });
export const cleanErrors = () => ({ type: Types.AUTH_CLEAN });
