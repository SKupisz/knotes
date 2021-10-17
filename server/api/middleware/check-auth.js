const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log(req.body);
    const decoded = jwt.verify(req.body.token, process.env.JWT_KEY);
    req.userData = decoded;
  } catch (error) {
    return res.status(401).json({
      message: "auth failed",
    });
  }
  next();
};
