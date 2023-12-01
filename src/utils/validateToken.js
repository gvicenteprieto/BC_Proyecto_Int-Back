import jwt from "jsonwebtoken";
import UserModel from "../models/users.model.js";

const validateToken = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ message: "Token no encontrado." });

  try {
    // const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // const user = await userModel.findById(decoded.id);
    // if (!user) return res.status(404).json({ message: "Usuario no encontrado." });
    // req.user = user;
    // next();
    const { email } = jwt.verify(token, process.env.SECRET_KEY);
    const user = await UserModel.findOne({ email });

    if (!user) return res.status(401).json({ message: "Token inválido." });

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Token inválido." });
  }
};

export default validateToken;
