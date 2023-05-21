import { Injectable } from '@nestjs/common';

import { PrismaService } from '../core/orm/prisma.service';
import { Role, RoleValue } from '@prisma/client';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const { value, description } = createRoleDto;
    return this.prisma.role.create({
      data: { value: RoleValue[value], description },
    });
  }

  async findAll(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  async findOne(id: string): Promise<Role | undefined> {
    return this.prisma.role.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role | null> {
    const { value, description } = updateRoleDto;
    return this.prisma.role.update({
      where: { id },
      data: { value: value ? RoleValue[value] : undefined, description },
    });
  }

  async remove(id: string): Promise<Role | null> {
    return this.prisma.role.delete({
      where: { id },
    });
  }
}
