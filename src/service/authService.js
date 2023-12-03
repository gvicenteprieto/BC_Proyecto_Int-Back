import UserModel from "../models/users.model.js";
import bcrypt from "bcryptjs";
import generateJWT from "../utils/generateJWT.js";

const loginService = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({email: email});

    if (!user) {
      console.log("User not found");
      return res.status(404).json({ message: "Email or Password not found" });
    }

    console.log("user exists", user);

    const isValidPassword = bcrypt.compareSync(password, user[0].password);
    console.log("isValidPassword", isValidPassword);

    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid Email or Password" });

    const token = generateJWT(email, password);
    return res.status(200).json({ user: user, token: token });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const registerService = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const searchUser = await UserModel.findOne({ email: email });
    if (searchUser) {
      return res.status(404).json({ message: "User already exists" });
    }

    const newUser = new UserModel({
      username,
      email,
      password: bcrypt.hashSync(password),
    });

    await newUser.save();

    return res.status(201).json({ message: "User created successfully", newUser: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUsersService = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserByIdService = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserByEmailService = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.params.email });
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserByIdService = async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ message: "User deleted", deletedUser: deletedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export {
  loginService,
  registerService,
  getUsersService,
  getUserByIdService,
  getUserByEmailService,
  deleteUserByIdService,
};
