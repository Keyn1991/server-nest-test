import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './dto/user.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { CurrentUser } from '../auth/decorators/user.decorator';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Отримати профіль користувача' })
  @ApiResponse({
    status: 200,
    type: User,
    description: 'Успішно отримано профіль користувача',
  })
  @Auth()
  @Get('profile')
  async getProfile(@CurrentUser('id') id: number) {
    return this.userService.getUserById(id);
  }

  @ApiOperation({ summary: 'Створити нового користувача' })
  @ApiResponse({ status: 201, description: 'Користувач успішно створений' })
  @Post()
  async createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  // @ApiOperation({ summary: 'Отримати користувача за ID' })
  // @Get(':id')
  // async getUserById(@Param('id') userId: number): Promise<User | null> {
  //   return this.userService.getUserById(userId);
  // }

  @ApiOperation({ summary: 'Оновити профіль користувача' })
  @ApiResponse({
    status: 200,
    description: 'Профіль користувача успішно оновлено',
  })
  @Auth()
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('profile')
  async updateUser(@CurrentUser('id') id: number, @Body() user: User) {
    return this.userService.updateUser(id, user);
  }

  @ApiOperation({ summary: 'Видалити користувача за ID' })
  @ApiResponse({
    status: 200,
    type: User,
    description: 'Користувача успішно видалено',
  })
  @Delete(':id')
  async deleteUser(@Param('id') userId: number): Promise<User | null> {
    return this.userService.deleteUser(userId);
  }

  @ApiOperation({ summary: 'Отримати всіх користувачів' })
  @ApiOkResponse({
    description: 'Успішно отримано всіх користувачів',
    type: [User],
    isArray: true,
  })
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
