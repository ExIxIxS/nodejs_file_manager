function isNonEmptyString(str) {
  return (str && typeof(str) === 'string');
}

function isObject(obj) {
  return obj && typeof(obj) === 'object';
}

function isNonNegativeInteger(num) {
  return (Number.isInteger(num) && num >= 0);
}

export {
  isNonEmptyString,
  isObject,
  isNonNegativeInteger,
}