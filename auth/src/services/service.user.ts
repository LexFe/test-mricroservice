import { PrismaClient, User } from '@prisma/client';
import { UserRepository } from '../repositories';

export class UserService {
  private userRepository: UserRepository;

  constructor(prismaClient: PrismaClient) {
    this.userRepository = new UserRepository(prismaClient);
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async getAllUsers(skip: number, take: number): Promise<User[]> {
    return this.userRepository.findAll(skip, take);
  }

  async createUser(data:  Omit<User, 'id'> ): Promise<User> {
    return this.userRepository.create(data);
  }
}
