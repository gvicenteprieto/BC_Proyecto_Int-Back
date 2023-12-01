import {
  getProductsService,
  createProductService,
  getProductByIdService,
  getProductByNameService,
  deleteProductService,
  updateProductService,
} from "../service/productService.js";

const getProductsController = async (request, response) => {
  try {
    const products = await getProductsService();
    if (products.length === 0) {
      return response.status(404).json({
        message: "Products not found",
      });
    }
    response.status(200).json({products});
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const createProductController = async (request, response) => {
  try {
    const newProduct = await createProductService(request);
    if (newProduct.message) {
      return response.status(400).json({
        message: newProduct.message,
      });
    }
    response.status(201).json({
      newProduct,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      statuscode: 500,
    });
  }
};

const getProductByIdController = async (request, response) => {
  try {
    const product = await getProductByIdService(request);
    if (!product) {
      return response.status(404).json({
        message: "Product not found",
      });
    }
    response.json({
      message: "Product found",
      product,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
      statuscode: 500,
    });
  }
};

const getProductByNameController = async (request, response) => {
  try {
    const product = await getProductByNameService(request);
    if (!product) {
      return response.status(404).json({
        message: "Product not found.",
      });
    }
    response.json({
      message: "Product found", product,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const updateProductController = async (request, response) => {
  try {
    const updatedProduct = await updateProductService(request);
    if (!updatedProduct) {
      return response.status(404).json({
        message: "Product not found",
      });
    }
    response.status(201).json(updatedProduct);
  } catch (error) {
    response.status(500).json({
      message: error.message,
      statuscode: 500,
    });
  }
};

const deleteProductController = async (request, response) => {
  try {
    const deleteProduct = await deleteProductService(request);
    response.status(200).json(deleteProduct);
  } catch (error) {
    response.status(500).json({
      message: error.message,
      statuscode: 500,
    });
  }
};

export {
  getProductsController,
  getProductByIdController,
  getProductByNameController,
  updateProductController,
  createProductController,
  deleteProductController,
};
