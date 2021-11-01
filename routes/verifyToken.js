const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({ message: "Token is not valid" });
      }
      req.user = user;
      console.log(user);
      next();
    });
  } else {
    res.status(401).json({ message: "You are not authenticated" });
  }
};

const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id == req.params.id || req.user.isAdmin) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "You ar not allowed to take this action" });
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth };
