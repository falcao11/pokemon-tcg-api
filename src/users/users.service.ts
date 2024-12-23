import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: {
        email: createUserDto.email,
        username: createUserDto.username,
        password: createUserDto.password,
        // image: createUserDto.image,
      },
    });
  }

  async findAll() {
    return await this.prismaService.user.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.user.findUnique({
      where: {
        user_id: id,
      },
    });
  }

  async findByEmail(email: string) {
    const userEmail = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    });
    return userEmail;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.prismaService.user.update({
      where: {
        user_id: id,
      },
      data: {
        username: updateUserDto.username,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.user.delete({
      where: {
        user_id: id,
      },
    });
  }
}
