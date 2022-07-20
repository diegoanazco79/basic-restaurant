import { useState, useEffect } from 'react';
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

  /**
 * It handles the response from the Google Sign-In API.
 * @param response - The response object from the Google Sign-In API.
 */
  const handleCallbackResponse = (response) => {
    console.log(response.credential); // TO DO: Call backend google auth endpoint
  };

  /* It is used to initialize the Google  Sign-In API. */
  useEffect(() => {
    // eslint-disable-next-line no-undef
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' },
    );
  }, []);

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
