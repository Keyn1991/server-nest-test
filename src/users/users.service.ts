import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { User } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        username: user.username,
        email: user.email,
        password: user.password,
      },
    });
  }

  async getUserById(userId: number): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  async updateUser(userId: number, updatedUser: User): Promise<User | null> {
    return this.prisma.user.update({
      where: { id: userId },
      data: updatedUser,
    });
  }

  async deleteUser(userId: number): Promise<User | null> {
    return this.prisma.user.delete({ where: { id: userId } });
  }

  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findByUsername(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }

  async findUserByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email },
    });
  }
}
