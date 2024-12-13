import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { PrismaService } from 'src/prisma.service';
import { SignUpDto } from './dto/signUp.dto';
import { users } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import { SignInDto } from './dto/signIn.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}
  async signUp(dto: SignUpDto): Promise<{ user: users; token: string }> {
    const existingUserWithThisEmail = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    const existingUserWithThisPhoneNumber = await this.prisma.users.findUnique({
      where: {
        phone_number: dto.phone_number,
      },
    });
    if (existingUserWithThisEmail) {
      throw new HttpException('email has be taken', HttpStatus.BAD_REQUEST);
    }
    if (existingUserWithThisPhoneNumber) {
      throw new HttpException(
        'phoneNumber has be taken',
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPass = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.users.create({
      data: { ...dto, password: hashedPass },
    });
    const token = await this.authService.generateToken(user);
    return { user: user, ...token };
  }

  async signIn(dto: SignInDto): Promise<{ user: users; token: string }> {
    const currentUser = await this.prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!currentUser) {
      throw new HttpException(
        'invalid email or password',
        HttpStatus.NOT_FOUND,
      );
    }
    const isMatch = await bcrypt.compare(dto.password, currentUser.password);
    if (!isMatch) {
      throw new HttpException(
        'invalid email or password',
        HttpStatus.BAD_REQUEST,
      );
    }
    const token = await this.authService.generateToken(currentUser);
    return { user: currentUser, ...token };
  }
}
