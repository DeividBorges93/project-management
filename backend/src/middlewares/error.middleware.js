const errorMiddleware = (error, _req, res) => {
  if (error.code) {
    console.log(error.message);

    return res.status(error.code).json(error.message);
  }

  return res.status(500).json(error.message);
};

module.exports = errorMiddleware;
