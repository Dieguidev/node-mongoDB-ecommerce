import boom from '@hapi/boom';
import ProductModel from '../db/models/product.model.js';

export default class ProductService {
  constructor() {}

  async getAllProducts(query) {
    const { limit, offset } = query;
    const response = await ProductModel.find().skip(offset).limit(limit);
    return response;
  }

  async getProductsByCategory(category) {
    const products = await ProductModel.find({ categories:{$in: [category]} });
    return products;
  }

  async getProductById(id) {
    const product = await ProductModel.findById(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async getProductByTitle(title) {
    const product = await ProductModel.findOne({ title });

    return product;
  }

  async createProduct(newProduct) {
    const productModel = new ProductModel(newProduct);
    const saveProduct = await productModel.save();
    return saveProduct;
  }

  async updateProduct(id, changes) {
    const product = await ProductModel.findByIdAndUpdate(id, changes, {
      new: true,
    });
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

  async deleteProduct(id) {
    const product = await ProductModel.findByIdAndDelete(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return product;
  }

}
