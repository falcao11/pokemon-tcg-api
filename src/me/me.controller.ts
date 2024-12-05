import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { MeService } from './me.service';

@ApiTags('Me')
@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @ApiProperty()
  @UseGuards(AuthGuard)
  @Get('/')
  async getProfile(@GetCurrentUser() userId) {
    return await this.meService.getProfile(userId.sub);
  }

  @ApiProperty()
  @UseGuards(AuthGuard)
  @Patch('/')
  async updateProfile(@GetCurrentUser() userId, @Body() user: UpdateUserDto) {
    return this.meService.updateProfile(userId.sub, user);
  }
}
