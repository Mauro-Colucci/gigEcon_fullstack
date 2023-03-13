import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "You are not authenticated!"));

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.userId = decoded.id;
    req.isSeller = decoded.isSeller;
    next();
  });
};

export default verifyToken;
