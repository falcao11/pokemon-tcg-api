import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCardCollectionDto } from './dto/create-card-collection.dto';

@Injectable()
export class CardCollectionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    collectionId: string,
    createCardCollectionDto: CreateCardCollectionDto,
  ) {
    console.log('Cards: ', createCardCollectionDto.cards);
    console.log('Collection ID: ', collectionId);
    return await this.prismaService.collection.update({
      where: {
        collection_id: collectionId,
      },
      data: {
        cards: {
          create: [
            ...createCardCollectionDto.cards.map((cardId) => ({
              card_id: cardId,
            })),
          ],
        },
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

  // async update( ,id: string, updateCardCollectionDto: UpdateCardCollectionDto) {
  //   return await this.prismaService.cardCollection.update({
  //     where: {
  //       card_collection_id: id,
  //     },
  //     data: {
  //       collection_id: updateCardCollectionDto.collection_id,
  //       card_id: updateCardCollectionDto.card_id,
  //     },
  //   });
  // }

  async remove(id: string) {
    return await this.prismaService.cardCollection.delete({
      where: {
        card_collection_id: id,
      },
    });
  }
}
