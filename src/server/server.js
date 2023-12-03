import express from 'express';
import routerProducts from '../routes/productRouter.js';
import routerCart from '../routes/cartRouter.js';
import routerAuth from '../routes/authRouter.js';
import routerError from '../utils/errorRouter.js';
import validateToken from '../utils/validateToken.js';

const server = express();

//middlewares
server.use(express.json());
server.use('/api/', routerAuth);

//token middleware authentication for all routes
server.use(validateToken)

//routes
server.use('/api/', routerProducts);
server.use('/api/', routerCart);

//error middleware
server.use(routerError)

export default server;
