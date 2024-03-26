import express from "express";
import authRoute from "./routes/authRoutes.js";
import mongoDbConnect from "./config/db.js";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use("/api/v1/auth", authRoute);

mongoDbConnect();

app.listen(PORT, console.log("server started 1"));
