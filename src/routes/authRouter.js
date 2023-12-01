import { Router } from "express";
import { loginController , registerController} from "../controller/authController.js";

import { check } from "express-validator";
import validator from "../utils/validator.js";

const router = Router();

router.post(
  "/login",
  [
    check("email", "El email es obligaorio").isEmail(),
    //check("password", "El password es obligaorio").not().isEmpty(),
    validator,
  ],
  loginController
);

router.post(
  "/register",
  [
    check("email", "El email es obligaorio").isEmail(),
    //check("password", "El password es obligaorio").not().isEmpty(),
    validator,
  ],
  loginController
);

export default router;
