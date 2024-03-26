import userModel from "./models/userModel.js";

export const checkIsAdmin = async (req, res, next) => {
  const isAdmin = await userModel?.findById(req.user?._id);
  console.log("req22", req);
  if (isAdmin?.role !== 1) {
    return res.send({
      message: "Unauthorized",
      user: req.user ?? "Nothing",
    });
  }
  if (isAdmin?.role === 1) {
    next();
  }
};
