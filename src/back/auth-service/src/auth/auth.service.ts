import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { users } from '@prisma/client';
import { DecodedToken } from './interface/token.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async generateToken(user: users) {
    const payload = {
      email: user.email,
      roleId: user.roleId,
      sub: user.id,
    };
    return { token: this.jwtService.sign(payload) };
  }
  async verifyToken(token: string): Promise<DecodedToken> {
    try {
      return this.jwtService.verify<DecodedToken>(token);
    } catch (e) {
      throw new UnauthorizedException('invalid or expired token');
    }
  }
}
