import { PrismaClient } from "@prisma/client";
import { UserService } from "../services/index";
import { RequestHandler } from "express";


const prisma = new PrismaClient();
const userService :  UserService = new UserService(prisma);

export const getAllUsersController : RequestHandler = async (req,res) => {
    try {
        const users = await userService.getAllUsers(0,20);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send
    }
}

export const createUserController : RequestHandler = async (req,res) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send
    }
}