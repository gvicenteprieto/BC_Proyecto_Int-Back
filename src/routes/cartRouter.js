import express from "express";
import {
  getCartByUserIdController,
  addProductToCartController,
} from "../controller/cartController.js";

const routerCart = express.Router();

routerCart.post("/cart", addProductToCartController);
routerCart.get("/cart/:userId", getCartByUserIdController);

export default routerCart;
