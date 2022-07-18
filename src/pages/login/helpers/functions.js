import lnEn from './dictionary/languageEn';
import lnEs from './dictionary/languageEs';

/**
 * Returns the dictionary structure according to the current language
 * @param {String} lang
 */
const getDictionary = (lang) => {
  switch (lang) {
    case 'en':
      return lnEn;

    case 'es':
      return lnEs;

    default:
      return lnEs;
  }
};

export default getDictionary;
