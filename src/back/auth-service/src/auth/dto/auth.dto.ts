import { users } from '@prisma/client';

export class AuthResponseDto {
  user: users;
  token: string;
}
