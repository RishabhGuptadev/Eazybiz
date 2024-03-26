import mongoose from "mongoose";

const mongoDbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rishabh852768:rishabh852768@cluster.nurkf7k.mongodb.net/ecommerce"
    );
    console.log("database connection successful");
  } catch (error) {
    console.log("Something went wrong...", error);
  }
};

export default mongoDbConnect;
