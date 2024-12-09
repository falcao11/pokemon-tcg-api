import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CardCollectionsService } from './card-collections.service';
import { CreateCardCollectionDto } from './dto/create-card-collection.dto';

@ApiTags('Collections')
@Controller('collections/:id/cards')
export class CardCollectionsController {
  constructor(
    private readonly cardCollectionsService: CardCollectionsService,
  ) {}

  @Post()
  async create(
    @Param('id') id: string,
    @Body() createCardCollectionDto: CreateCardCollectionDto,
  ) {
    return await this.cardCollectionsService.create(
      id,
      createCardCollectionDto,
    );
  }

  @Get()
  async findAllCards(@Param('id') id: string) {
    return await this.cardCollectionsService.findAllCards(id);
    // return cards.map((card) => new CardCollectionEntity(card));
  }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return new CardCollectionEntity(
  //     await this.cardCollectionsService.findOne(id),
  //   );
  // }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() updateCardCollectionDto: UpdateCardCollectionDto,
  // ) {
  //   return await this.cardCollectionsService.update(
  //     id,
  //     updateCardCollectionDto,
  //   );
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return await this.cardCollectionsService.remove(id);
  // }

  // @Delete()
  // async removeMany(@Body() id: string[]) {
  //   return await this.cardCollectionsService.removeMany(id);
  // }
}
