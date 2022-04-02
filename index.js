function validateRegexData(originalData, validationType) {
  return mapRegexwithType[validationType].test(originalData);
}

const mapRegexwithType = {
  numeric: /^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/,
  "alphabets-with-space": /^[a-zA-Z ]*$/,
  "alpha-numeric": /^[a-z0-9 ]+$/i,
};

module.exports = validateRegexData;
