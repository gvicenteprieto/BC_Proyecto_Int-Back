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

// const login = async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await User.findOne({ where: { email } });
//         if (!user) return res.status(404).json({ message: 'User not found' });
//         if (!user.comparePassword(password)) return res.status(401).json({ message: 'Incorrect password' });
//         const token = jwt.sign({ id: user.id }, process.env.SECRET, {
//             expiresIn: 86400
//         });
//         return res.status(200).json({ token });
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// }
// const register = async (req, res) => {
