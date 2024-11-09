import { Controller, Get, Body, Patch, UseGuards } from '@nestjs/common';
import { MeService } from './me.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Me')
@Controller('me')
export class MeController {
  constructor(private readonly meService: MeService) {}

  @ApiProperty()
  @UseGuards(AuthGuard)
  @Get('/')
  async getProfile(@GetCurrentUser() userId) {
    console.log('Ola id: ' + userId.sub);
    return await this.meService.getProfile(userId.sub);
  }

  @ApiProperty()
  @UseGuards(AuthGuard)
  @Patch('/')
  async updateProfile(@GetCurrentUser() userId, @Body() user: UpdateUserDto) {
    return this.meService.updateProfile(userId.sub, user);
  }
}
