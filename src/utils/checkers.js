function isNonEmptyString(str) {
  return (str && typeof(str) === 'string');
}

function isObject(obj) {
  return obj && typeof(obj) === 'object';
}

function isNonNegativeInteger(num) {
  return (Number.isInteger(num) && num >= 0);
}

function isValidPath(path) {
  return (typeof(path) === 'string'
    || path instanceof Buffer
    || path instanceof URL);
}

export {
  isNonEmptyString,
  isObject,
  isNonNegativeInteger,
  isValidPath,
}