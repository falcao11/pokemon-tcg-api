import { Injectable } from '@nestjs/common';
import { CreateCardCollectionDto } from './dto/create-card-collection.dto';
import { UpdateCardCollectionDto } from './dto/update-card-collection.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CardCollectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createCardCollectionDto: CreateCardCollectionDto) {
    return await this.prismaService.cardCollection.create({
      data: {
        collection_id: createCardCollectionDto.collection_id,
        card_id: createCardCollectionDto.card_id,
      },
    });
  }

  async findAll() {
    return await this.prismaService.cardCollection.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.cardCollection.findUnique({
      where: {
        card_collection_id: id,
      },
    });
  }

  async update(id: string, updateCardCollectionDto: UpdateCardCollectionDto) {
    return await this.prismaService.cardCollection.update({
      where: {
        card_collection_id: id,
      },
      data: {
        collection_id: updateCardCollectionDto.collection_id,
        card_id: updateCardCollectionDto.card_id,
      },
    });
  }

  async remove(id: string) {
    return await this.prismaService.cardCollection.delete({
      where: {
        card_collection_id: id,
      },
    });
  }
}
