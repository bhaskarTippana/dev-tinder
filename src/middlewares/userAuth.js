const jwt = require("jsonwebtoken");
const userAuth = async (req, res, next) => {
  try {
    const { token } = req?.cookies;
    if (!token) {
      throw new Error("Token is required");
    } else {
      const decodeUser = jwt.verify(token, "sidhu@1371");
      req.user = decodeUser;
      next();
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { userAuth };
