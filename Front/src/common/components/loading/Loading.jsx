import React from "react";
import { makeStyles } from "@material-ui/core";
import { dangerColor } from "../../../common/assets/jss/appStyles";
import LottieAnimation from "../lottie/LottieAnimation";
import error from "../../../common/assets/images/lottie/connection-error.json";
import loading from "../../../common/assets/images/lottie/loading.json";

const useStyles = makeStyles(() => ({
  loading: {
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: dangerColor,
    fontWeight: 600,
  },
}));

const Loading = ({ errors = [] }) => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <div className={classes.spinner}>
        {errors.length === 0 && <LottieAnimation lotti={loading} width={150} height={150} />}
        {errors.length > 0 && <LottieAnimation lotti={error} width={250} height={250} />}
        {errors[0]}
      </div>
    </div>
  );
};

export default Loading;
