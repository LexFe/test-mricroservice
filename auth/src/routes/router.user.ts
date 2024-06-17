import express from 'express';
import { getAllUsersController ,createUserController } from '../controllers/index';

const userRouter = express.Router();

userRouter.get('/', getAllUsersController);
userRouter.post('/',createUserController );

export default userRouter;
