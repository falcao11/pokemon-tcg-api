import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByEmail(email);
    if ((await bcrypt.compare(pass, user?.password)) === false) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: user.userId,
      email: user.email,
      username: user.username,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(payload: CreateUserDto) {
    payload.password = await bcrypt.hash(payload.password, 10);
    const user = await this.usersService.create(payload);
    return user;
  }
}
