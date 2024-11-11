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
    return await this.prismaService.$transaction(async (prisma) => {
      // Delete all existing cards in the collection
      await prisma.cardCollection.deleteMany({
        where: {
          collection_id: collectionId,
        },
      });

      // Insert the new selection of cards
      return await prisma.cardCollection.createMany({
        data: createCardCollectionDto.cards.map((cardId) => ({
          collection_id: collectionId,
          card_id: cardId,
        })),
      });
    });
  }

  // async findAll() {
  //   return await this.prismaService.cardCollection.findMany();
  // }

  // async findOne(id: string) {
  //   return await this.prismaService.cardCollection.findUnique({
  //     where: {
  //       card_collection_id: id,
  //     },
  //   });
  // }

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

  // async remove(id: string) {
  //   return await this.prismaService.cardCollection.delete({
  //     where: {
  //       card_collection_id: id,
  //     },
  //   });
  // }

  // async removeMany(id: string[]) {
  //   return await this.prismaService.cardCollection.deleteMany({
  //     where: {
  //       card_collection_id: {
  //         in: id,
  //       },
  //     },
  //   });
  // }
}
