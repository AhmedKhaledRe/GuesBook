import { reducer as formReducer } from "redux-form";
import AuthReducer from "../../auth/state/reducer";
import MessagesReducer from "../../app/Messages/state/reducers";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  form: formReducer,
  auth: AuthReducer,
  // Apps
  messages: MessagesReducer,
};
