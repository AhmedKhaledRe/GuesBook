import authService from "../../../auth/services/auth-service";
import Services from "../services";
import Types from "./types";
import TypesAuth from "../../../auth/state/types";
import actionCall from "../../../common/helper/actionCall";
import { signOut } from "../../../auth/state/actions";

export const fetchMessageByIdInit = () => ({ type: Types.FETCH_MESSAGE_BY_ID_REQUEST });

export const fetchMessagesInit = () => ({ type: Types.FETCH_MESSAGES_REQUEST });

export const createMessageInit = () => ({ type: Types.CREATE_MESSAGE_REQUEST });

export const updateMessageRequest = () => ({ type: Types.UPDATE_MESSAGE_REQUEST });

export const resetMessageErrors = () => ({ type: Types.RESET_MESSAGE_ERRORS });

export const verifyMessageOwnerReq = (id, callback) => async (dispatch) =>
  actionCall({ service: () => Services.verifyMessageOwner(id), success: Types.VERIFY_OWNER_SUCCESS }, dispatch, callback);

export const fetchMessagesReq = (isManage) => async (dispatch) =>
  actionCall({ service: () => Services.fetchMessages(isManage), success: Types.FETCH_MESSAGES_SUCCESS }, dispatch);

export const fetchMessageByIdReq = (id, callback) => async (dispatch) =>
  actionCall({ service: () => Services.fetchMessageById(id), success: Types.FETCH_MESSAGE_BY_ID_SUCCESS }, dispatch, callback);

export const createMessageReq = (messageData, callback) => async (dispatch) =>
  actionCall({ service: () => Services.createMessage(messageData), success: Types.CREATE_MESSAGE_SUCCESS }, dispatch, callback);

export const updateMessageReq = (id, messageData, callback) => async (dispatch) =>
  actionCall({ service: () => Services.updateMessage(id, messageData), success: Types.UPDATE_MESSAGE_SUCCESS }, dispatch, callback);

export const deleteMessageReq = (id, callback) => async (dispatch) =>
  actionCall({ service: () => Services.deleteMessage(id), success: Types.FETCH_MESSAGES_SUCCESS }, dispatch, callback);

export const checkAuthState = () => {
  return (dispatch) => {
    if (authService.isAuthenticated()) {
      const username = authService.getUsername();
      dispatch({ type: TypesAuth.AUTH_SUCCESS, payload: username });
    } else signOut();
  };
};
