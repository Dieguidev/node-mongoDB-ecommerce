import OrderModel from '../db/models/order.model.js';

export default class OrderService {
  constructor() {}

  async createOrder(order) {
    const newOrder = await OrderModel.create(order);
    return newOrder;
  }

  async getAllOrders(query) {
    const { limit, offset } = query;
    const response = await OrderModel.find().skip(offset).limit(limit);
    return response;
  }

  async getOrderById(id) {
    const order = await OrderModel.findById(id);
    return order;
  }

  async getOrderByUserId(userId) {
    const order = await OrderModel.find({ userId });
    return order;
  }

  async updateOrder(id, order) {
    const updatedOrder = await OrderModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return updatedOrder;
  }

  async deleteOrder(id) {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    return deletedOrder;
  }
}
