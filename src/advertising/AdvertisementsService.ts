import { Injectable } from '@nestjs/common';

import { CreateAdvertisementDto } from './dto/CreateAdvertisementDto';
import { UpdateAdvertisementDto } from './dto/UpdateAdvertisementDto';
import { PrismaService } from '../core/orm/prisma.service';

@Injectable()
export class AdvertisementsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllAdvertisements() {
    return this.prisma.advertisement.findMany();
  }

  async getAdvertisementById(id: number) {
    return this.prisma.advertisement.findUnique({
      where: { id },
    });
  }

  async createAdvertisement(createAdvertisementDto: CreateAdvertisementDto) {
    const { title, description, price, ownerId, carId } =
      createAdvertisementDto;

    return this.prisma.advertisement.create({
      data: {
        title,
        description,
        price,
        currency: createAdvertisementDto.currency,
        status: createAdvertisementDto.status,
        ownerId,
        carId,
      },
    });
  }

  async updateAdvertisement(
    id: number,
    updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.prisma.advertisement.update({
      where: { id },
      data: updateAdvertisementDto,
    });
  }

  async deleteAdvertisement(id: number) {
    return this.prisma.advertisement.delete({
      where: { id },
    });
  }
}
