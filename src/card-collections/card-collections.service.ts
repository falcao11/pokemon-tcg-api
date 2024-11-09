import { Injectable } from '@nestjs/common';
import { CreateCardCollectionDto } from './dto/create-card-collection.dto';
import { UpdateCardCollectionDto } from './dto/update-card-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CardCollectionsService {
  constructor(private readonly prismaService :PrismaService) {}

  async create(createCardCollectionDto: CreateCardCollectionDto) {
    return await this.prismaService.cardCollection.create({
      data: {
        collectionId: createCardCollectionDto.collectionId,
        cardId: createCardCollectionDto.cardId
      }  
    }) ;
  }

  async findAll() {
    return await this.prismaService.cardCollection.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.cardCollection.findUnique({
      where: {
        cardCollectionId: id
      }
    });
  }

  async update(id: string, updateCardCollectionDto: UpdateCardCollectionDto) {
    return await this.prismaService.cardCollection.update({
      where: {
        cardCollectionId: id
      },
      data: {
        collectionId: updateCardCollectionDto.collectionId,
        cardId: updateCardCollectionDto.cardId
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.cardCollection.delete({
      where: {
        cardCollectionId: id
      }
    });
  }
}