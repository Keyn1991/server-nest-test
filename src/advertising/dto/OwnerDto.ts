import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class OwnerDto {
  @ApiProperty({ type: 'number', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;
}

export class CarDto {
  @ApiProperty({ type: 'number', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  carId: number;
}
