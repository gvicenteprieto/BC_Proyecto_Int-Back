import jwt from 'jsonwebtoken';
import { config } from 'dotenv';

config();

const generateJWT = (email) => {
   const payload = { email: email };
    const token = jwt.sign(payload, process.env._KEY, {
        expiresIn: "5h"
    });
    return token;
}

export default generateJWT;