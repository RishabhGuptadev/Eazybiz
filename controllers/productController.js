import productModel from "../models/productModel.js";

export const addProductController = async (req, res) => {
  try {
    const { name, quantity, size } = req.body;
    await productModel?.create({
      name,
      quantity,
      size,
    });
    res.status(200).send({
      status: true,
      message: "Product added successfully",
      productDetails: { name, quantity, size },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      status: true,
      message: "Couldn't add product successfully",
      error,
    });
  }
};

export const editProductController = async (req, res) => {
  try {
    const { name, quantity, size } = req.body;
    const _id = req.params._id;
    await productModel?.findByIdAndUpdate(_id, {
      name,
      size,
      quantity,
    });

    res.status(200).send({
      status: true,
      message: "Product updated successfully",
      productDetails: { name, quantity, size },
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      status: true,
      message: "Couldn't update product successfully",
      error,
    });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const _id = req.params._id;
    await productModel?.findByIdAndDelete(_id);
    res.status(200).send({
      status: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).send({
      status: true,
      message: "Couldn't delete product successfully",
      error,
    });
  }
};

export const getAllProductsController = async (req, res) => {
  try {
    const products = await productModel?.find({});

    res.status(200).send({
      status: true,
      message: "All Products",
      products,
    });
  } catch (error) {
    res.status(500).send({
      status: true,
      message: "Couldn't delete product successfully",
      error,
    });
  }
};
