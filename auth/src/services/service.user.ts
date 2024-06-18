import { PrismaClient, User } from '@prisma/client';
import { UserRepository } from '../repositories';
import { UserModel } from '../interfaces';

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

  async createUser(data:UserModel): Promise<User> {
    return this.userRepository.create(data);
  }

  async updateUser(id: string, data: User): Promise<User> {
    return this.userRepository.update(id, data);
  }

  async deleteUser(id: string): Promise<User> {
    return this.userRepository.delete(id);
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findByEmail(email);
  }
}
