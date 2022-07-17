import { useState } from 'react';
import * as yup from 'yup';

const useLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const loginFormValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  /**
 * It toggles the showPassword state variable.
 */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return {
    /* States */
    showPassword,
    loginFormValidationSchema,

    /* States functions */

    /* Functions */
    handleClickShowPassword,

  };
};

export default useLogin;
