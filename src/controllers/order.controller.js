import OrderService from '../services/order.service.js';
const orderService = new OrderService();

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders(req.query);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const order = await orderService.getOrderByUserId(userId);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderMonthlyIncome = async (req, res, next) => {
  try {
    const income = await orderService.getOrderMonthlyIncome();
    res.status(200).json(income);
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
};

export const updateOrder = async (req, res, next) => {
  try {
    const order = await orderService.updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    await orderService.deleteOrder(id);
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    next(error);
  }
};
