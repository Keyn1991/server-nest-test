import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdvertisementsController } from './advertising/AdvertisementsController';
import { PrismaService } from './core/orm/prisma.service';
import { AdvertisementsModule } from './advertising/Advertisements.module';
import { AdvertisementsService } from './advertising/AdvertisementsService';
import { CarModule } from './car/car.module';
import { UserController } from './users/users.controller';
import { UserService } from './users/users.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { PrismaModule } from './core/orm/prisma.module';

@Module({
  imports: [
    UsersModule,
    CarModule,
    AdvertisementsModule,
    AuthModule,
    ConfigModule,
    RolesModule,
    PrismaModule,
  ],
  controllers: [AppController, AdvertisementsController, UserController],
  providers: [AppService, PrismaService, AdvertisementsService, UserService],
  exports: [PrismaService],
})
export class AppModule {}
