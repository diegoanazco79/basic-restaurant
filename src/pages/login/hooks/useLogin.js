import { useState } from 'react';
import { useSelector } from 'react-redux';
import * as yup from 'yup';

import getDictionary from '../helpers/functions';

const useLogin = () => {
  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang);
  const loginDict = srcLang.loginForm;

  const [showPassword, setShowPassword] = useState(false);

  const loginFormValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email(loginDict.warnings.emailValid)
      .required(loginDict.warnings.emailRequired),
    password: yup
      .string()
      .min(8, loginDict.warnings.passwordValid)
      .required(loginDict.warnings.passwordRequired),
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
