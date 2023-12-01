//traer modelo de usuario
//con bcrypt hashear la contraseña
//guardar en la base de datos
//devolver respuesta al usuario
//

//bcrypt hashear la contraseña del model para la base de datos
// encoded in base64 format 


import userModel from '../models/users.model.js';
import bcrypt from 'bcryptjs';
import generateJWT from '../utils/generateJWT.js';

const loginService = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });
        if (!user) return res.status(404).json({ message: 'Email or Password not found' });
        // const passwordMatch = await bcrypt.compare(password, user.password);
        // if (!passwordMatch) return res.status(401).send({ message: 'Invalid password' });
        // const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1h' });
        // return res.status(200).send({ token: token });

        const isValidPassword = bcrypt.compareSync(password, user.password);

        if (!isValidPassword) return res.status(401).json({ message: 'Invalid Email or Password' });

        const token = generateJWT(email);
        return res.status(200).json({ token: token });



    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};




const registerService = async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = new userModel({
            email,
            password: bcrypt.hashSync(password)
        });
        await newUser.save();
        return res.status(201).json({ message: 'User created' });

} catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
}
}

export { loginService, registerService };