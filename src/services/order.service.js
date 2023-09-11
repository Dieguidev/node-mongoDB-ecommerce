import boom from '@hapi/boom';
import OrderModel from '../db/models/order.model.js';
import ProductService from '../services/product.services.js';
const productService = new ProductService();

export default class OrderService {
  constructor() {}

  async createOrder(order) {
    let amount = 0;

    await Promise.all(
      order.products.map(async (product) => {
        const searchProduct = await productService.getProductById(
          product.productId,
        );
        amount += searchProduct.price * product.quantity;
      }),
    );

    order.amount = amount;

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
    if (order.length === 0) {
      throw boom.notFound('user no orders');
    }

    return order;
  }

  async getOrderMonthlyIncome() {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(
      new Date().setMonth(lastMonth.getMonth() - 1),
    );
    const income = await OrderModel.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    return income
  }

  async deleteOrder(id) {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    return deletedOrder;
  }
}
