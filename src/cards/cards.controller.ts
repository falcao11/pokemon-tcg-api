import { Controller, Get, Param } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';

@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @ApiProperty()
  @Get('/set/:id')
  findAll(@Param('id') id: string) {
    return this.cardsService.findBySet(id);
  }

  @ApiProperty()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cardsService.findById(id);
  }
}
