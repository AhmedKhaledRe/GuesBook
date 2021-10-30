import React, { useState } from "react";
import { OutlinedInput, makeStyles } from "@material-ui/core";
import { mainBlue } from "../../../common/assets/jss/appStyles";
import { Visibility, VisibilityOff, Mail, Lock } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  // input
  input: {
    height: 42,
    width: "100%",
    margin: "10px auto",
    "& svg": {
      marginRight: 10,
      color: mainBlue,
    },
    "& .MuiOutlinedInput-input": {
      padding: "2.5px 14px",
    },
    "&.MuiOutlinedInput-adornedEnd": {
      paddingRight: "0px",
    },
  },
  //eyeIcon
  eyeIcon: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const RegisterInput = ({ meta: { touched, invalid, error }, input, name, type, disabled, placeholder }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <OutlinedInput
      className={classes.input}
      disabled={disabled}
      placeholder={placeholder}
      startAdornment={(type === "email" && <Mail />) || (type === "password" && <Lock />)}
      endAdornment={
        type === "password" && (
          <div className={classes.eyeIcon} onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
            {values.showPassword ? <Visibility /> : <VisibilityOff />}
          </div>
        )
      }
      required
      name={name}
      type={type === "password" ? (values.showPassword ? "text" : "password") : type}
      helpertext={touched ? error : ""}
      error={touched && invalid}
      {...input}
    />
  );
};

export default RegisterInput;
