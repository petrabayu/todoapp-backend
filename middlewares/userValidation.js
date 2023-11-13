function bodyValidationRegister(req, res, next) {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    res.status(400).send({
      message: "Field is not complete",
      statusText: "Field is not complete",
      statusCode: 400,
    });
  } else {
    next();
  }
}

function bodyValidationLogin(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).send({
      message: "Field is not complete",
      statusText: "Field is not complete",
      statusCode: 400,
    });
  } else {
    next();
  }
}

module.exports = {
  bodyValidationRegister,
  bodyValidationLogin,
};
