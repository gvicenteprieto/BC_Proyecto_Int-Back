import jwt from "jsonwebtoken";
import UserModel from "../models/users.model.js";

const validateToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Token not found." });
  try {

    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(401).json({ message: "Invalid Token" });

    req.user = user;

    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid Token" });
  }
};

export default validateToken;
