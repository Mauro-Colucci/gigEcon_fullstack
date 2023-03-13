const errorHandler = (err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";

  res.status(errorStatus).send(errorMessage);
  //res.status(errorStatus).json({ message: errorMessage, isError: true });
};

export default errorHandler;
