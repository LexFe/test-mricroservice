import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../repositories/index";
import { RequestHandler } from "express";

const prisma = new PrismaClient();
const userService : UserRepository = new UserRepository(prisma);

export const getAllUsersController : RequestHandler = async (req,res) => {
    try {
        console.log("Get all users controller");
        const users = await userService.getAllUsers(10,20);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send
    }
}