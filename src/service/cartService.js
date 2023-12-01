import ProductModel from "../models/products.model.js";
import CartModel from "../models/cart.model.js";
import { getProductByIdService } from "./productService.js"
//import UserModel from "../models/user.model";



export const getProductsInCart = (products) => {
    return new Promise(async (resolve, reject) => {
        try {
            const productsInCart = await CartModel.find({ name: { $in: products } });
            resolve(productsInCart);
        } catch (error) {
            reject(error);
        }
    });
};

// export const addProductToCart = (product) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const newProduct = await CartModel.create(product);
//             resolve(newProduct);
//         } catch (error) {
//             reject(error);
//         }
//     });
// }

//seba:
export const addProductInCartService = async (request) => {
    try {
        const {username} = request.params
        // Vamos a recibir el idProduct y la cantidad (amount)
        const { idProduct, amountProducts } = request.body
        console.log(idProduct);
        console.log(amountProducts);
        // Buscamos el producto en la base de datos
        const product = await getProductByIdService(idProduct)
        console.log(product);
        // Buscamos el usuario en la base de datos

        const Cart = []
        for (let i = 0; i < amountProducts.length; i++) {
            const newProduct = await CartModel.create(product);
            Cart.push(newProduct)
        }

        const user = await UserModel.findOne({ username })
        console.log(user);

        // Agregamos el producto al carrito del usuario
        user.cart.push(Cart)
        // Guardamos el usuario

        await user.save()
        return user
    }
    catch (error) {
        console.log(error);
    }
}







export const deleteProductFromCart = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const productDeleted = await CartModel.findByIdAndDelete(id);
            resolve(productDeleted);
        } catch (error) {
            reject(error);
        }
    });
}



