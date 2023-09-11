import boom from '@hapi/boom';
import CartModel from '../db/models/cart.model.js';

export default class CartService {
  constructor() {}

  async getCart(id) {
    const cart = await CartModel.findById(id);
    if (!cart) {
      throw boom.notFound('cart not found');
    }
    return cart;
  }

  async getAllCarts(query) {
    const { limit, offset } = query;
    const response = await CartModel.find().skip(offset).limit(limit);
    return response;
  }

  async getCartByUserId(userId) {
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      throw boom.notFound('cart not found');
    }
    return cart;
  }

  async createCart(cart) {
    const findCart = await CartModel.findOne({ userId: cart.userId });
    if (findCart) {
      return { message: 'cart already exist' };
    }
    const newCart = await CartModel.create(cart);
    return newCart;
  }

  async updateCart(id, changes) {
    const updatedCart = await CartModel.findByIdAndUpdate(
      id,
      {
        $set: changes,
      },
      { new: true },
    );
    return updatedCart;
  }

  async deleteCart(id) {
    const cart = await CartModel.findByIdAndDelete(id);
    if (cart === null) {
      throw boom.notFound('cart not found');
    }
    return cart;
  }

  async addProductToCart(userId, changes) {
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      const newCart = new CartModel({ userId, products: changes.products });
      await newCart.save();
      return newCart;
    }

    const existingProductIndex = cart.products.findIndex(
      (product) => product.productId === changes.products[0].productId,
    );

    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity +=
        changes.products[0].quantity;
    } else {
      cart.products.push(changes.products[0]);
    }

    await cart.save();
    return cart;
  }

  async deleteProductFromCart(userId, changes) {
    const { productId, quantity } = changes.products[0];
    const cart = await CartModel.findOne({ userId });
    if (!cart) {
      throw boom.notFound('Cart not found');

    }
    const productIndex = cart.products.findIndex(
      (product) => product.productId === productId,
    );

    if (productIndex === -1) {
      throw boom.notFound('Product not found in cart');
    };

    cart.products[productIndex].quantity -= quantity;

    if (cart.products[productIndex].quantity < 0) {
      cart.products[productIndex].quantity = 0;
    };

    if (cart.products[productIndex].quantity === 0) {
      cart.products.splice(productIndex, 1);
    };

    await cart.save();
    return cart;
  }
}
