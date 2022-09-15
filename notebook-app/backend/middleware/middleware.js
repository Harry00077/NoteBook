const jwt = require("jsonwebtoken");

const checkingSignUpData = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "First Name is Required" });
    return;
  }
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Requied" });
    return;
  }
  next();
};

const checkingLogInData = (req, res, next) => {
  if (!req.body.email) {
    res.status(400).json({ message: "Email is Required" });
    return;
  }
  if (!req.body.password) {
    res.status(400).json({ message: "Password is Required" });
    return;
  }
  next();
};

const fetchUser = (req, res, next) => {
  // Get user from jwt token and add id to req object
  const token = req.headers["auth_token"];

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.id;
    req.note = req.params.id;
    next();
    return;
  } catch (error) {
    res.status(401).json({ message: "Please authenticate with a valid Token" }); //401 acess denied
  }
};

const validateNewNote = (req, res, next) => {
  if (!req.body.title) {
    res.status(400).json({ message: " Title is Required" });
    return;
  }
  if (!req.body.text) {
    res.status(400).json({ message: " Text Data is Required" });
    return;
  }
  next();
};

module.exports = {
  checkingSignUpData,
  checkingLogInData,
  fetchUser,
  validateNewNote,
};
