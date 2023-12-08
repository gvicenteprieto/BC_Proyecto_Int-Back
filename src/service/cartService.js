import CartModel from "../models/cart.model.js";
import { getProductByIdService } from "./productService.js";

const getCartsService = async () => {
  try {
    const carts = await CartModel.find();
    return carts;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getCartByIdService = async (request) => {
  try {
    const cart = await CartModel.findById(request.params.id);
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getCartByUsernameService = async (request) => {
  try {
    const cart = await CartModel.findOne({ username: request.params.username });
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const addProductService = async (request) => {
  try {
    const { idProduct, qtyProducts } = request.body;
    const product = await getProductByIdService(idProduct);
    let cartProducts = [];
    for (let i = 0; i < qtyProducts; i++) {
      cartProducts.push(product);
    }
    return cartProducts;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const addProductToCartService = async (request) => {
  try {
    const { username } = request.params;
    const { idProduct, qtyProducts } = request.body;
    const product = await getProductByIdService(idProduct);
    
    let cartProducts = [];
    for (let i = 0; i < qtyProducts; i++) {
      cartProducts.push(product);
    }
    const cart = await CartModel.findOne({ username: username });

    if (!cart) {
      const newCart = await CartModel.create({
        username: username,
        products: cartProducts,
        total: product.price * qtyProducts,
      });
      return newCart;
    } else if (cart) {
      cart.products = [...cart.products, ...cartProducts];
      cart.total = cart.total + product.price * qtyProducts;
      const updatedCart = await CartModel.findByIdAndUpdate(cart._id, cart);
      return updatedCart;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const deleteCartByIdService = async (request) => {
  try {
    const cart = await CartModel.findByIdAndDelete(request.params.id);
    console.log(cart);
    return cart;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

export {
  getCartsService,
  getCartByIdService,
  addProductToCartService,
  deleteCartByIdService,
  getCartByUsernameService,
  addProductService
};
