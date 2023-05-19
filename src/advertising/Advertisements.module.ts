import { Module } from '@nestjs/common';
import { AdvertisementsService } from './AdvertisementsService';
import { AdvertisementsController } from './AdvertisementsController';
import { PrismaModule } from '../core/orm/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AdvertisementsController],
  providers: [AdvertisementsService],
})
export class AdvertisementsModule {}
