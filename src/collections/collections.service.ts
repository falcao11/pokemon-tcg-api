import { Injectable } from '@nestjs/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CollectionsService {
  constructor (private readonly prismaService: PrismaService) {}

  async create(createCollectionDto: CreateCollectionDto) {
    return await this.prismaService.collection.create({
      data: {
        setId: createCollectionDto.setId,
        userId: createCollectionDto.userId
      } 
    });
  }

  async findAll() {
    return await this.prismaService.collection.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.collection.findUnique({
      where: {
        collectionId: id
      }
    });
  }

  async update(id: string, updateCollectionDto: UpdateCollectionDto) {
    return await this.prismaService.collection.update({
      where: {
        collectionId: id
      },
      data: {
        setId: updateCollectionDto.setId,
        userId: updateCollectionDto.userId	
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.collection.delete({
      where: {
        collectionId: id
      }
    });
  }
}
