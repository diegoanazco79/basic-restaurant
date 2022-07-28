import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleLanguage } from '../../../store/slices/uiSettings';

const useSelectLanguage = () => {
  const lang = useSelector((state) => state.uiSettings.lang);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState(lang);
  const setLangCode = (langCode) => dispatch(toggleLanguage(langCode));

  const handleChange = () => {
    setLanguage(lang === 'es' ? 'en' : 'es');
    setLangCode(lang === 'es' ? 'en' : 'es');
  };

  return {
    /* States */
    language,

    /* States functions */

    /* Functions */
    handleChange,
  };
};

export default useSelectLanguage;
