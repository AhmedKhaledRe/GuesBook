import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { primaryColor } from "../../../common/assets/jss/appStyles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(() => ({
  root: {
    margin: "10px auto",
    "& label.Mui-focused": {
      color: primaryColor,
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: primaryColor,
      },
    },
  },
}));

const MuiTextField = ({
  label,
  size,
  type,
  name,
  input,
  disabled,
  multiline,
  required = false,
  placeholder,
  rows = 1,
  value,
  meta: { touched, invalid, error },
}) => {
  const classes = useStyles();

  return (
    <TextField
      placeholder={placeholder}
      className={classes.root}
      name={name}
      value={value}
      multiline={multiline}
      rows={rows}
      label={label}
      size={size}
      disabled={disabled}
      type={type}
      required={required}
      margin="normal"
      variant="outlined"
      fullWidth
      helperText={touched && error}
      error={touched && invalid}
      {...input}
    />
  );
};

export default MuiTextField;
