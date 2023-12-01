import { addProductInCartService } from "../service/cartService.js";

const addProductInCartController = async (request, response) => {
  try {
    // const addProductToCart = await addProductInCartService(request);
    // response.json(addProductToCart);

    
    const { username } = request.params;
    const { idProduct, amountProducts } = request.body;
    const product = await getProductByIdService(idProduct);
    const Cart = [];
    for (let i = 0; i < amountProducts.length; i++) {
      const newProduct = await CartModel.create(product);
      Cart.push(newProduct);
    }


  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export {
  addProductInCartController
};

