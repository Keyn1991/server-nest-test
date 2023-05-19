import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateAdvertisementDto {
  @ApiProperty({ type: 'string', example: 'Title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: 'string', example: 'Description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: 'number', example: 100 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ type: 'string', example: 'USD' })
  @IsNotEmpty()
  @IsString()
  currency: string;

  @ApiProperty({ type: 'string', example: 'Active' })
  @IsNotEmpty()
  @IsString()
  status: string;

  @ApiProperty({ type: 'number', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  ownerId: number;

  @ApiProperty({ type: 'number', example: 1 })
  @IsNotEmpty()
  @IsNumber()
  carId: number;
}
