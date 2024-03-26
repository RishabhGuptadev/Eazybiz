import express from "express";
import {
  addProductController,
  deleteProductController,
  editProductController,
  getAllProductsController,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/add-product", addProductController);

router.put("/edit-product/:_id", editProductController);

router.delete("/delete-product/:_id", deleteProductController);

router.get("/all-product", getAllProductsController);

export default router;
