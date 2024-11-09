import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CardCollectionsService } from './card-collections.service';
import { CreateCardCollectionDto } from './dto/create-card-collection.dto';
import { UpdateCardCollectionDto } from './dto/update-card-collection.dto';
import { ApiTags } from '@nestjs/swagger';
import { CardCollectionEntity } from './entities/card-collection.entity';

ApiTags('Card Collections')
@Controller('card-collections')
export class CardCollectionsController {
  constructor(private readonly cardCollectionsService: CardCollectionsService) {}

  @Post()
  async create(@Body() createCardCollectionDto: CreateCardCollectionDto) {
    return new CardCollectionEntity (await this.cardCollectionsService.create(createCardCollectionDto));
  }

  @Get()
  async findAll() {
    const cards = await this.cardCollectionsService.findAll();
    return cards.map((card) => new CardCollectionEntity(card));
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new CardCollectionEntity(await this.cardCollectionsService.findOne(id));
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCardCollectionDto: UpdateCardCollectionDto) {
    return await this.cardCollectionsService.update(id, updateCardCollectionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.cardCollectionsService.remove(id);
  }
}
