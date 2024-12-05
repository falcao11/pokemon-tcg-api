import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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
    if (!user) {
      throw new UnauthorizedException('Email does not exist');
    } else {
      if ((await bcrypt.compare(pass, user?.password)) === false) {
        throw new UnauthorizedException('Password is incorrect');
      }
      const payload = {
        sub: user.user_id,
        email: user.email,
        username: user.username,
      };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    }
  }

  async signUp(payload: CreateUserDto) {
    payload.password = await bcrypt.hash(payload.password, 10);
    try {
      const user = await this.usersService.create(payload);
      return user;
    } catch (error) {
      if (error.code === 'P2002') {
        const target = error.meta.target;
        if (target.includes('username')) {
          throw new ConflictException('Username already exists');
        } else if (target.includes('email')) {
          throw new ConflictException('Email already exists');
        }
      }
      throw error;
    }
  }
}
