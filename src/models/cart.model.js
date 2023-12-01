import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  user_id: { type: String, required: [true, "User id is required"] },
  product_id: { type: String, required: [true, "Product id is required"] },
  quantity: { type: Number, required: [true, "Quantity is required"] },
  total: { type: Number, required: [true, "Total is required"] }
});

const CartModel = model("Cart", cartSchema);

export default CartModel;
