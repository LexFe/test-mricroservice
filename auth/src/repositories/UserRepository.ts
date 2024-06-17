import { PrismaClient, User } from '@prisma/client';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository {
  constructor(prismaClient: PrismaClient) {
    super(prismaClient);
  }

  async create(data: User): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findAll(skip : number , take : number): Promise<User[]> {
    return this.prisma.user.findMany({
      skip,
      take,
    });
  }

  // Add more CRUD operations as needed
}