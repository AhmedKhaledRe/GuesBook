import { handleError } from "../../config/http/handleError";

export default async function actionCall(options, dispatch, callback, errorHandling) {
  try {
    // call the service
    const { data } = (await options.service()) || "";
    // dispatch action to redux
    dispatch({
      type: options?.success || "",
      payload: options.payload || data,
    });
    // if there is callback function call it!
    callback && callback(data);
    return data;
  } catch (err) {
    // use error that added "Explicitly" or replace SUCCESS with ERROR : ACTION_TYPE_SUCCESS ==> ACTION_TYPE_ERROR
    let errorType = options.error ? options.error : options.success.replace("SUCCESS", "ERROR");
    //     Server Error * Error Type * Redux dispatch * Toast ErrorMSG * Toast WarnMSG
    //           |            |          |                |                 |
    handleError(err, errorType, dispatch, options.toast, options.warn, "");
    errorHandling && errorHandling();
  }
}
