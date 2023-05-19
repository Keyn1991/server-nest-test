import { ApiProperty } from '@nestjs/swagger';

export class Car {
  @ApiProperty({ example: 'Toyota', description: 'Марка автомобіля' })
  brand: string;

  @ApiProperty({ example: 'Camry', description: 'Модель автомобіля' })
  model: string;

  @ApiProperty({ example: 2022, description: 'Рік випуску автомобіля' })
  year: number;

  @ApiProperty({ example: 25000, description: 'Ціна автомобіля' })
  price: number;
}