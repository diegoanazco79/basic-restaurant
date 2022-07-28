/**
 * Returns the dictionary structure according to the current language
 * @param {String} lang
 * @param {Object} lnEn
 * @param {Object} lnEs
 */
const getDictionary = (lang, lnEn, lnEs) => {
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
