import userModel from "../models/userModel.js";
import { comparePassword, hashedPassword } from "../utility.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, role } = req.body;

    const existingUser = await userModel?.findOne({ email });
    if (existingUser) {
      res.status(401).send({
        status: 401,
        message: "User already registered",
        user: req.body,
      });
    } else {
      const hashPassword = await hashedPassword(password);

      await userModel.create({
        name,
        email,
        password: hashPassword,
        address,
        phone,
        role,
      });

      res.status(200).send({
        status: 200,
        message: "Registered Successfully",
        user: { name, email, address, phone, role },
      });
    }
  } catch (error) {
    console.log("hashpassword", error);
    res.status(500).send({
      status: 500,
      message: "Something went wrong",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const emailExist = await userModel.findOne({ email });
  const { name, phone, address, role } = emailExist;
  if (!emailExist) {
    res.status(401).send({
      status: 401,
      message: "Email doesn't exist, Please register",
      user: { name, email, address, phone },
    });
  } else {
    const hashedPassword = emailExist?.password;
    const match = comparePassword(password, hashedPassword);
    if (match) {
      res.status(200).send({
        status: 200,
        message: "Log in Successful",
        user: { name, email, address, phone, role },
      });
    }
  }
};
