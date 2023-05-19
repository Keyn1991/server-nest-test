import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { Car } from './dto/car.dto';

@Controller('cars')
@ApiTags('Cars')
export class CarController {
  constructor(private carService: CarService) {}

  @ApiOperation({ summary: 'Створити автомобіль' })
  @ApiResponse({
    status: 201,
    description: 'Автомобіль успішно створено',
    type: Car,
  })
  @Post()
  createCar(@Body() car: Car): Promise<Car> {
    return this.carService.createCar(car);
  }

  @ApiOperation({ summary: 'Отримати всі автомобілі' })
  @ApiResponse({
    status: 200,
    description: 'Успішно отримано всі автомобілі',
    isArray: true,
  })
  @Get()
  getAllCars(): Promise<Car[]> {
    return this.carService.getAllCars();
  }

  @ApiOperation({ summary: 'Отримати автомобіль за ID' })
  @ApiResponse({
    status: 200,
    description: 'Успішно отримано автомобіль',
  })
  @ApiResponse({ status: 404, description: 'Автомобіль не знайдено' })
  @Get(':id')
  getCarById(@Param('id') carId: number): Promise<Car | null> {
    return this.carService.getCarById(carId);
  }

  @ApiOperation({ summary: 'Оновити автомобіль за ID' })
  @ApiResponse({
    status: 200,
    description: 'Автомобіль успішно оновлено',
    type: Car,
  })
  @ApiResponse({ status: 404, description: 'Автомобіль не знайдено' })
  @Put(':id')
  updateCar(@Param('id') carId: number, @Body() car: Car): Promise<Car | null> {
    return this.carService.updateCar(carId, car);
  }

  @ApiOperation({ summary: 'Видалити автомобіль за ID' })
  @ApiResponse({
    status: 200,
    description: 'Автомобіль успішно видалено',
  })
  @ApiResponse({ status: 404, description: 'Автомобіль не знайдено' })
  @Delete(':id')
  deleteCar(@Param('id') carId: number): Promise<Car | null> {
    return this.carService.deleteCar(carId);
  }
}
