function handleError(err, comment) {
  console.log('Start of error handling');
  console.error('Operation failed');
  console.log(comment);
  console.log(err);
  console.log('End of error handling');
}

export {
  handleError,
}
