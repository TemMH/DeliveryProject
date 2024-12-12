import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { SignInDto } from './dto/signIn.dto';
import { AuthResponseDto } from 'src/auth/dto/auth.dto';
import { SignUpDto } from './dto/signUp.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post('/signIn')
  async signIn(@Body() userData: SignInDto): Promise<AuthResponseDto> {
    return this.usersService.signIn(userData);
  }
  @Post('/signUp')
  async signUp(@Body() userData: SignUpDto): Promise<AuthResponseDto> {
    return this.usersService.signUp(userData);
  }
}
