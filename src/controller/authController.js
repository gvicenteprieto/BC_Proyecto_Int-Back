import {loginService, registerService} from '../service/authService.js';


const loginController = async (req, res) => {
   return await loginService(req, res);
}

const registerController = async (req, res) => {
    // return await registerService.register(req, res);
    return await registerService(req, res);
    }



export  {loginController, registerController}

















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