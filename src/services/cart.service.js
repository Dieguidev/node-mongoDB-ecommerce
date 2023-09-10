import CartModel from '../db/models/cart.model.js';

export default class CartService {
  constructor() {}

  async getCart(id) {
    const cart = await CartModel.findById(id);
    return cart;
  }

  async getAllCarts(query) {
    const { limit, offset } = query;
    const response = await CartModel.find().skip(offset).limit(limit);
    return response;

  }

  async getCartByUserId(userId) {
    const cart = await CartModel.findOne({ userId });
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
    const updatedCart = await Cart.findByIdAndUpdate(
      id,
      {
        $set: changes,
      },
      { new: true }
    );
    return updatedCart;
  }

  async deleteCart(id) {
    const cart = await CartModel.findByIdAndDelete(id);
    return cart;
  }

  async addProductToCart(cartId, productId) {
    const cart = await CartModel.findById(cartId);
    cart.products.push(productId);
    await cart.save();
    return cart;
  }

  async deleteProductFromCart(cartId, productId) {
    const cart = await CartModel.findById(cartId);
    cart.products.pull(productId);
    await cart.save();
    return cart;
  }

}


