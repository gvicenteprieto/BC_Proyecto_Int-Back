import express from "express";
import {
  getProductsController,
  createProductController,
  getProductByIdController,
  getProductByNameController,
  updateProductController,
  deleteProductController
} from '../controller/productController.js';


import productBodyValidator from "../utils/productBodyValidator.js";

import {body} from 'express-validator';

const routerProducts = express.Router();

routerProducts.get("/products",  getProductsController);
routerProducts.post('/product', productBodyValidator, createProductController)
routerProducts.get('/product/:id', getProductByIdController)
routerProducts.get("/product-name/:name", getProductByNameController);
routerProducts.put('/product/:id',  body('name').isString().notEmpty(), updateProductController)
routerProducts.delete('/product/:id', deleteProductController)


// router.put('/product/:id', productParamValidator, productBodyValidator,updateProductController)

//post con validación
//router.post('/product', productBodyValidator, createProductController)
//get con validación
//router.get('/product/:id', productParamValidator, getProductByIdController)






// router.put('/product/:id', productParamValidator, productBodyValidator,updateProductController)
// router.put('/product/:id',  productBodyValidator, updateProductController)
// router.delete('/product/:id', productParamValidator, deleteProductController)

//expres validator ver clase 87 últimos 25 minutos


export default routerProducts;