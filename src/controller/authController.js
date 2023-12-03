import {
  loginService,
  registerService,
  getUsersService,
  getUserByIdService,
  getUserByEmailService,
  deleteUserByIdService,
} from "../service/authService.js";

const loginController = async (req, res) => {
  try {
    return await loginService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const registerController = async (req, res) => {
  try {
    return await registerService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUsersController = async (req, res) => {
  try {
    return await getUsersService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserByIdController = async (req, res) => {
  try {
    return await getUserByIdService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const getUserByEmailController = async (req, res) => {
  try {
    return await getUserByEmailService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteUserByIdController = async (req, res) => {
  try {
    return await deleteUserByIdService(req, res);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export {
  loginController,
  registerController,
  getUsersController,
  getUserByEmailController,
  getUserByIdController,
  deleteUserByIdController,
};
