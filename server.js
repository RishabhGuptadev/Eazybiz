import express from "express";
import authRoute from "./routes/authRoutes.js";
import productRoute from "./routes/productRoutes.js";
import mongoDbConnect from "./config/db.js";
import morgan from "morgan";
import cors from "cors";
const app = express();
app.use(cors());
app.use(morgan("dev"));
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/products", productRoute);

mongoDbConnect();

app.listen(PORT, console.log("server started 1"));
