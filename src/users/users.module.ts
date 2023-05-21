import { Module } from '@nestjs/common';

import { UserController } from './users.controller';
import { UserService } from './users.service';
import { PrismaService } from '../core/orm/prisma.service';
import { RolesService } from '../roles/roles.service';

@Module({
  imports: [RolesService],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}

export class UsersModule {}
