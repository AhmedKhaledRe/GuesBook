import Types from "./types";

const INITIAL_STATE = {
  error: [],
  loading: false,
  user: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_SUCCESS:
      return { user: action.payload, error: [], loading: false };
    case Types.AUTH_ERROR:
      return { error: [...action.payload], user: false, loading: false };
    case Types.AUTH_CLEAN:
      return { error: [], user: false, loading: false };
    case Types.AUTH_REQUEST:
      return { error: [], user: false, loading: true };
    default:
      return state;
  }
}
