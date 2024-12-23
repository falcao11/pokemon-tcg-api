import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto, userId: string) {
    return await this.prismaService.collection.create({
      data: {
        name: createCollectionDto.name,
        set_id: createCollectionDto.set_id,
        user_id: userId,
      },
    });
  }

  async findAll(userId: string) {
    return {
      collections: await this.prismaService.collection.findMany({
        where: {
          user_id: userId,
        },
      }),
    };
  }

  async findOne(id: string, userId: string) {
    const collection = await this.prismaService.collection.findUnique({
      where: {
        collection_id: id,
        user_id: userId,
      },
    });

    if (!collection) {
      throw new NotFoundException();
    }

    return collection;
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
