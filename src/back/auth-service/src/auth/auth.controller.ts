import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/verifyToken')
  async verifyToken(@Body() token: { token: string }): Promise<any> {
    return this.authService.verifyToken(token);
  }
}
