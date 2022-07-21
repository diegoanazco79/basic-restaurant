import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import * as yup from 'yup';

import { loginToken, loginUser } from 'store/slices/auth';
import getDictionary from '../helpers/functions';
import api from '../../../helpers/functions/axiosConfig';

const useLogin = () => {
  const dispatch = useDispatch();
  const setAuthToken = (token) => dispatch(loginToken(token));
  const setAuthUser = (user) => dispatch(loginUser(user));

  const lang = useSelector((state) => state.uiSettings.lang);
  const srcLang = getDictionary(lang);
  const loginDict = srcLang.loginForm;

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);

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

  const loginSign = useMutation(
    (body) => api.post('/api/auth/login', body),
    {
      onError: () => {
        setLoginError(true);
      },
      onSuccess: (data) => {
        setLoginError(false);
        setAuthToken(data?.data?.token);
        setAuthUser(data?.data?.user);
      },
    },
  );

  const submitLoginForm = (email, password) => {
    const body = {
      email,
      password,
    };
    loginSign.mutate(body);
  };

  /**
 * It toggles the showPassword state variable.
 */
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /* Send a Google Token to backend */
  const googleSign = useMutation(
    (body) => api.post('/api/auth/google', body),
  );

  /**
 * It handles the response from the Google Sign-In API.
 * @param response - The response object from the Google Sign-In API.
 */
  const handleCallbackResponse = (response) => {
    const body = {
      id_token: response.credential,
    };
    googleSign.mutate(body);
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
  }, []); // eslint-disable-line

  return {
    /* States */
    showPassword,
    loginFormValidationSchema,
    loginError,
    loginSign,

    /* States functions */

    /* Functions */
    handleClickShowPassword,
    submitLoginForm,
  };
};

export default useLogin;
