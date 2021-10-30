import Types from "./types";

const INITIAL_STATE = {
  messages: {
    data: [],
    errors: [],
    loading: false,
  },
  message: {
    data: {},
    errors: [],
    loading: false,
    owner: false,
  },
};

export default function messageReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.VERIFY_OWNER_REQUEST:
      return { ...state, message: { ...state.message, data: {}, errors: [], loading: true } };
    case Types.VERIFY_OWNER_SUCCESS:
      return { ...state, message: { ...state.message, errors: [], data: action.payload, loading: false } };
    case Types.VERIFY_OWNER_ERROR:
      return { ...state, message: { ...state.message, errors: [...action.payload], data: {}, loading: false } };

    case Types.FETCH_MESSAGES_REQUEST:
      return { ...state, messages: { ...state.messages, data: [], errors: [], loading: true } };
    case Types.FETCH_MESSAGES_SUCCESS:
      return { ...state, messages: { ...state.messages, errors: [], data: action.payload, loading: false } };
    case Types.FETCH_MESSAGES_ERROR:
      return { ...state, messages: { ...state.messages, errors: [...action.payload], data: [], loading: false } };

    case Types.FETCH_MESSAGE_BY_ID_REQUEST:
      return { ...state, message: { ...state.message, data: {}, errors: [], loading: true } };
    case Types.FETCH_MESSAGE_BY_ID_SUCCESS:
      return { ...state, message: { ...state.message, data: action.payload, errors: [], loading: false } };
    case Types.FETCH_MESSAGE_BY_ID_ERROR:
      return { ...state, message: { ...state.message, errors: [...action.payload], data: {}, loading: false } };

    case Types.UPDATE_MESSAGE_REQUEST:
      return { ...state, message: { ...state.message, errors: [], loading: true } };
    case Types.UPDATE_MESSAGE_SUCCESS:
      return { ...state, message: { ...state.message, data: action.payload, loading: false, errors: [] } };
    case Types.UPDATE_MESSAGE_ERROR:
      return { ...state, message: { ...state.message, errors: [...action.payload], loading: false } };

    case Types.CREATE_MESSAGE_REQUEST:
      return { ...state, message: { ...state.message, errors: [], loading: true } };
    case Types.CREATE_MESSAGE_SUCCESS:
      return { ...state, message: { ...state.message, data: action.payload, loading: false, errors: [] } };
    case Types.CREATE_MESSAGE_ERROR:
      return { ...state, message: { ...state.message, errors: [...action.payload], loading: false } };

    case Types.RESET_MESSAGE_ERRORS:
      return { message: { data: {}, errors: [], loading: false }, messages: { data: [], errors: [], loading: false } };
    default:
      return state;
  }
}
