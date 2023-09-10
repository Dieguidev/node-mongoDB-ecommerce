import ProductService from "../services/product.services.js";
const productServices = new ProductService();

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await productServices.getAllProducts(req.query);
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
}

export const getProductById = async (req, res, next) => {
  try {
    const product = await productServices.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

export const createProduct = async (req, res, next) => {
  try {
    const product = await productServices.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
}

export const updateProduct = async (req, res, next) => {
  try {
    const product = await productServices.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
}

export const deleteProduct = async (req, res, next) => {
  try {
    const product = await productServices.deleteProduct(req.params.id);
    res.status(200).json('Product deleted successfully');
  } catch (error) {
    next(error);
  }
}
