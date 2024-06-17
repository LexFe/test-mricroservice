import { PrismaClient, User } from '@prisma/client';
import { UserRepository } from '../repositories';

export class UserService {
  private userRepository: UserRepository;

  constructor(prismaClient: PrismaClient) {
    this.userRepository = new UserRepository(prismaClient);
  }

    async createUser(data: User): Promise<User> {
        return this.userRepository.create(data);
    }

    async getAllUsers(skip: number, take: number): Promise<User[]> {
        return this.userRepository.findAll(skip, take);
    }
}