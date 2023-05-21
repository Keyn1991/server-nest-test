import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';

import { RolesService } from './roles.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from '@prisma/client';

@Controller('roles')
@ApiTags('Roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ApiOperation({ summary: 'Створити роль' })
  @ApiResponse({ status: 201, description: 'Роль успішно створена' })
  @Post()
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
    return this.rolesService.create(createRoleDto);
  }

  @ApiOperation({ summary: 'Отримати всі ролі' })
  @ApiResponse({ status: 200, description: 'Успішно отримано всі ролі' })
  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  @ApiOperation({ summary: 'Отримати роль за ID' })
  @ApiResponse({ status: 200, description: 'Успішно отримано роль' })
  @ApiResponse({ status: 404, description: 'Роль не знайдена' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Role | undefined> {
    return this.rolesService.findOne(id);
  }

  @ApiOperation({ summary: 'Оновити роль за ID' })
  @ApiResponse({ status: 200, description: 'Роль успішно оновлена' })
  @ApiResponse({ status: 404, description: 'Роль не знайдена' })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Role | null> {
    return this.rolesService.update(id, updateRoleDto);
  }

  @ApiOperation({ summary: 'Видалити роль за ID' })
  @ApiResponse({ status: 200, description: 'Роль успішно видалена' })
  @ApiResponse({ status: 404, description: 'Роль не знайдена' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Role | null> {
    return this.rolesService.remove(id);
  }
}
