import OrderService from "../services/order.service.js";
const orderService = new OrderService();


export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getOrders();
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
}

export const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}

export const getOrderByUserId = async (req, res, next) => {
  try {
    const order = await orderService.getOrderByUserId(req.params.userId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}


export const createOrder = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
}

export const updateOrder = async (req, res, next) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
}
