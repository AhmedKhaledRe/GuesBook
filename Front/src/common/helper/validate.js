export const validate = (values) => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = "Username min length is 4 characters!";
  }

  if (!values.email) {
    errors.email = "Please enter email!";
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = "Please enter password confirmation!";
  }

  if (values.password && values.passwordConfirmation && values.password !== values.passwordConfirmation) {
    errors.password = "Passwords must be the same";
  }

  return errors;
};
