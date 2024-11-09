import { Body, Get, Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GetCurrentUser } from 'src/auth/decorators/get-current-user.decorator';

@Injectable()
export class CollectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto, userId: string) {
    return await this.prismaService.collection.create({
      data: {
        set_id: createCollectionDto.set_id,
        user_id: userId,
      },
    });
  }

  async findAll() {
    return await this.prismaService.collection.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.collection.findUnique({
      where: {
        collection_id: id,
      },
    });
  }

  async update(id: string, updateCollectionDto: UpdateCollectionDto) {
    return await this.prismaService.collection.update({
      where: {
        collection_id: id,
      },
      data: {
        set_id: updateCollectionDto.set_id,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.collection.delete({
      where: {
        collection_id: id,
      },
    });
  }
}
