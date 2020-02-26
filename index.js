let driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, key, value);
}
