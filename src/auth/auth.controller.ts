import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
import { Public } from './decorators/public-strategy';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('')
@ApiTags('Auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiResponse({
    status: 200,
    type: [UserEntity],
  })
  signIn(@Body() login: LoginUserDto) {
    return this.authService.signIn(login.email, login.password);
  }
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('signup')
  @ApiResponse({
    status: 200,
    type: [UserEntity],
  })
  async signUp(@Body() signUpDto: CreateUserDto) {
    const payload = {
      username: signUpDto.username,
      email: signUpDto.email,
      password: signUpDto.password,
    };
    return this.authService.signUp(payload);
  }
}
