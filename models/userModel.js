import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
      trim: true,
    },
    phone: {
      required: true,
      type: Number,
    },
    role: {
      required: true,
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);
