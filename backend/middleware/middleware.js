const checkingSignUpData = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "First Name is Required" });
  }
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Requied" });
  }
  next();
};

const checkingLogInData = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Required" });
  }
  next();
};

module.exports = { checkingSignUpData, checkingLogInData };
