function handleError(err, comment) {
  console.error('Operation failed');
  console.log(comment);
  console.log(err);
}

export {
  handleError,
}
