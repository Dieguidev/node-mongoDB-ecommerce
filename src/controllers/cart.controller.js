import CartService from "../services/cart.service.js";
const cartService = new CartService();

export const getCartById = async (req, res, next) => {
  try {
    const cart = await cartService.getCart(req.params.id);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const getAllCarts = async (req, res, next) => {
  try {
    const carts = await cartService.getAllCarts(req.query);
    res.status(200).json(carts);
  } catch (error) {
    next(error);
  }
}

export const getCartByUserId = async (req, res, next) =>{
  try {
    const cart = await cartService.getCartByUserId(req.params.userId);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const addProductToCart = async (req, res, next) => {
  try {
    const cart = await cartService.addProductToCart(req.params.id, req.body);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const deleteProductFromCart = async (req, res, next) => {
  try {
    const cart = await cartService.deleteProductFromCart(req.params.id, req.body);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const updateProductInCart = async (req, res, next) => {
  try {
    const cart = await cartService.updateProductInCart(req.params.id, req.body);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}
export const createCart = async (req, res, next) => {
  try {
    const cart = await cartService.createCart(req.body);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
}

export const deleteCart = async (req, res, next) => {
  try {
    const cart = await cartService.deleteCart(req.params.id);
    res.status(200).json('Cart deleted successfully');
  } catch (error) {
    next(error);
  }
}
