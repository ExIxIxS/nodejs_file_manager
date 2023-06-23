function handleError(err, message) {
  console.error('Operation failed');
  console.log(message);
  console.log(err);
}

export {
  handleError,
}
