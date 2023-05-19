import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAdvertisementDto {
  @ApiProperty({ type: 'string', example: 'New Title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiProperty({ type: 'string', example: 'New Description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ type: 'number', example: 100 })
  @IsOptional()
  @IsNumber()
  price?: number;
}
