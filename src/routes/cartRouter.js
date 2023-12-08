import express from "express";
import {
  getCartsController,
  getCartByIdController,
  addProductToCartController,
  deleteCartByIdController,
  getCartByUsernameController,
  addProductController
} from "../controller/cartController.js";

const routerCart = express.Router();

routerCart.get("/carts", getCartsController);

routerCart.get("/cart/:id", getCartByIdController);

routerCart.get("/cart-user/:username", getCartByUsernameController);

routerCart.post("/cart", addProductToCartController);
routerCart.post("/cart/:username", addProductToCartController);

routerCart.delete("/cart/:id", deleteCartByIdController);

export default routerCart;
