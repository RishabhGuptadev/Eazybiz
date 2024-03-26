import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    trim: true,
  },
  size: {
    type: [String],
    required: true,
    trim: true,
  },
});

export default mongoose.model("products", productSchema);
