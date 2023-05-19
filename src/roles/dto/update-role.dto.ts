import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class UpdateRoleDto {
  @ApiProperty({ example: 'buyer', description: 'Значення ролі' })
  @IsString()
  value?: string;

  @ApiProperty({ example: 'Роль покупця', description: 'Опис ролі' })
  @IsString()
  description?: string;
}
