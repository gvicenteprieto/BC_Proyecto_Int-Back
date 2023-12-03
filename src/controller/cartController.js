import {
  getCartsService,
  getCartByIdService,
  getCartByUsernameService,
  addProductToCartService,
  deleteCartByIdService,
} from "../service/cartService.js";

const getCartsController = async (request, response) => {
  try {
    const carts = await getCartsService();
    response.json(carts);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getCartByIdController = async (request, response) => {
  try {
    const cart = await getCartByIdService(request);
    response.json(cart);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getCartByUsernameController = async (request, response) => {
  try {
    const cart = await getCartByUsernameService(request);
    response.json(cart);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
}

const addProductToCartController = async (request, response) => {
  try {
    const addProductToCart = await addProductToCartService(request);
    response.json(addProductToCart);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const deleteCartByIdController = async (request, response) => {
  try {
    const deleteCart = await deleteCartByIdService(request);
    response.json(deleteCart);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export {
  getCartsController,
  getCartByIdController,
  addProductToCartController,
  deleteCartByIdController,
  getCartByUsernameController
};
