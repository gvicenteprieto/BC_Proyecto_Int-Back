import express from "express";
import {
    addProductInCartController
} from '../controller/cartController.js';


const routerCart = express.Router();

routerCart.post('/cart', addProductInCartController)

export default routerCart;





