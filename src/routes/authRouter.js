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

//middleware authentorization 
import validateToken from "../utils/validateToken.js";  

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

//routes users with authentorization middleware
routerAuth.get("/users", validateToken, getUsersController);
routerAuth.get("/user-email/:email", validateToken, getUserByEmailController);
routerAuth.get("/user/:id", validateToken, getUserByIdController);
routerAuth.delete("/user/:id", validateToken, deleteUserByIdController);

export default routerAuth;
