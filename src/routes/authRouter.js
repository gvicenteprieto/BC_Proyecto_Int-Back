import { Router } from "express";
import {
  loginController,
  registerController,
  getUsersController,
  getUserByEmailController,
  getUserByIdController,
  deleteUserByIdController
} from "../controller/authController.js";

import { check } from "express-validator";
import validator from "../utils/validator.js";

const routerAuth = Router();

routerAuth.post(
  "/login",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validator,
  ],
  loginController
);

routerAuth.post(
  "/register",
  [
    check("username", "Username is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    validator,
  ],
  registerController
);

routerAuth.get("/users", getUsersController);
routerAuth.get("/user-email/:email", getUserByEmailController);
routerAuth.get("/user/:id", getUserByIdController);
routerAuth.delete("/user/:id", deleteUserByIdController);

export default routerAuth;
