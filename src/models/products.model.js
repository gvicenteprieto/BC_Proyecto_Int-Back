import { Schema, model } from "mongoose";

const productSchema = new Schema({

  //id : { type: String, required: [false, "Id is required"], unique: true },

  name: { type: String, required: [true, "Name is required"], unique: true },

  price: { type: Number, required: [true, "Price is required"] },

  stock: { type: Number, required: [true, "Stock is required"] },

  brand: { type: String, required: [true, "Brand is required"] },

  short_description: {type: String, required: [true, "Short description is required"] },

  long_description: { type: String, required: [true, "Long description is required"] },

  category: { type: String, required: [true, "Category is required"] },

  free_shipping: {type: Boolean, required: [false, "Free shipping is required"] },

  age_from: { type: Number, required: [true, "Age from is required"] },

  age_to: { type: Number, required: [true, "Age to is required"] },

  photo: { type: String, required: [true, "Photo is required"] },
});

const ProductModel = model("Product", productSchema);

export default ProductModel;
