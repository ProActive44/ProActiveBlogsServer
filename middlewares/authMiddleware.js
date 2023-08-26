import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.autherization?.split(" ")[1];

    // console.log(req.headers.autherization)

    if (!token) {
      return res.status(400).send({ msg: "please login again" });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        res.status(400).send({ msg: "please login again" });
      }
      if (decoded) {
        req.body.userId = decoded.userId;
        next();
      }
    });
  } catch (error) {
    res.status(500).send({ msg: "Error Occurred During autherization" }); 
  }
};

module.exports = authMiddleware;
