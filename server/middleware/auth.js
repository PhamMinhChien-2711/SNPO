import jwt from 'jsonwebtoken'
import { CONFIG } from '../config/auth.js';


export const verifyToken = (req, res, next) => {
  const bearerToken = req.headers["authorization"];
  console.log(bearerToken, 'bearerToken');
  const token = bearerToken?.split(' ')[1]

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, CONFIG.TOKEN_KEY)
    console.log(decoded,'decoded');
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
