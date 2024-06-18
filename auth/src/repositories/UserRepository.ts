import { PrismaClient, User } from '@prisma/client';
import { BaseRepository } from './BaseRepository';
import { UserModel } from '../interfaces';

export class UserRepository extends BaseRepository {
  constructor(prismaClient: PrismaClient) {
    super(prismaClient);
  }

  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findAll(skip : number , take : number): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
    });
  }

  async create(data: UserModel): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async update(id: string, data: User): Promise<User> {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}