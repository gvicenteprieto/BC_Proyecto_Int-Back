import express from "express";
import {
  getProductsController,
  createProductController,
  getProductByIdController,
  getProductByNameController,
  updateProductController,
  deleteProductController
} from '../controller/productController.js';

// middleware: post and put routes
import productBodyValidator from "../utils/productBodyValidator.js";

const routerProducts = express.Router();

routerProducts.get("/products",  getProductsController);
routerProducts.post('/product', productBodyValidator, createProductController)
routerProducts.get('/product/:id', getProductByIdController)
routerProducts.get("/product-name/:name", getProductByNameController);
routerProducts.put('/product/:id',  updateProductController)
routerProducts.delete('/product/:id', deleteProductController)

export default routerProducts;