import { Schema, model } from "mongoose";

const cartSchema = new Schema({
    //id_product: { type: Number },
    name: { type: String, required: [true, "Name is required"], unique: true },
    
    price: Number,
    stock: Number,
    description: String,
    image: String,
    //   category: String,
    //   image: String,
    });

const CartModel = model("Cart", cartSchema);

export default CartModel;
