import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Injectable()
export class MeService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProfile(userId: string) {
    return await this.prismaService.user.findUniqueOrThrow({
      where: {
        user_id: userId,
      },
    });
  }

  async updateProfile(user_id: string, updateMeDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        user_id: user_id,
      },
      data: {
        username: updateMeDto.username,
      },
    });
  }
}
