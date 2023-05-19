import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'buyer', description: 'Значення ролі' })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: 'Роль покупця', description: 'Опис ролі' })
  @IsString()
  description: string;
}
