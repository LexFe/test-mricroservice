import express from 'express'
import { getAllUsersController } from '../controllers/index'

const userRouter = express.Router();

userRouter.get("/", getAllUsersController);

console.log("test");

export default userRouter;