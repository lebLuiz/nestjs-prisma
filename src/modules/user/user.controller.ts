import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/types/classes/create-user.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic() // Informa que esse endpoint não precisa de restrição de token
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

}
