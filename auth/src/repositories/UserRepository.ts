import { PrismaClient, User } from '@prisma/client';
import { BaseRepository } from '../core';

export class UserRepository extends BaseRepository {
  constructor(private readonly prismaClient: PrismaClient) {
    super(prismaClient);
  }

  async createUser(email: string,  password : string): Promise<User> {
    return this.prismaClient.user.create({
      data: {
        email,
        password, 
      },
    });
  }

  async getAllUsers(skip : number , take : number): Promise<User[]> {
    return this.prismaClient.user.findMany({
      skip,
      take,
    });
  }

//   async getUserById(id: number): Promise<User | null> {
//     return this.prisma.user.findUnique({
//       where: {
//         id,
//       },
//     });
//   }

  // Add more CRUD operations as needed
}