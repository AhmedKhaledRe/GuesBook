import { toast } from "react-toastify";

// Extract every value from the objects
const getObjectValues = (obj) => (obj && typeof obj === "object" ? Object.values(obj).map(getObjectValues).flat() : [obj]);

export const handleError = (err, type, dispatch, showToast = true, warn) => {
  if (err.response) {
    if (err.response.status >= 500) {
      showToast && toast[warn ? "warn" : "error"]("Something went wrong, please try again later");
      dispatch({ type, payload: ["Something went wrong, please try again later"] });
    } else if (err.response.status >= 400) {
      let errResData = err.response.data;
      showToast && toast[warn ? "warn" : "error"](getObjectValues(errResData).join(" : "));
      dispatch({ type, payload: getObjectValues(errResData) });
    }
  } else {
    showToast && toast[warn ? "warn" : "error"]("Something went wrong, please try again later");
    dispatch({ type, payload: ["Something went wrong, please try again later"] });
  }
};
