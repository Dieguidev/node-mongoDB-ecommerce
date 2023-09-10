import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: Number, require: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
