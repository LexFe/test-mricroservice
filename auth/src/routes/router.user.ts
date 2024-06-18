
import { Router } from "../common/helpers/router";
import { UserController } from "../controllers";
import { UserService } from "../services";
import { PrismaClient } from "@prisma/client"; 

const userRouter = new Router(); 
const prisma = new PrismaClient();
const userService =  new UserService(prisma);
const userController = new UserController(userService);

userRouter.get(userController.getAll.path, userController.getAll.handler);

export default userRouter.instance;