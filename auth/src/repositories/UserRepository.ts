import { PrismaClient, User } from '@prisma/client';
import { BaseRepository } from './BaseRepository';

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

  async create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }



}