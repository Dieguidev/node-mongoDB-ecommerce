import OrderModel from '../db/models/order.model.js';
import ProductService from '../services/product.services.js';
const productService = new ProductService();

export default class OrderService {
  constructor() {}

  async createOrder(order) {
    let amount = 0;

    // Usamos Promise.all para esperar que todas las llamadas a getProductById se completen.
    await Promise.all(
      order.products.map(async (product) => {
        const searchProduct = await productService.getProductById(
          product.productId
        );
        amount += searchProduct.price * product.quantity;
      })
    );

    order.amount = amount;
    console.log(order);

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
      { new: true },
    );
    return updatedOrder;
  }

  async deleteOrder(id) {
    const deletedOrder = await OrderModel.findByIdAndDelete(id);
    return deletedOrder;
  }
}
