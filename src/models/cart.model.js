import { Schema, model } from "mongoose";
// import ProductModel from "./products.model.js";
// import UserModel from "./users.model.js";

const cartSchema = new Schema({
  // user : { type: Schema.Types.ObjectId, ref: "User" },
  // products : [{ type: Schema.Types.ObjectId, ref: "Product" }],
  // total: { type: Number, required: [true, "Total is required"] },

  username: {
    type: String,
    required: [true, "Username is required"],
  },

  products: {
    type: Array,
    required: [true, "Products is required"],
  },

  total: {
    type: Number,
    required: [true, "Total is required"],
  },

});

const CartModel = model("Cart", cartSchema);

export default CartModel;
