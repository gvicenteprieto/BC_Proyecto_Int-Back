import ProductModel from "../models/products.model.js";

const getProductsService = async () => {
  try {
    const products = await ProductModel.find();
    return products;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getProductByIdService = async (req) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal server error");
  }
};

const getProductByNameService = async (request) => {
  try {
    const name = request.params.name;
    const product = await ProductModel.findOne({ name: name });
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Internal Server Error");
  }
};

const createProductService = async (req) => {
  try {
   const searchProduct = await ProductModel.findOne({ name: req.body.name });
      if (searchProduct) {
         return { message: "Product already exists" };
      } else {
         const newProduct = await ProductModel.create(req.body);
         return newProduct;
      }
   } catch (error) {
      console.error(error);
      throw new Error("Internal server error");
   }

};

const updateProductService = async (request) => {
  const id = request.params.id;
  try {
    const product = request.body;
    const updatedProduct = await ProductModel.findByIdAndUpdate(id, product);
    if (!updatedProduct) return { message: "Product not found" };
    return { message: "Product already updated", updatedProduct };
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};

const deleteProductService = async (request) => {
  const id = request.params.id;
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    if (!deletedProduct) {
      return { message: "Product not found" };
    } else {
      return { message: "product deleted", deletedProduct };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Internal server error");
  }
};
export {
  getProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
  getProductByNameService,
};
