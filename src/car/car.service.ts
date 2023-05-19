import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import { Car } from './dto/car.dto';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async createCar(car: Car): Promise<Car> {
    return this.prisma.car.create({ data: car });
  }

  async getCarById(carId: number): Promise<Car | null> {
    return this.prisma.car.findUnique({ where: { id: carId } });
  }

  async getAllCars(): Promise<Car[]> {
    return this.prisma.car.findMany();
  }

  async updateCar(carId: number, car: Car): Promise<Car | null> {
    return this.prisma.car.update({ where: { id: carId }, data: car });
  }

  async deleteCar(carId: number): Promise<Car | null> {
    return this.prisma.car.delete({ where: { id: carId } });
  }
}
