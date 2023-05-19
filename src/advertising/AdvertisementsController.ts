import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { AdvertisementsService } from './AdvertisementsService';
import { CreateAdvertisementDto } from './dto/CreateAdvertisementDto';
import { UpdateAdvertisementDto } from './dto/UpdateAdvertisementDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('advertisements')
@ApiTags('Advertisements')
export class AdvertisementsController {
  constructor(private readonly advertisementsService: AdvertisementsService) {}

  @ApiOperation({ summary: 'Отримати всі оголошення' })
  @ApiResponse({ status: 200, description: 'Успішно отримано всі оголошення' })
  @Get()
  getAllAdvertisements() {
    return this.advertisementsService.getAllAdvertisements();
  }

  @ApiOperation({ summary: 'Отримати оголошення за ID' })
  @ApiResponse({ status: 200, description: 'Успішно отримано оголошення' })
  @ApiResponse({ status: 404, description: 'Оголошення не знайдено' })
  @Get(':id')
  getAdvertisementById(@Param('id') id: number) {
    return this.advertisementsService.getAdvertisementById(id);
  }

  @ApiOperation({ summary: 'Створити оголошення' })
  @ApiResponse({ status: 201, description: 'Оголошення успішно створено' })
  @Post()
  createAdvertisement(@Body() createAdvertisementDto: CreateAdvertisementDto) {
    return this.advertisementsService.createAdvertisement(
      createAdvertisementDto,
    );
  }

  @ApiOperation({ summary: 'Оновити оголошення за ID' })
  @ApiResponse({ status: 200, description: 'Оголошення успішно оновлено' })
  @ApiResponse({ status: 404, description: 'Оголошення не знайдено' })
  @Patch(':id')
  updateAdvertisement(
    @Param('id') id: number,
    @Body() updateAdvertisementDto: UpdateAdvertisementDto,
  ) {
    return this.advertisementsService.updateAdvertisement(
      id,
      updateAdvertisementDto,
    );
  }

  @ApiOperation({ summary: 'Видалити оголошення за ID' })
  @ApiResponse({ status: 200, description: 'Оголошення успішно видалено' })
  @ApiResponse({ status: 404, description: 'Оголошення не знайдено' })
  @Delete(':id')
  deleteAdvertisement(@Param('id') id: number) {
    return this.advertisementsService.deleteAdvertisement(id);
  }
}
